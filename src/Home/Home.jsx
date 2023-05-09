import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import TransactionPage from '../Transaction/Transaction';

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/Register');
  }
  const handleLoginClick = () => {
    navigate('/Login');
  }
  const  handleTransactionClick = () => {
    navigate('/Transaction');
  }
 
  return (
    <div>
      <header className="header">Header</header>
      <div className="button-container">
        <button className="button" onClick={handleRegisterClick}>Register</button>
        <button className="button1"onClick={handleLoginClick}>Login</button>
        <button className="button1"onClick={handleTransactionClick}>Transaction</button>
      
      </div>
      <footer className="footer"></footer>
      <TransactionPage/>
    </div>
  );
}

export default Home;
