import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center  text-white bg-danger p-2 fw-bold'>
                <p>Copyright @ {currentYear}</p>
            </footer>
    );
};

export default Footer;