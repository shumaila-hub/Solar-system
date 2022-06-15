import React, { useEffect } from 'react';
// import '../../App.css';
import bckvideo from '../../../static/video/background.mp4';
import './home.css';
import img1 from '../../../static/images/carousel_1.webp';
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
    <div >
      <div className=' w-full h-full'>
        <video muted loop autoPlay className='mt-24 xl:mt-0 lg:mt-0 md:mt-0 videobg w-full absolute opacity-80  object-cover h-auto ' src={bckvideo} >
        </video>
        <div className='w-full absolute bg-gradient-to-r from-red-700  opacity-60 mt-24 xl:mt-0 lg:mt-0 md:mt-0 z-50 '>

        </div>
      </div>

      <div data-aos='fade-up' className='flex lg:flex-row flex-col xl:mb-0 xl:pb-0 md:mb-32  md:p-20 sm:p-16 p-10 pt-0 pb-0 mb-32 sm:mb-10 homepage-heading'>

        <h1 className='  uppercase font-semibold  text-white w-full m-auto pt-0 
        lg:text-left lg:p-10 lg:pr-0 xl:pb-0 lg:leading-10 md:leading-8  leading-normal lg:pb-0  lg:text-5xl lg:mt-40   lg:w-1/2
        xl:text-6xl xl:mt-52 xl:mb-40
         md:text-4xl md:mt-24
         sm:mt-40    mt-40 text-2xl  '>
          Energy Storage Made Simple

        </h1>
        <div className='lg:w-1/2 w-full xl:mt-52 xl:mb-60 lg:mt-52 lg:mb-0 lg:m-auto text-white  flex  flex-col justify-center xl:p-10 lg:pt-0 lg:pr-0 lg:leading-10 xl:leading-10 md:leading-8 leading-4 '>
          <p className=' lg:text-2xl md:text-2xl xl:text-2xl text-base xl:pl-10  xl:pr-10  '>
            A Power Simulation Tool for Modeling Battery Energy Storage Systems


          </p>
          <div className='flex flex-row lg:mt-5 xl:mt-5 md:mt-4 mt-2 w-full xl:justify-center lg:justify-center md:justify-start sm:justify-start  justify-start '>
            <button className=' xl:leading-10 lg:leading-10 leading-normal cursor-pointer bg-sky-600 lg:text-lg lg:w-52 lg:h-12 md:w-48 md:h-10  rounded-lg w-40 h-10 sm:ml-4 mr-4 mt-0 lg:mt-4 text-center sm:mt-0 text-base sm:w-40   '>
              Download Now!
            </button>
            <button className=' xl:leading-10 lg:leading-10 leading-normal bg-sky-600 cursor-pointer sm:ml-4 mr-4 lg:mt-4 mt-0 sm:mt-0 lg:text-lg lg:w-52 lg:h-12 md:w-48 sm:w-40 md:h-10  rounded-lg w-40 h-10 text-center text-base   '>
              Request Demo
            </button>
          </div>



        </div>
      </div>


      <div data-Aos='fade-up' >  <MidSection /></div>
      <div data-Aos='fade-up' > <Boxes /> </div>
      <div data-Aos='fade-up'> <Bottom /></div>

      {/* <div> <Footer/> </div> */}


    </div>

  );
}