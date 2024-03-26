import React from 'react'
import "./Login.css"
import Button from '@mui/material/Button';
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

   const signIn = () => {
    //sign in...
      auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })

      })
      .catch((error) => { 
        alert(error.message);
       })
    };

  return (
    <div className='login'>
        <div className="login__logo">
        <img 
        src='https://www.nopcommerce.com/images/thumbs/0015920_facebook-authentication.png'
        alt='facebook logo' 
        />
        
        <img 
            src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png'
            alt="facebook text"
        />

        </div>
       <Button type='submit' onClick={signIn}>
        Sign In
       </Button>
        
      
    </div>
  )
}

export default Login
