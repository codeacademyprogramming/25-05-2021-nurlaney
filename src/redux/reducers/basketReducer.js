import { ActionTypes } from '../constants/actionTypes';


export const basketReducer = (state = { condition: false }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_BASKET:
            return { ...state, condition: payload }

        default:
            return state
    }
}

export const basketReduce = (state = { items: [] }, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_BASKET:
            return { ...state, items: [...state.items, payload] }
        default:
            return state
    }
}