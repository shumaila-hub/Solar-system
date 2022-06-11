import React from 'react';
import shopcover from '../../../../static/images/carousel_5.webp';

function Header() {
    return ( <div> 
      <div className=' w-full absolute -z-50 '> <img className=' opacity-60 img1 w-full lg:max-h-fit' src={shopcover} /> </div>


<div className=' flex flex-col flex-wrap m-auto container text-center md:mb-32 sm:mb-32 mb-32  '>

    <h1 className='container shop-page-heading xl:text-5xl  lg:text-4xl md:text-3xl sm:text-2xl text-lg font-semibold  lg:mb-4 w-full lg:mt-72   lg:pl-14 md:mt-60  sm:mt-72 heading mt-72 '>
    Start off your energy storage design the right way with storlytics software. Storlytics provides you with support with the software
    </h1>
    <div className='mt-4 flex flex-wrap  text-white justify-center  w-full '>

        
            <div className=' w-full h-20'>
                <button className='bg-sky-600  mr-auto lg:text-lg lg:w-48 w-32 h-8 text-sm lg:h-12 md:w-40 md:h-10 sm:w-36 md:mt-0  '>
                    <a href='#'> Contact us </a>
                </button>

            </div>

        
    </div>
</div>

    </div> );
}

export default Header;