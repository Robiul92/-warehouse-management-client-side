import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useItems from '../../../hooks/useItems';
import useSingleItem from '../../../hooks/useSingleItem';




const ManageItems = ({inventory}) => {
    const [inventorys] = useItems();
   
    const {_id, name, img, description, price, supplier, quantity} = inventory;
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if (proceed){
            const url = `http://localhost:5000/inventory/${id}`
            console.log(url);
            fetch (url, {
                method: 'DELETE'
            }) 
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        }
    }
    
    
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
                    <Button onClick={() => handleDelete(inventory._id)} className='bg-danger'  variant="primary">Delete</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default ManageItems;