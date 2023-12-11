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

        if (user) {
          setMessage('Login successful');
          handleLoginSuccess(user.userName, user.id, user.accessId, user.email, user.passwordHash);
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
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="usernameOrEmail" className="form-label">Username or Email:</label>
          <input
            type="text"
            className="form-control"
            id="usernameOrEmail"
            placeholder="Enter username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>

        {message && <div className="alert alert-danger mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
