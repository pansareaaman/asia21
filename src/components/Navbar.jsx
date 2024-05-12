import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <div className='asia'>
        <span className='asia1'>ASIA</span>
        <span className='asia2'>2</span>
        <span className="asia3">1</span>
      </div>
      <ul className='nav-links'>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/about" className='link'>About</Link></li>
        <li><Link to="/classes" className='link'>Classes</Link></li>
        <li><Link to="/gallery" className='link'>Gallery</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
      </ul>
      <div className="signup">
        <Link to="/signup" className='link'>Register </Link> 
        <span style={{display:'inline', color:'white', fontSize:'bold'}}> / </span>
        <Link to="/login" className='link'>Login </Link>
      </div>
    </div>
  );
};

export default Navbar;
