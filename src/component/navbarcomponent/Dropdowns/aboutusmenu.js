import React, { useState } from 'react';
import './dropdown.css';


function AboutusDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <> <div onClick={handleClick}  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
   
   about

  </div>
     
    </>
  );
}

export default AboutusDropdown;