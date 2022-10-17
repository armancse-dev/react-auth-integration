import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';





function App() {
  return (
    <div className="App">
        
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/login" element={<Login />} ></Route>
          <Route exact path="/register" element={<Register />} ></Route>
          
        </Routes>
      </Router>
     

    </div>
  );
}

export default App;
