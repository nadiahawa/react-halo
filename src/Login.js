import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import ReactDOM from 'react-dom/client';
import { GlobalVar } from './context/GlobalVar';
import Home from './views/Home';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const loggedInUser = 
  // }
  // )
  // const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    console.log('hello')
    setError(null);
    setLoading(true);
    const response = axios.post('http://127.0.0.1:5000/api/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      GlobalVar.username = response.data.User.username;
      GlobalVar.cart = response.data.User.carts;
      console.log(GlobalVar);
      // if (GlobalVar.username === 'test') navigate('/weapons');
      // else navigate('/');
    // if theGlobalVar.username = 'test' after login, then redirect to login page. 
    //   this is what we need to become our global variable/ response.data.user, with cart number
    }).catch(error => {
      setLoading(false);
      // if (error.response.status === 401) setError(error.response.data.message);
      // else setError("Something went wrong. Please try again later.");
    });
  }


 
  return (
    <div>
      <div className='row justify-content-center m-5'>
        <div className='coljustify-content-center border rounded border-light p-2 text-white bg-dark'>
      Login<br /><br />
      <div className="text-white bg-dark">
        Username<br />
        <input  className="text-white" type="text" {...username} autoComplete="new-password" placeholder='Username'/>
      </div>
      <div className="text-white bg-dark" style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" placeholder='Password'/>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <button type="button" className="btn btn-primary" onClick={handleLogin} disabled={loading}>Login</button>
      </div>
      </div>
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;