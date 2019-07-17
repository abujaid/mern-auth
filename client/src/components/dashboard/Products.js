import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProducts, removeProduct } from '../../actions/productActions'
class Products extends Component
{
    componentDidMount ()
    {
        this.props.getProducts()
    }
    onRemove = (id) =>
    {
        this.props.removeProduct(id)


    }
    render ()
    {
        console.log(this.props)
        const { products } = this.props.products
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Qty</th>
                                    <th>Product Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product =>
                                        <tr key={product._id}>
                                            <td>{product.title}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <button onClick={() => this.onRemove(product._id)} className="btn btn-danger" >Remove</button>
                                            </td>
                                        </tr>
                                    )

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>
{
    return {
        products: state.poroduct
    }
}
export default connect(mapStateToProps, { getProducts, removeProduct })(Products)