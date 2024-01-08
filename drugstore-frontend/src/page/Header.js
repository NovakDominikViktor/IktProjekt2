import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Header({ loggedInUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    onLogout();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Home</Link>
      {loggedInUser ? (
        <>
          <span className="navbar-text mx-3">Welcome, {loggedInUser.username}! <img
          src="https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85785795.jpg"
          alt="YourDrugstore"
          style={{ width: "50px", height: "50px" }}
        /></span>
          
          <Link to="/browse" className="navbar-brand">Browse</Link>
          {console.log(loggedInUser)}
          {loggedInUser.accessId >= 1 && (
            <Link to="/profile" className="navbar-brand">Profile</Link>
          )}
          <Link to="/login" className="navbar-brand" onClick={handleLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/browse" className="navbar-brand">Browse</Link>
          <Link to="/login" className="navbar-brand">Login</Link>
          
        </>
      )}
    </div>
  </nav>
  );
}

export default Header;
