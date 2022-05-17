import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin'

const Register = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      

    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    const navigaretoLogin = () =>{
        navigate('/login')
    }

    if (user){
        navigate('/home');
    }

    return (
        <div className='mb-5 container w-50 mx-auto p-5'>
            <h2 className='text-center text-primary'>Please Register here </h2>

            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Name" />
      <Form.Text className="text-muted">
        Please put your Full Name.
      </Form.Text>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
      
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      Please put your valid email address.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>

  <p>Already Have an Account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigaretoLogin}>Please Login</Link> </p>
  
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>

<div>
  <SocialLogin></SocialLogin>
</div>
        </div>
    );
};

export default Register;