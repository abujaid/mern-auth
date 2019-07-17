import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../actions/productActions'
import classnames from "classnames";

class AddProduct extends Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            title: '',
            description: '',
            quantity: '',
            price: '',
            errors: {}
        }
    }
    componentWillReceiveProps (nextProps)
    {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    handleChange = (e) =>
    {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const productData = {
            title: this.state.title,
            quantity: this.state.quantity,
            description: this.state.description,
            price: this.state.price
        }
        this.props.addProduct(productData)
    }
    render ()
    {
        console.log(this.props)
        const { errors } = this.state;
        const { title, quantity, description, price } = this.state
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Product Name</label>
                                        <p className="red-text">{errors.title}</p>
                                        <input type="text"
                                            name="title"
                                            value={title}
                                            onChange={this.handleChange}
                                            className={classnames("form-control", {
                                                invalid: errors.title
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quantity">Product Quantity</label>
                                        <p className="red-text">{errors.quantity}</p>
                                        <input type="number"
                                            name="quantity"
                                            value={quantity}
                                            onChange={this.handleChange}
                                            className={classnames("form-control", {
                                                invalid: errors.quantity
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Product Price</label>
                                        <p className="red-text">{errors.price}</p>
                                        <input type="number"
                                            name="price"
                                            value={price}
                                            onChange={this.handleChange}
                                            className={classnames("form-control", {
                                                invalid: errors.price
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="desc">Product Description</label>
                                        <p className="red-text">{errors.description}</p>
                                        <textarea id="" cols="5" rows="5"
                                            name="description"
                                            value={description}
                                            onChange={this.handleChange}
                                            className={classnames("form-control", {
                                                invalid: errors.description
                                            })}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Add Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>
{
    return {
        product: state.product,
        errors: state.errors
    }
}
export default connect(mapStateToProps, { addProduct })(AddProduct)