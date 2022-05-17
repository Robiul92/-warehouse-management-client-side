import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login')
    }

    const handleRegister = () =>{
        navigate('/register')
    }

    return (
        <div className='d-sm-block d-md-flex d-lg-flex justify-content-between bg-light p-3 mt-5 '>
            <div>
                <h2 className='flex-sm-row'>Sign in now</h2>
                <p>View personalised recommendations for you</p>
            </div>
            <div className='d-sm-block justify-content-center'>
                <button onClick={handleLogin} className='px-5 py-3 m-3 bg-danger rounded'>SIGN IN</button>
                <button onClick={handleRegister} className=' px-5 py-3 m-3 rounded'>CREATE ACCOUNT</button>
            </div>
        </div>
    );
};

export default SignIn;