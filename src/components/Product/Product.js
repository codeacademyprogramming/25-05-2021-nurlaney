import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export const Product = ({ value, handlePizzaId }) => {
    return (
        <Card style={{ width: '18rem' }} className='mt-4'>
            <Card.Img variant="top" src={value.image} alt='pizza' className='ml-4' />
            <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>
                    {
                        value.topping.map(((indig, i, arr) => (
                            indig + ' '
                        )))
                    }
                </Card.Text>
                <h4 className='text-center mt-2 mb-2'><b>{value.price} $</b></h4>
                <div className='text-center mt-4'>
                    <Button onClick={handlePizzaId} id={value.id} variant="primary"><i id={value.id} className="fas fa-shopping-basket"></i></Button>
                </div>
            </Card.Body>
        </Card>
    )
}
