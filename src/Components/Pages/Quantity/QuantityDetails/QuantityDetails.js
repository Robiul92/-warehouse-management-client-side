// import React, { useEffect, useState } from 'react';

// import { useParams } from 'react-router-dom';

// import { Button, Card, Col, Form, FormLabel, Row } from 'react-bootstrap';

// import { toast } from 'react-toastify';



// const QuantityDetails = ({product}) => {
//     const { id } = useParams();
//     const {_id, name, img, description, price, supplier, quantity} = product;
//     // const [inventorys, setInventorys] = useState([])
//     // useEffect(()=>{
//     //     fetch(`http://localhost:5000/inventory`)
//     //     .then(res =>res.json())
//     //     .then(data => setInventorys(data));
//     // },[])

//     console.log(product);

//     const ReStock = e => {
//         e.preventDefault();
//         const quantity = parseInt(e.target.reStock.value) + parseInt(product.quantity);

//         const updateRestock = { quantity };
//         // console.log(updateRestock);
//         const url = `http://localhost:5000/inventory/${id}`;
//         console.log(url);
//         fetch(url, {
//             method: 'PUT',

//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify(
//                 updateRestock
//             ),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 e.target.reset();
//                 toast('Restok success')
//                 console.log(data);

//             });

//     }

//     const handleQuantity = e => {
//         e.preventDefault();
//         const quantity = e.target.quantity.value - 1;
//         const updateQuantity = { quantity }
//         console.log(updateQuantity);
//         const url = `http://localhost:5000/inventory/${id}`;
//         fetch(url, {
//             method: 'PUT',
//             body: JSON.stringify(
//                 updateQuantity
//             ),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // setProducts(data)
//                 toast('Product Deliverd Success')
//                 console.log(data);

//             });
//     }

//     return (
//         <div>
//             <h1>Hello</h1>

//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-7 col-md-4">
//                     <div className=' p-5'>
//                         <h4>Update Quantity</h4>
//                         <Form onSubmit={ReStock} className='d-flex'>
//                             <input type='number' name='reStock' placeholder="quantity" />
//                             <Button className='ms-2' variant="dark" type="submit">
//                                 ADD STOCK
//                             </Button>
//                         </Form>
//                     </div>
//                 </div>
//                 <div className="col-lg-5 col-md-8">
//                     <Card className='mx-auto' style={{ width: '20rem' }}>
//                         <Card.Img className='pt-3' variant="top" src={product.img} />
//                         <Card.Body>
//                             <Card.Title>{product.name}</Card.Title>
//                             <Card.Text>
//                                 {product.des}
//                             </Card.Text>
//                             {/* <Card.Text>
//                                 <p>Quantity: {product.quantity}</p>
//                             </Card.Text> */}
//                             <Card.Text>
//                                 <p>Supplier:{product.supplier}</p>
//                             </Card.Text>
//                             <Card.Text>
//                                 <p>Price: {product.price} $</p>
//                             </Card.Text>
//                             <form onSubmit={handleQuantity}>
                                
//                                 <FormLabel>Quantity: </FormLabel>
//                                 <input className='ms-2 border border-white' type="number" name="quantity" value={product.quantity} readOnly />

//                                 <button className='btn btn-primary'>DELIVERD</button>

//                             </form>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//         </div>

//     );
// };

// export default QuantityDetails;