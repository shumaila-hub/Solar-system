import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import logo from '../../static/images/logo.webp';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar w-full fixed z-50'>
{/* For logo section */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

         <img className=' navbar-logo logo' src={logo} alt="logo"/>


        </Link>
   {/* For Navbaar */}

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home<i className='fas fa-caret-down' />
            </Link>
            

          </li>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/shop'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Shop<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/download'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Download <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/knowledge-base'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Knowledge base
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;