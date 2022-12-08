import Cookies from 'js-cookie';
import React from 'react';
import '../App.css';
import Login from '../components/login/Login';

function LoginPage() {
  let isAuth = false;

  
  const token = Cookies.get('accessToken');
  if (token !== undefined || token !== null) {
    isAuth = true;
  }


  return (
          <Login isAuth={isAuth}/>
  );
}

export default LoginPage;