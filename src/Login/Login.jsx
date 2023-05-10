import React, { useState } from 'react';
import '../Login/login.module.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your login logic, e.g. make an API call to authenticate the user
  };

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
