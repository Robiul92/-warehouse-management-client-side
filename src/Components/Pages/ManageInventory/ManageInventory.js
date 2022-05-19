import React from 'react';
import { Table } from 'react-bootstrap';

import useItems from '../../../hooks/useItems';
import ManageItems from '../ManageItems/ManageItems';

const ManageInventory = () => {
    const [inventorys] = useItems();
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
                                 
        </div>
    );
                }

export default ManageInventory;