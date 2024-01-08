import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ handleLoginSuccess }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); 

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
        
          navigate('/browse');
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

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 return (
      <div className="container mt-5">
        <div className="col-md-6 offset-md-3">
          <h2>Login</h2>
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={handleTogglePasswordVisibility} style={{ cursor: 'pointer', marginLeft: '5px' }}>
                <Icon icon={passwordVisible ? eye : eyeOff} size={20} />
              </span>
            </div>
          </div>
    
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
    
          {message && (
            <div className={`alert ${message.includes('successful') ? 'alert-success' : 'alert-danger'} mt-3`}>
              {message}
            </div>
          )}
    
          {/* Add the text and link to register */}
          <p className="mt-3">
          <img alt='kep' src='https://www.pinatafarm.com/p/f32f8e14-4cbf-416a-ab9b-155f6a936714'/> <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'blue' }}>Register here</span>.
          </p>
        </div>
      </div>
    );
          };

export default Login;
