import { ActionTypes } from '../constants/actionTypes';

export const loadProducts = (products) => {
    return {
        type: ActionTypes.LOAD_PRODUCTS,
        payload: products
    }
}

export const showBasket = (basket) => {
    return {
        type: ActionTypes.SHOW_BASKET,
        payload: basket
    }
}

export const addToBasket = (product) => {
    return {
        type: ActionTypes.ADD_TO_BASKET,
        payload: product
    }
}