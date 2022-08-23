import React, { useState } from 'react';
import installation from '../../../static/images/AdobeStock_248626760.jpeg';
import './dropdown.css';

function DownloadDropdown() {
  const texts = ['Operating System ','Os not supported' ,'Other reuirements'];

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
     <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

      <div className='flex flex-row w-full leading-10 p-5  '>

        <div className=' w-1/2 text-white p-10 justify-start border-r-2 border-white'>
          <div className='xl:text-2xl lg:text-2xl 2xl:text-3xl font-semibold mt-3  '> <a href='/download'>Download</a></div>
          <div className=' mt-5  xl:text-sm lg:text-sm 2xl:text-lg font-normal'>  <p>Equip yourself with the latest Storlytics software.
            One-month free trial with full features!

          </p></div>
          <div>
            <button className=' text-base font-semibold border-2 border-sky-600 rounded-lg p-3 pl-5 pr-5 mt-5 hover:bg-green-600  hover:shadow-lg '  > <a href='/download'>Click to Download </a>  </button>
          </div>
        </div>
        <div className='flex flex-col w-1/2 mt-3 text-center justify-center text-white items-center ' >
          <div className='flex flex-row mt-3 '>
            <div className=' w-full flex flex-col xl:p-16 2xl:p-0 '>
              <div> <img className=' w-96 ' src={installation} /></div>
              <div className='mt-3'> 
              <a href='/download'>Installation Requirements </a></div>
            </div>
           
          </div>
        </div>
        <div className=' w-1/4 text-white p-5 justify-start border-l-2 border-white '>

          <div className=' text-xl font-semibold mt-3  '> <a href='/download'>Required Computer Configurations
          </a></div>
          <div className=' mt-5  text-sm font-normal bg-black'>

            {texts.map(text => <li className=' list-outside  leading-10 mt-0 '> {text}  </li>)}
          </div>
        </div>

      </div>

    </div>
  );
}

export default DownloadDropdown;