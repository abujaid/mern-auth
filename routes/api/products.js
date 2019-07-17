const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateProductInput = require('../../validation/product')
const Product = require("../../models/Product");

// @route GET api/products
// @desc Get tasks for specific project
// @access Private
router.get('/', passport.authenticate("jwt", { session: false }), (req, res) =>
{
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products));
});

// @route POST api/products/create
// @desc Create a new task
// @access Private
router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),

    (req, res) =>
    {
        const { errors, isValid } = validateProductInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const NEW_PRODUCT = new Product({
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price

        });

        NEW_PRODUCT.save()
            .then(product => res.json({
                message: 'success',
                product
            }))
            .catch(err => console.log(err));
    }
);
// delete
router.delete('/:id', passport.authenticate("jwt", { session: false }),
    (req, res) =>
    {
        Product.findById(req.params.id)
            .then(product => product.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    });

module.exports = router;