import React, { useState, useContext, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import AuthContext from './../../context/auth';

function Header() {
  const { login, changeUser,loggedIn,logout, user } = useContext(AuthContext);
  console.log("loggedIn",loggedIn)
console.log("user",user)
  return (
      <header>
        <h3>Shop</h3>
        <div className='user'>
          {loggedIn ? user :''}
        </div>
        {!loggedIn ? 
          <Link to="/login">Login</Link>
          :
          <div className="logout" onClick={logout}>Logout</div>
        }
      </header>
  );
}

export default Header;