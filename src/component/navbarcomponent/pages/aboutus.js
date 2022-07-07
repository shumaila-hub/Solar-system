import React, { useEffect } from 'react';
import aboutuscover from '../../../static/images/AdobeStock_182548860.jpeg';
import './aboutus.css';
import Bottom from './aboutuscomponent/aboutusbottom';
import Midsec from './aboutuscomponent/aboutusmidsection';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
function AboutUs() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (<div>
        <div>
            <div className=' w-full relative -z-10 h-auto flex justify-center'>
                <img className='img1 w-full bg-cover opacity-60' src={aboutuscover} />
                <div className=' cover-gradient top-5 bg-gradient-to-r from-blue-700 to-slate-200 w-full absolute -z-50'> </div>
           
            <div data-aos='fade-up' className=' container absolute lg:flex lg:flex-row flex flex-col flex-wrap m-auto xl:top-1/2 2xl:top-1/3  lg:top-1/2 md:top-1/2 sm:top-1/2 top-1/3  lg:pl-20 lg:pr-20 md:pl-16 md:pr-16 sm:pl-10 sm:pr-10 pl-8 pr-8  '>
                <h1 className=' text-white text-3xl xl:text-5xl lg:text-4xl md:text-4xl  font-semibold lg:w-1/2 w-full leading-10  '>
                    WE HELP BUILD THE NEXT GENERATION ENERGY STORAGE PROJECTS
                </h1>
                <div className='mt-4 flex flex-row  text-white  lg:w-1/2 w-full '>

                    <div className=' lg:mt-10'>
                        <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col'>
                            <button className='  bg-sky-600 rounded-lg xl:text-xl 2xl:text-2xl lg:text-lg xl:w-52 2xl:w-56 2xl:h-14 xl:h-12 lg:w-48 lg:h-12 md:w-40 md:h-10 w-40 h-10  mr-6 hover:shadow-2xl hover:bg-blue-500 hover:opacity-90 hover:text-white  hover:shadow-slate-400 '>
                                <a href='#'> Contact Us  </a>
                            </button>
                            <button className='  bg-sky-600 rounded-lg ml-0 sm:ml-4 mr-4 mt-4 sm:mt-0 xl:text-xl 2xl:text-2xl lg:text-lg xl:w-52 2xl:w-56 2xl:h-14 xl:h-12 lg:w-48 lg:h-12 md:w-40 md:h-10 w-40 h-10 hover:shadow-2xl hover:bg-blue-500 hover:opacity-90 hover:text-white  hover:shadow-slate-400 '>
                                <a href='#'> Watch Video  </a>
                            </button>
                        </div>

                    </div>
                </div> </div>
            </div></div>
            <div className=' container m-auto'> 
        <div data-aos='fade-up'> <Midsec /></div>
        <div data-aos='fade-up'><Bottom /> </div>
        </div>
    </div>);
}

export default AboutUs;