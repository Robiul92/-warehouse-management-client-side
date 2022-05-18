import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Category = ({inventory}) => {
    const {_id, name, img, description, price, supplier, quantity} = inventory;
    
    const navigate = useNavigate();
    const navegateToDetails = id =>{
        navigate(`/inventory/${id}`);

    }
    return (
        <div>
            <Card style={{ width: '20rem'}} >
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>Price: {price}</p>
    <Card.Text>
    Quantity: {quantity}
    </Card.Text>
    <Card.Text>
    Supplier: {supplier}
    </Card.Text>
    <Card.Text>
    {description}
    </Card.Text>
    <Button className='bg-danger' onClick={() => navegateToDetails(_id)} variant="primary">Order Now: {name}</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Category;