import React, { useState } from 'react';
import './dropdown.css';

function DownloadDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <> <div onClick={handleClick}  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
  downloaddvdszxszxc


  </div>
      
    </>
  );
}

export default DownloadDropdown;