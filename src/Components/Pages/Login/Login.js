import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      

if(user){
    navigate(from, { replace: true });
}

if (error) {
        
    errorElement =  <p className='text-danger'>Error: {error.message}</p>
      
    
  }


    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigaretoRegister =event =>{
        navigate('/register');
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth)

    const resetPassword = async () =>{
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('Please enter your email address');
        }

    }
    return (
        <div className='mb-5 container w-50 mx-auto p-5 mb-5'>
            <h1 className='text-center text-primary'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <p>New to theWareHouse? <Link to="/register" className='text-danger text-decoration-none' onClick={navigaretoRegister}>Please Register</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='pt-2 mt-3 '> <button  className='text-light text-decoration-none bg-danger rounded p-1' onClick={resetPassword}>Forget Password? </button> </p>
            </Form>

            <div className='mt-3'>
            <SocialLogin></SocialLogin>
            </div>
            {errorElement}
            
            
        </div>
    );
};

export default Login;