import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './../../context/auth';

function Login() {
  const { login, changeUser, user } = useContext(AuthContext);


  return (
    <div className='login-container'>
      <form className="login-form" onSubmit={login}>
        <h3 className='login-label'>Login</h3>
        <select id="login" value={user} onChange={changeUser} required>
          <option value="">select</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <button className='login-btn' type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;