import axios from 'axios'
import { GET_PRODUCT, ADD_PRODUCT } from '../actions/types'

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
export const addProduct = (productData) =>
{
    return dispatch =>
    {
        axios.post('/api/products/add-product', productData).then(res =>
        {
            dispatch({ type: ADD_PRODUCT, payload: res.data })
        }).catch(err =>
        {
            console.log(err)
        })
    }
}