import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CategoryDetails = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const { name, price, quantity, supplier, description, img } = category
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${categoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])


    const navigate = useNavigate();
    const handleInventories = () => {
        navigate('/manageinventory')
    }

    const handleQuantity = e => {
        
        e.preventDefault();
        const quantity = e.target.quantity.value - 1;
        const updateQuantity = { quantity }
        console.log(updateQuantity);
        const url = `http://localhost:5000/inventory/${categoryId}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(
                updateQuantity
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                // setProducts(data)
                toast('Product Deliverd Success')
                console.log(data);

            });
    }

    return (
        <div>
            <h1 className='text-center text-danger'>Thanks for selecting this Furniture item: {category.name}</h1>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
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
                        
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center m-5 pb-5'>
                <Link to="/manageinventory">
                    <button onClick={handleInventories} className='btn btn-primary'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default CategoryDetails;