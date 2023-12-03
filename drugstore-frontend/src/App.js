import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './page/Header';
import Home from './page/Home';
import Login from './page/Login';
import Browse from './page/Browse'


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
