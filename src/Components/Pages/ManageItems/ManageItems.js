import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useItems from '../../../hooks/useItems';
import useSingleItem from '../../../hooks/useSingleItem';


const ManageItems = ({inventory}) => {
   
    const {_id, name, img, description, price, supplier, quantity} = inventory;
    
    return (
        <div className='container text-center'>
            <div>
            <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img className='pt-3' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <p>Quantity: {quantity}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Supplier:{supplier}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Price: {price} $</p>
                    </Card.Text>
                    <Button className='bg-danger m-4'  variant="primary">Delevered </Button>
                    <Button className='bg-danger'  variant="primary">Delete</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default ManageItems;