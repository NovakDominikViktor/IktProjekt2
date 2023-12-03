import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header()
{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/login" className="navbar-brand">Login</Link>
        <Link to="/browse" className="navbar-brand">Browse</Link>
      </div>
    </nav>
  );
}

export default Header