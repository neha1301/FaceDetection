import React from 'react';
import './App.css';
import './Register/Register'
import Register from './Register/Register';
import Login from './Login/Login';
import TransactionPage from './Transaction/Transaction';

function App() {
  return (
    <div>
        <header className="header">Header</header>
      <div className="button-container">
      <button className="button">Register</button>
      <button className="button1">Login</button>
      </div>

      <footer className="footer"></footer>
      <Register/>
      <Login/>
      <TransactionPage/>
    </div>
     

    
  );
}


export default App;
