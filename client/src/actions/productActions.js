import axios from 'axios'
import { GET_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT, GET_ERRORS, PRODUCT_SUCCESS } from '../actions/types'

export const getProducts = () =>
{
    return dispatch =>
    {
        axios.get('/api/products').then(res =>
        {
            dispatch({ type: GET_PRODUCT, payload: res.data })
        }).catch(err =>
        {
            console.log(err)
        })
    }
}
export const addProduct = (productData, history) =>
{
    return dispatch =>
    {
        axios.post('/api/products/create', productData).then(res =>
        {
            dispatch({ type: ADD_PRODUCT, payload: res.data })
            history.push('/products')
            console.log(res.data.message)
            dispatch({ type: PRODUCT_SUCCESS, payload: res.data.message })
        }).catch(err =>
        {
            dispatch({ type: GET_ERRORS, payload: err.response.data })
        })
    }
}

// Delete Product
export const removeProduct = (id) =>
{
    return dispatch =>
    {
        axios.delete(`/api/products/${id}`).then(res =>
        {
            dispatch({ type: REMOVE_PRODUCT, payload: id })
        }).catch(err =>
        {
            console.log(err)
        })
    }
}