import React from 'react';
import image1 from '../../../Images/Best-selling/1m-2.jpg'
import image2 from '../../../Images/Best-selling/im-3.jpg'
import image3 from '../../../Images/Best-selling/im-1.jpg'
import { Card } from 'react-bootstrap';
import './BestSelling.css'
import { useNavigate } from 'react-router-dom';

const BestSelling = () => {
    const navigate = useNavigate();

    const navigatetoManage = () =>{
        navigate('/manageinventory')
    }
    return (
        <div>
            <div><h1 className='text-center text-danger fw-bold p-5 '>Best Selling Items</h1></div>
            
            <div className='continer'>
            <div className='  d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Multipurpose Shelf | MSC-101-1-1-20</Card.Title>
                        <p>Price: {14300}</p>
                        <Card.Text>
                            Quantity: Available
                        </Card.Text>
                        <Card.Text>
                            Supplier: Harper
                        </Card.Text>
                        <Card.Text>
                            <p>Dimension : 120 (L) X 40 (W) X 180 (H) cm</p>
                        </Card.Text>
                        <button onClick={navigatetoManage} className='btn btn-danger text-center'>Find Similer Items</button>
                    </Card.Body>
                </Card>
            </div>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Multipurpose Shelf | MSC-101-1-1-20</Card.Title>
                        <p>Price: {14300}</p>
                        <Card.Text>
                            Quantity: Available
                        </Card.Text>
                        <Card.Text>
                            Supplier: Harper
                        </Card.Text>
                        <Card.Text>
                            <p>Dimension : 120 (L) X 40 (W) X 180 (H) cm</p>
                        </Card.Text>
                        <button onClick={navigatetoManage} className='btn btn-danger text-center'>Find Similer Items</button>
                    </Card.Body>
                </Card>
            </div>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Dressing Table | DTH-101-1-1-20</Card.Title>
                        <p>Price: {4250}</p>
                        <Card.Text>
                            Quantity: Available
                        </Card.Text>
                        <Card.Text>
                            Supplier: Harper
                        </Card.Text>
                        <Card.Text>
                            <p>Dimension : 43 (L) X 26 (W) X 175 (H) cm</p>
                        </Card.Text>

                        <button onClick={navigatetoManage} className='btn btn-danger text-center'>Find Similer Items</button>
                        
                    </Card.Body>
                </Card>
            </div>


            </div>
            
            
            
        </div>
    );
};

export default BestSelling;