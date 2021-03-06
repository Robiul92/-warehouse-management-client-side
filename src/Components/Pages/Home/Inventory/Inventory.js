import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Category from '../Home/Category/Category';
import './Inventory.css'


const Inventory = () => {
    const [inventorys, setInventorys] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/inventory`)
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])

    const handleNavegate = () => {
        navigate('/manageinventory')
    }
    return (
        <div>
            <h1 className='text-center text-danger fw-bold p-5'>Categories</h1>
            <div className='inventory-container'>
                {
                    inventorys.slice(0, 6).map(inventory => <Category
                        key={inventory._id}
                        inventory={inventory}



                    ></Category>)
                }
                <div className='text-center flex-end'>
                    <button onClick={handleNavegate} className='btn btn-primary  m-3 text-center '>Manage Inventory</button>
                </div>

            </div>
        </div>
    );
};

export default Inventory;