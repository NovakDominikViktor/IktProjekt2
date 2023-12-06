import React, { useState } from 'react';

const Login = ({ handleLoginSuccess }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://localhost:7227/Users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.result.find(
          (u) => (u.userName === usernameOrEmail || u.email === usernameOrEmail) && u.passwordHash === password
        );
        console.log(user);
        if (user) {
          setMessage('Login successful');
          handleLoginSuccess(user.userName, user.id, user.accessId);
        } else {
          setMessage('Invalid username, email, or password');
        }
      } else {
        setMessage('Error fetching user data');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An unexpected error occurred');
    }
   
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username or Email:
        <input type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
