import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import Login from './components/Login'
import Layout from './components/Layout'
import { AuthProvider } from './context/auth'
import ProductView from './components/ProductView';
import SellerView from './components/SellerView';
import AddNewProduct from './components/AddNewProduct';
import products from '../data/products.json';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
localStorage.setItem('products',JSON.stringify(products));
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
       <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
           <Route path="/product/:slug">
            <ProductView />
          </Route>
           <Route path="/seller/:slug">
            <SellerView />
          </Route>
           <Route path="/addNewProduct">
            <AddNewProduct />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
