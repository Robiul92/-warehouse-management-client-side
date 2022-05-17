import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const {categoryId} = useParams();
    const navigate = useNavigate();
    const handleInventories = () =>{
        navigate('/manageinventory')
    }

    return (
        <div>
            <h1>Thanks for selecting this Food item: {categoryId}</h1>
            <div className='text-center mb-5 pb-5'>
            <Link to="/checkout">
                <button onClick={handleInventories} className='btn btn-primary'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default CategoryDetails;