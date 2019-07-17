import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../actions/productActions'

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
        const { title, quantity, description, price } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Product Title</label>
                                        <input type="text" className="form-control"
                                            name="title"
                                            value={title}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quantity">Product Quantity</label>
                                        <input type="number" className="form-control"
                                            name="quantity"
                                            value={quantity}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Product Price</label>
                                        <input type="number" className="form-control"
                                            name="price"
                                            value={price}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="desc">Product Description</label>
                                        <textarea id="" cols="5" rows="5" className="form-control"
                                            name="description"
                                            value={description}
                                            onChange={this.handleChange}
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
        product: state.product
    }
}
export default connect(mapStateToProps, { addProduct })(AddProduct)