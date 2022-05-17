import React from 'react';
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
            <MyLocation></MyLocation>

            
            
        </div>
    );
};

export default Home;