import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Home Page</h1>
      <p className="home-paragraph">
        This is the homepage of the application. You can navigate to login or register using the links above.
      </p>
      <div className="nav-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Home;
