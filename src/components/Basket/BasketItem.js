import React from 'react'

export const BasketItem = ({ items }) => {
    return (
        <div className='basketItem'>
            <ul>
                <li>
                    <div className='d-flex'>
                        <div className='img'>
                            <img src='https://isko88.github.io/pizza/1.png' alt='pizza small' />
                        </div>
                        <div className='pizza-name'>
                            <span>{items.name}</span>
                            <br />
                            <span><b>small</b></span>
                        </div>
                        <div className='pizza-count'>
                            <span>x1</span>
                        </div>
                        <div className='pizza-price'>
                            <span><b>{items.price}$</b></span>
                        </div>
                        <div className='pizza-remove'>
                            <span className='text-danger'><b>X</b></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
