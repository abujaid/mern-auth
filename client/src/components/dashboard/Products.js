import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/productActions'
class Products extends Component
{
    componentDidMount ()
    {
        this.props.getProducts()
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
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product =>
                                        <tr key={product._id}>
                                            <td>{product.title}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <button className="btn btn-danger">Remove</button>
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
export default connect(mapStateToProps, { getProducts })(Products)