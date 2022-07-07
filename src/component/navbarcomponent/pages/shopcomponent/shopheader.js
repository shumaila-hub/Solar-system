import React from 'react';
import shopcover from '../../../../static/images/carousel_5.webp';

function Header() {
    return (<div>
        <div className=' w-full relative -z-10 flex justify-center  '>
            <img className=' opacity-70 img1 w-full  lg:max-h-fit' src={shopcover} />
            <div className=' cover-gradient top-5 bg-gradient-to-r from-blue-600 to-gray-500 w-full absolute -z-50'> </div>
        
       
        


        <div className='container m-auto leading-10 absolute flex flex-col flex-wrap justify-center text-center lg:top-1/2 md:top-1/2 sm:top-1/2 lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 sm:pl-10 sm:pr-10 top-1/3 pl-5 pr-5'>

            <h1 className='text-white xl:text-5xl  lg:text-4xl md:text-3xl text-2xl font-semibold  w-full'>
                Start off your energy storage design the right way with storlytics software. Storlytics provides you with support with the software
            </h1>
            <div className='mt-4 flex text-white justify-center w-full '>


                <div className=' w-full h-20'>
                    <button className='bg-sky-600  mr-auto lg:text-lg xl:w-52 lg:w-52 w-36 h-10 text-sm lg:h-12 md:w-40 md:h-10 sm:w-36 md:mt-0  rounded-lg hover:shadow-2xl hover:bg-blue-500 hover:opacity-90 hover:text-white  hover:shadow-slate-400 '>
                        <a href='#'> Contact us  </a>
                    </button>

                </div>


            </div>
        </div>
        </div>
    </div>);
}

export default Header;