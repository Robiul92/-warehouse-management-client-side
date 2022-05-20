import React from 'react';
import BestSelling from '../../BestSelling/BestSelling';
import MyLocation from '../../MyLocation/MyLocation';
import Baneer from '../Banner/Baneer';
import Inventory from '../Inventory/Inventory';
import SignIn from '../SignIn/SignIn';



const Home = () => {
    return (
        <div>
            <Baneer></Baneer>
            <SignIn></SignIn>
            <Inventory></Inventory>
            <BestSelling></BestSelling>

            
            
        </div>
    );
};

export default Home;