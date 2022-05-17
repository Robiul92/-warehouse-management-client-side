import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../Images/Social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navegate = useNavigate();
    let errorElement;
    if (error) {
        
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }

      if(user){
          navegate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='text-center'>
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 '>
                <img style={{width: '30px'}} src={google} alt="" />
                Google Sign in
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;