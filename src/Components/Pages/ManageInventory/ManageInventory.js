import React from 'react';

import { useNavigate } from 'react-router-dom';

import useItems from '../../../hooks/useItems';
import ManageItems from '../ManageItems/ManageItems';

const ManageInventory = () => {
    const [inventorys] = useItems();
    const navigate = useNavigate();

    const handelNewitems = () =>{
        navigate('/additems')
    }
    return (
        <div className='container'>
          <h2 className='text-center text-danger fw-bold p-5'>Manage Items</h2> 
             <div className='inventory-container'>
             {
                inventorys.map(inventory => <ManageItems
                    key={inventory._id}
                    inventory={inventory}

                ></ManageItems>)
             }     
                </div>  
                <div className='text-center'>
                <button onClick={handelNewitems} className='bg-danger px-3 py-2 rounded m-3 text-center'>Add New Items</button> 
                </div>                
        </div>
    );
                }

export default ManageInventory;