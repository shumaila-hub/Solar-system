import React, { useState } from 'react';
import './dropdown.css';
import trailimg from '../../../static/images/Capture.webp';
function ShopDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <> <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            <div className='flex flex-row w-full leading-10  '>
                <div className=' w-1/4 text-center justify-center text-4xl font-semibold mt-32 text-white  '>
                   {/* <link to='/shop' > Shop</link> */}
                    <a href='/shop'> Shop</a>
                </div>
                <div className='flex flex-row w-3/4 mt-3 text-center justify-center ' >
                  
                    {/* <h1 className=' text-3xl font-medium text-blue-600'> Version</h1> */}
                    <div className=' w-1/3  border-l-2 border-white'>

                        <div> <img className=' h-40 mt-12 w-fit m-auto' src={trailimg} /> </div>
                        <div className=' text-white text-lg font-normal m-auto text-center mt-3'><a href='/trialversion'>Trial Version</a>  </div>
                    </div>
                    <div className=' w-1/3'>

                        <div> <img className=' h-40 mt-12 w-fit m-auto' src={trailimg} /> </div>
                        <div className=' text-white text-lg font-normal text-center mt-3'><a href='#'>Single User</a>  </div>
                    </div>
                    <div className=' w-1/3'>

                        <div> <img className=' h-40 mt-12 w-fit m-auto' src={trailimg} /> </div>
                        <div className=' text-white text-lg font-normal text-center mt-3'><a href='#'>Corporate</a>  </div>
                    </div>
                </div>
            </div>


        </div>

        </>
    );
}

export default ShopDropdown;