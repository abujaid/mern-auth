const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateProductInput (data)
{
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.title = !isEmpty(data.title) ? data.title : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.quantity = !isEmpty(data.quantity) ? data.quantity : "";
    // Name checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "product title field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.description)) {
        errors.description = "product description field is required";
    }
    // Password checks
    if (Validator.isEmpty(data.price)) {
        errors.price = "product price field is required";
    }
    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = "product quantity field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
