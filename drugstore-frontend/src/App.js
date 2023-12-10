import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Home from './page/Home';
import Browse from './page/Browse';
import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile'; // Importáljuk a Profile komponenst

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (username, userId, accessId, email, password) => {
    // You can update state or perform actions after successful login
    setLoggedInUser({ username, userId, accessId,email, password});
  };

  const handleRegisterSuccess = () => {
    // Handle successful registration if needed
    console.log('Registration successful');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
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
            element={<Profile user={loggedInUser} onTogglePremium={() => console.log('Toggle Premium')} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
