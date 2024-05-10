import React from 'react'
// import Logo from '../assets/asia21logo.jpg';
import  '../style/navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className='asia'>
          {/* <img src={Logo} alt="" /> */}
        <span className='asia1'>ASIA</span><span className='asia2'>2</span><span className="asia3">1</span>
        </div>
          <ul className='nav-links'>
            <li><a href="#home" className='link'>Home</a></li>
            <li><a href="#home" className='link'>About</a></li>
            <li><a href="#home" className='link'>Classes</a></li>
            <li><a href="#home" className='link'>Gallery</a></li>
            <li><a href="#home" className='link'>Contact</a></li>
          </ul>
        <div className="signup">
        <li><a href="#home" className='link'> Sign Up Today</a></li>       
        </div>
        
      </div>

    

    </div>
  )
}

export default Navbar
