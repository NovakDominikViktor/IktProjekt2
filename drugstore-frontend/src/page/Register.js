import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Register = ({ handleRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleRegister = async () => {
    try {
      if (password !== confirmpassword) {
        setMessage('Passwords do not match');
        return;
      }

      const response = await fetch('https://localhost:7227/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: username,
          email: email,
          passwordHash: password,
          accessId: 1,
        }),
      });

      if (response.ok) {
        setMessage('Registration successful');
        handleRegisterSuccess();
      } else {
        setMessage('Error registering user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('An unexpected error occurred');
    }
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <h2>Register</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <span onClick={handleTogglePasswordVisibility} style={{ cursor: 'pointer', marginLeft: '5px' }}>
              <Icon icon={passwordVisible ? eye : eyeOff} size={20} />
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password:
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              className="form-control"
              id="confirm-password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span onClick={handleToggleConfirmPasswordVisibility} style={{ cursor: 'pointer', marginLeft: '5px' }}>
              <Icon icon={confirmPasswordVisible ? eye : eyeOff} size={20} />
            </span>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
};

export default Register;
