import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Home from './page/Home';
import Browse from './page/Browse';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (username, userId) => {
    // You can update state or perform actions after successful login
    setLoggedInUser({ username, userId });
  };

  return (
    <Router>
      <div>
        <Header loggedInUser={loggedInUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
