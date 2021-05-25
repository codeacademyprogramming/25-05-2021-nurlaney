import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    products: [
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOAD_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state
    }
}