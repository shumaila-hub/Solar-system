import React, { useState } from 'react';
import oursoftware from '../../../static/images/AdobeStock_230134446.jpeg';
import softwarefeature from '../../../static/images/AdobeStock_308282197.jpeg';
import './dropdown.css';


function HomeDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <> <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            <div className='flex flex-row w-full leading-10 p-5  '>

                <div className=' w-1/2 text-white p-10 justify-start border-r-2 border-white'>
                    <div className='xl:text-2xl lg:text-2xl 2xl:text-3xl font-semibold mt-3  '> <a href='/'>Energy Storage Made Simple
                    </a></div>
                    <div className=' mt-5  xl:text-sm lg:text-sm 2xl:text-lg font-normal'>  <p>A Power Simulation Tool for Modeling Battery Energy Storage Systems


                    </p>
                    </div>
                    <div>
                        <button className=' text-base font-semibold border-2 hover:bg-green-600 border-sky-600 rounded-lg p-3 pl-5 pr-5 mt-5  '  > <a href='/'>Download Now! </a>  </button>
                        <button className=' ml-5 text-base font-semibold border-2 border-sky-600 rounded-lg p-3 pl-5 pr-5 mt-5 hover:bg-green-600 '  > <a href='/'>Request Demo </a>  </button>
                    </div>
                </div>

                <div className='flex flex-col w-1/2 mt-3 text-center justify-center text-white items-center ' >
                    <div className='flex flex-row mt-3 '>
                        <div className=' w-1/2 flex flex-col xl:p-5 2xl:p-5 lg:p-5'>
                            <div> <img className='  ' src={oursoftware} /></div>
                            <div className='mt-3'> 
                            <a href='/'> Our Software </a>
                            </div>
                        </div>
                        <div className=' w-1/2 flex flex-col xl:p-5 2xl:p-5 lg:p-5'>
              <div>  <img className='' src={softwarefeature} /></div>

              <div className='mt-3 '> <a href='/'>Software Features</a></div>
            </div>

                    </div>
                </div>


            </div>


        </div>

        </>
    );
}

export default HomeDropdown;