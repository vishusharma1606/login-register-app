import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home'; // Import the Home component

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* Home Page */}
          <Route path="/login" element={<Login />} />     {/* Login Page */}
          <Route path="/register" element={<Register />} /> {/* Register Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
