import React, { useState } from 'react';
import './dropdown.css';


function HomeDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <> <div onClick={handleClick}  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
home dropdown
  </div>
     
    </>
  );
}

export default HomeDropdown;