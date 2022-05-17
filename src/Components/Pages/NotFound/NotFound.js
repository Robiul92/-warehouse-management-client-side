import React from 'react';
import img from '../../../Images/404/not-found.png'

const NotFound = () => {
    return (
        <div className='text-center bg-danger mt-5 mb-5'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;