import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './basket.scss';
import { BasketItem } from './BasketItem';

export const Basket = () => {
    const basketCondition = useSelector(state => state.basketCondition.condition);
    const basketItems = useSelector(state => state.basketItems);

    return (
        <div className={`basket ${!basketCondition ? 'd-none' : ''}`}>
            <h3>Your Cart</h3>
            <hr />
            < BasketItem />
            <hr />
            <div className='basket-footer d-flex'>
                <h4><b>Subtotal</b></h4>
                <span><b>48$</b></span>
            </div>
        </div>
    )
}
