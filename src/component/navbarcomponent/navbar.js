import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../static/images/logo.webp';

import HomeDropdown from './Dropdowns/homedropdown';
import ShopDropdown from './Dropdowns/Shopdropdown';
import AboutusDropdown from './Dropdowns/aboutusmenu';
import DownloadDropdown from './Dropdowns/downloaddropdown';
import { use } from 'echarts';
function Navbar() {

  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [aboutdropdown, setAboutDropdown] = useState(false);
  const [downloaddropdown, setdownloadDropdown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [Homedropdown, setHomeDropdown] = useState(false)

  const handleClick = () => setClick(!click);
  const handleClicked = () => setClicked(!clicked);

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

  const onAboutMouseEnter = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false);
    } else {
      setAboutDropdown(true);
    }
  };

  const onAboutMouseLeave = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false);
    } else {
      setAboutDropdown(false);
    }
  };
  const onHomeMouseEnter = () => {
    if (window.innerWidth < 960) {
      setHomeDropdown(false);
    } else {
      setHomeDropdown(true);
    }
  };

  const onHomeMouseLeave = () => {
    if (window.innerWidth < 960) {
      setHomeDropdown(false);
    } else {
      setHomeDropdown(false);
    }
  };
  const ondownloadMouseEnter = () => {
    if (window.innerWidth < 960) {
      setdownloadDropdown(false);
    } else {
      setdownloadDropdown(true);
    }
  };

  const ondownloadMouseLeave = () => {
    if (window.innerWidth < 960) {
      setdownloadDropdown(false);
    } else {
      setdownloadDropdown(false);
    }
  };


  return (
    <>
      <nav className='navbar w-full fixed z-50'>
         {/* For logo section */}
        <div className='navbar-logo'> 
       
        <Link to='/'  onClick={closeMobileMenu}>
          <img  src={logo} alt="logo" />
        </Link>
        </div>

        {/* For Navbaar */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'
            onMouseEnter={onHomeMouseEnter}
            onMouseLeave={onHomeMouseLeave}

          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home<i className='fas fa-caret-down ml-2' />
            </Link>
            {Homedropdown && <HomeDropdown />}
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
              Shop<i className='fas fa-caret-down ml-2' />
            </Link>
            {dropdown && <ShopDropdown />}
          </li>

          <li className='nav-item'
            onMouseEnter={ondownloadMouseEnter}
            onMouseLeave={ondownloadMouseLeave}
          >
            <Link
              to='/download'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Download <i className='fas fa-caret-down ml-2' />
            </Link>
            {downloaddropdown && <DownloadDropdown />}
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
              className='nav-linksknw '
              onClick={closeMobileMenu}
            >
              Knowledge base
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onAboutMouseEnter}
            onMouseLeave={onAboutMouseLeave}
          >
            <Link
              to='/aboutus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us<i className='fas fa-caret-down ml-2' />
            </Link>
            {aboutdropdown && <AboutusDropdown />}
          </li>

        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;