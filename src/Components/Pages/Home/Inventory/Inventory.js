import React, { useEffect, useState } from 'react';
import Category from '../Home/Category/Category';
import './Inventory.css'


const Inventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(()=>{
        fetch(`categore.json`)
        .then(res =>res.json())
        .then(data => setInventorys(data));
    },[])
    return (
        <div>
            <h1 className='text-center text-danger fw-bold p-5'>Categories</h1>
            <div className='inventory-container'>
            {
                inventorys.map(inventory=><Category
                    key={inventory.id}
                    inventory={inventory}
                


                ></Category>)
            }
            </div>
        </div>
    );
};

export default Inventory;