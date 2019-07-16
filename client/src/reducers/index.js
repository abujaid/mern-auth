import { combineReducers } from 'redux'
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import productReducer from './productReducer';

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    poroduct: productReducer
})