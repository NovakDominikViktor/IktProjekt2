import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Home from './page/Home';
import Browse from './page/Browse';
import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (username, userId, accessId, email, password) => {
    const user = { username, userId, accessId, email, password };
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setLoggedInUser(user);
  };

  const handleRegisterSuccess = () => {
    // Handle successful registration if needed
    console.log('Registration successful');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  const handleTogglePremium = () => {
    // Frissítsd a felhasználói adatokat a localStorage-ban
    const updatedUser = { ...loggedInUser, accessId: loggedInUser.accessId === 1 ? 2 : 1 };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setLoggedInUser(updatedUser);
  };

  

  return (
    
    <Router>
      <div>
        <Header loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
          <Route
            path="/browse"
            element={<Browse loggedInUser={loggedInUser} />} // loggedInUser prop átadása a Browse komponensnek
          />
          <Route
            path="/register"
            element={<Register handleRegisterSuccess={handleRegisterSuccess} />}
          />
          {/* Új útvonal hozzáadása a Profile komponenshez */}
          <Route
      path="/profile"
      element={<Profile user={loggedInUser} onTogglePremium={handleTogglePremium} />}
    />
        </Routes>
      </div>
    </Router>
  );
}

export default App;