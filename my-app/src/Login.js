import React, { useState } from 'react';
import './Login.css'
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === 'demo@coralmango.com' && password === 'demo123') {
      onLogin();
    } else {
      alert("Invalid Credential!");
    }
  };

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='login-container'>
        <h2>Login to My-App</h2>
        <input
          className='login-input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='login-input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
      </div>     
    </div>
  );
};

export default Login;
