import { combineReducers } from 'redux';
import { basketReduce, basketReducer } from './basketReducer';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    basketCondition: basketReducer,
    basketItems: basketReduce
});

export default reducers;