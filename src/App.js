import './App.css';
import React from "react";
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';

import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';







function App() {
  
  return (
    <div className="App">
        
     <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <PrivateRoute path="/placeorder" 
            >
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            
          </Switch>
        </BrowserRouter>
     </AuthProvider>
     

    </div>
  );
}

export default App;
