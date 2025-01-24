import React from 'react';
import './Navbar.css'; // Assuming you create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
  <a href="/" className="home-link">
    <span className="logo">{"</>"} JPT</span>
    <hr className="navbar-line" />
  </a>
</div>


      {/* Right Section */}
      <div className="navbar-right">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="tel:+2348105348110" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-phone"></i>
        </a>
        <a href="mailto:jpttech95@gmail.com">
  <i className="fas fa-envelope"></i>
</a>

      </div>
    </nav>
  );
};

export default Navbar;
