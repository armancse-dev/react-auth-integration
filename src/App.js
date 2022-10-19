import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';





function App() {
  return (
    <div className="App">
        
     <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/home" element={<Home />} ></Route>
            <Route exact path="/login" element={<Login />} ></Route>
            <Route exact path="/register" element={<Register />} ></Route>

            <Route exact path="/shipping" element={<Shipping/>} ></Route>
            
          </Routes>
        </Router>
     </AuthProvider>
     

    </div>
  );
}

export default App;
