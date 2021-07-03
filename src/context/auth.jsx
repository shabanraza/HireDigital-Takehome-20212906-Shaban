import React, { useState, createContext, useContext, useEffect } from 'react';
import {
  useHistory,
} from "react-router-dom";
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);


  const updateViewNumber = (id) => { 
    const prodArray = JSON.parse(localStorage.getItem('products'));
    const index = prodArray.findIndex(el => el.productId == id)
    prodArray[index].views = prodArray[index].views + 1;
    setProductsList(prodArray);
    localStorage.setItem('products', JSON.stringify(prodArray));
  }
  const updateProduct = (index, product) => {
    const prodArray = JSON.parse(localStorage.getItem('products'));
    prodArray[index] = product;
    localStorage.setItem('products', JSON.stringify(prodArray));
    setProductsList(prodArray)
  }

  const addNewProduct = (newProduct) => {
    const prodArray = JSON.parse(localStorage.getItem('products'));
    const nextID = prodArray.pop().productId;
    const newPro = { ...newProduct, productId: nextID + 1 };
    prodArray.unshift(newPro);
    setProductsList(prodArray);
    localStorage.setItem('products', JSON.stringify(prodArray));
  }


  const login = () => {
    setLoggedIn(true);
    window.history.pushState(user, 'login', '/')
  }


  const changeUser = (e) => {
    setUser(e.target.value)
    console.log("user", user)
    localStorage.setItem('user', e.target.value)

  }
  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('user')
    window.history.pushState('', 'logout', '/')

  }
  useEffect(() => {
    const prodArray = JSON.parse(localStorage.getItem('products'))
    setProductsList(prodArray)
  }, [])
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
      setUser(localStorage.getItem("user"))
    }
  }, [user])
  return (
    <AuthContext.Provider value={{ login, loggedIn, productsList, updateProduct, updateViewNumber, addNewProduct, logout, changeUser, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;