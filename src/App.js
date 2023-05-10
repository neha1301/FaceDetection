import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import TransactionPage from './Transaction/Transaction';
import Home from './Home/Home';
import './App.module.css';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>


   </>
  );
}

export default App;
