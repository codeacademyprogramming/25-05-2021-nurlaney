import React, { useEffect, useState, useCallback } from 'react';
import { Product } from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, loadProducts, showBasket } from '../../redux/actions/actions';
import './product.scss';
import Spinner from 'react-bootstrap/Spinner';

export const ProductList = () => {
    const products = useSelector(state => state.allProducts.products);
    const [shoBasket, setShoBasket] = useState(true);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);


    const fetchProducts = useCallback(() => fetch('https://isko88.github.io/apipizza.json')
        .then(resp => resp.json())
        .then(products => {
            dispatch(loadProducts(products));
        }).finally(() => {
            setIsLoaded(true);
        }), [dispatch])

    const handleShowBasket = () => {
        setShoBasket(!shoBasket);
        dispatch(showBasket(shoBasket));
    }
    const handlePizzaId = (e) => {
        const basketItem = products.filter(x => x.id === Number(e.target.id));
        dispatch(addToBasket(basketItem[0]));
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


    return (
        <>
            {
                isLoaded ? (
                    <section id='products' >
                        <h3 className='text-center'>Products</h3>
                        <h4 onClick={handleShowBasket} className='text-right'><i className="fas fa-shopping-basket"></i></h4>
                        <div className='row'>
                            {
                                products.map((product) => (
                                    <div className='col-md-4' key={product.id}>
                                        < Product value={product} handlePizzaId={handlePizzaId} />
                                    </div>
                                ))
                            }
                        </div>
                    </section >
                ) : (
                    <Spinner animation='border' />
                )
            }
        </>

    )
}
