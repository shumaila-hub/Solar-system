import React from 'react';
import shopcover from '../../../../static/images/carousel_5.webp';

function Header() {
    return ( <div> 
      <div className=' w-full absolute -z-50 '> <img className=' img1 w-full lg:max-h-fit' src={shopcover} /> </div>


<div className=' flex flex-col flex-wrap m-auto container text-center md:mb-32 sm:mb-32 mb-44  '>

    <h1 className=' leading-8 container text-white xl:text-4xl  lg:text-4xl md:text-3xl text-2xl font-semibold  lg:mb-4 w-full lg:mt-72   lg:pl-14 md:mt-60  sm:mt-72  mt-60  p-5 pt-0 pb-0'>
    Start off your energy storage design the right way with storlytics software. Storlytics provides you with support with the software
    </h1>
    <div className='mt-4 flex text-white justify-center w-full '>

        
            <div className=' w-full h-20'>
                <button className='bg-sky-600  mr-auto lg:text-lg lg:w-48 w-36 h-10 text-sm lg:h-12 md:w-40 md:h-10 sm:w-36 md:mt-0  rounded-lg '>
                    <a href='#'> Contact us <i class="fa fa-phone" aria-hidden="true"></i> </a>
                </button>

            </div>

        
    </div>
</div>

    </div> );
}

export default Header;