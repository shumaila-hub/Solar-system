import React, { useEffect } from 'react';
// import '../../App.css';
import bckvideo from '../../../static/video/Website_background_video.mp4';
import './home.css';

import MidSection from './homePagecomponent/midsection';
import Boxes from './homePagecomponent/boxes';
import Bottom from './homePagecomponent/homebottom';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
<div> 
    <div className=' w-full h-full m-auto justify-center flex'>
      <video muted loop autoPlay playsInline  className=' m-auto top-10 xl:top-0 lg:top-0 md:top-0 sm:top-0 videobg w-full relative   opacity-80  object-cover  ' src={bckvideo} >
      </video>
      <div className='  home-cover-gradient top-5 bg-gradient-to-r from-blue-900 to-gray-500 w-full absolute -z-50'>
      </div>

      <div data-aos='fade-up' className=' container absolute flex 2xl:flex-row xl:flex-row lg:flex-row flex-col  homepage-heading  z-10 xl:top-1/2 2xl:top-1/2 mt-0  lg:top-2/4  md:top-2/4 sm:top-2/4 sm:pl-10 sm:pr-10 top-28 pl-5 pr-0'>

        <h1 className='  uppercase font-semibold  text-white m-auto w-full  pt-0 
        lg:text-left  lg:pr-0 xl:pb-0 lg:leading-10 md:leading-8  leading-5 lg:pb-0  lg:text-5xl  lg:w-1/2 
         2xl:text-8xl
        xl:text-6xl 
         md:text-4xl 
          text-2xl'>
          Energy Storage Made Simple

        </h1>
        <div className='lg:w-1/2 w-full text-white flex  flex-col justify-center xl:p-0 lg:pt-0 lg:pr-0 lg:leading-10 xl:leading-10 md:leading-8 leading-4 '>
          <p className=' lg:text-2xl md:text-2xl xl:text-3xl text-base md:mt-2  2xl:text-4xl  '>
            A Power Simulation Tool for Modeling Battery Energy Storage Systems </p>
          <div className='flex flex-row lg:mt-5 xl:mt-5 md:mt-4 mt-2 w-full xl:justify-center lg:justify-center md:justify-start sm:justify-start  justify-start  text-white'>

            <button className=' xl:leading-10 lg:leading-10 leading-normal cursor-pointer xl:text-xl 2xl:text-2xl lg:text-lg  xl:w-56 2xl:w-64 xl:h-14 2xl:h-16 lg:w-52 lg:h-12 md:w-48 md:h-10  rounded-lg w-40 sm:h-10 h-8 sm:ml-4 mr-4 mt-0 lg:mt-4 text-center sm:mt-0 text-base sm:w-40
             bg-blue-600 hover:bg-green-600 hover:opacity-90 hover:text-white  hover:shadow-slate-400   hover:shadow-2xl   '>
              Download Now!
            </button>

            <button className=' bg-blue-600 xl:leading-10 lg:leading-10 leading-normal  cursor-pointer sm:ml-4 mr-4 lg:mt-4 mt-0 sm:mt-0 xl:text-xl 2xl:text-2xl lg:text-lg xl:w-56 2xl:w-64 xl:h-14 2xl:h-16 lg:w-52 lg:h-12 md:w-48 sm:w-40 md:h-10 sm:h-10 rounded-lg w-40 h-8 text-center text-base 
             hover:shadow-2xl hover:bg-green-600 hover:opacity-90 hover:text-white  hover:shadow-slate-400  '>
              Request Demo
            </button>
          </div>



        </div>
      </div>
      </div>
      <div className='container flex flex-col m-auto '>
        <div data-Aos='fade-up' >  <MidSection /></div>
        <div data-Aos='fade-up ' > <Boxes /> </div>
        <div data-Aos='fade-up'> <Bottom /></div>
      </div>
      {/* <div> <Footer/> </div> */}


    
    </div>

  );
}