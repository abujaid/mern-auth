import { GET_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/types'

const initialState = {
    products: [],
    loading: false
}
const productReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            }
        default:
            return state;
    }
}

export default productReducer;