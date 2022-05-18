import React, { useEffect, useState } from 'react';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Category from '../Home/Category/Category';
import './Inventory.css'


const Inventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory`)
        .then(res =>res.json())
        .then(data => setInventorys(data));
    },[])
    return (
        <div>
            <h1 className='text-center text-danger fw-bold p-5'>Categories</h1>
            <div className='inventory-container'>
            {
                inventorys.slice(0, 6).map(inventory=><Category
                    key={inventory._id}
                    inventory={inventory}
                


                ></Category>)
            }

            
            </div>
        </div>
    );
};

export default Inventory;