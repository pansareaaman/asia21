import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.png';
import '../style/navbar.css';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowMediaIcons(false);
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const handleRegisterClick = (action) => {
    if (action === 'register') {
      alert('Sorry, This page is Currently Under Development for Registration');
    } else if (action === 'login') {
      alert('Sorry, This page is Currently Under Development for Login');
    }
  };

  return (
    <div className="container" ref={containerRef}>
      <div className="asia">
        <span className="asia1">ASIA</span>
        <span className="asia2">2</span>
        <span className="asia3">1</span>
      </div>
      <ul className={showMediaIcons ? 'nav-links mobile-menu-link' : 'nav-links'}>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/classes" className="link">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="link">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className={showMediaIcons ? 'signup mobile-menu-link' : 'signup'}>
        <Link to="/" className="link" onClick={() => handleRegisterClick('register')}>
          Register{' '}
        </Link>
        <span style={{ display: 'inline', color: 'white', fontWeight: 'bold' }}> / </span>
        <Link to="/" className="link" onClick={() => handleRegisterClick('login')}>
          Login{' '}
        </Link>
      </div>
      <div className="hamburger-menu">
        <img src={hamburger} alt="Menu" onClick={toggleMediaIcons} />
      </div>
    </div>
  );
};

export default Navbar;
