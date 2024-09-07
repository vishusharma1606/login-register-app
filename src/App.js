// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './Home'; // Import Home component
import Login from './Login'; // Import Login component
import Register from './Register'; // Import Register component
import Dashboard from './Dashboard'; // Import Dashboard component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </div>
  );
}

export default App;
