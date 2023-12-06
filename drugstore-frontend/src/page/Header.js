import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header({ loggedInUser, onLogout }) {
  const handleLogout = () => {
    
    onLogout();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        {loggedInUser ? (
          <>
            <span className="navbar-text mx-3">Welcome, {loggedInUser.username}!</span>
            <Link to="/browse" className="navbar-brand">Valami</Link>
            {console.log(loggedInUser)}
            {loggedInUser.accessId === 1 && (
              <Link to="/premium" className="navbar-brand">Become Premium</Link>
            )}
            <Link to="#" className="navbar-brand" onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
           <Link to="/browse" className="navbar-brand">Browse</Link>
            <Link to="/login" className="navbar-brand">Login</Link>
            <Link to="/register" className="navbar-brand">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
