import React,{useEffect} from 'react';
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
  Aos.init({duration: 2000});
}, []);
  
  return (
    <div>
      <video muted loop autoPlay className=' videobg w-full absolute -z-10  ' >
        <source src={bckvideo} />
      </video>


      <div data-aos='fade-up' className='w-full flex lg:flex-row flex-col '>

        <h1 className='text-2xl lg:text-right lg:p-20 lg:pb-0  lg:text-5xl xl:text-6xl xl:mt-60 xl:mb-60 lg:mt-60 lg:mb-20  text-white lg:w-1/2 w-full md:text-4xl md:mt-40 md:p-20 md:pb-0 sm:mt-32 sm:p-10 sm:pb-0 md:mb-0 md:m-auto mt-32 m-auto pt-0  p-5'>
          Energy Storage Made Simple

        </h1>
        <div className='lg:w-1/2 w-full xl:mt-80 xl:mb-80 lg:mt-80 lg:mb-0 lg:m-auto text-white  flex pl-2 flex-col justify-center md:p-20 md:m-auto md:pt-5  sm:p-10 '>
          <p className=' lg:text-xl md:text-lg xl:text-xl text-sm '>
            A Power Simulation Tool for Modeling Battery Energy Storage Systems

          </p>

          <div className='flex flex-row lg:mt-5 mt-5 md:mt-4 w-full  '>
            <button className=' bg-sky-600 lg:text-lg lg:w-48 lg:h-12 md:w-40 md:h-10 sm:w-36  '>
              Download Now!
            </button>
            <button className='bg-sky-600 sm:ml-4 mr-4 mt-4 sm:mt-0 lg:text-lg lg:w-48 lg:h-12 md:w-40 md:h-10  '>
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