import React, {useEffect} from 'react';
import aboutuscover from '../../../static/images/AdobeStock_182548860.jpeg';
import './aboutus.css';
import Bottom from './aboutuscomponent/aboutusbottom';
import Midsec from './aboutuscomponent/aboutusmidsection';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
function AboutUs() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (<div>
        <div>
            <div className=' w-full absolute -z-10 h-auto'> 
            <img className='img1 w-full bg-cover opacity-60' src={aboutuscover} />
           </div>
            <div data-aos='fade-up' className=' lg:flex lg:flex-row flex flex-col flex-wrap m-auto container p-5 '>
               <h1 className='text-3xl xl:text-5xl lg:text-4xl lg:mb-4 font-semibold lg:w-1/2 w-full lg:mt-60  mt-52  lg:pl-14 md:mt-72 md:mb-0 sm:mt-72   heading-color '>
                    WE HELP BUILD THE NEXT GENERATION ENERGY STORAGE PROJECTS
                 </h1>
                <div className='mt-4 flex flex-wrap  text-white  lg:w-1/2 w-full '>

                    <div className='lg:mt-60 mt-0 md:mb-32  mb-20'>
                        <div>
                            <button className='  bg-sky-600 rounded-lg lg:text-lg lg:w-48 lg:h-12 md:w-40 md:h-10 w-40 h-10  mr-6 '>
                                <a href='#'> Contact Us <i class="fa fa-phone" aria-hidden="true"></i> </a>
                            </button>
                            <button className='  bg-sky-600 rounded-lg ml-0 sm:ml-4 mr-4 mt-4 sm:mt-0 lg:text-lg lg:w-48 lg:h-12 md:w-40 md:h-10 w-40 h-10 '>
                                <a href='#'> Watch Video <i class="fa fa-video-camera" aria-hidden="true"></i> </a>
                            </button>
                        </div>

                    </div>
                </div>
            </div></div>
        <div data-aos='fade-up'>
            <Midsec />
        </div>
        <div data-aos='fade-up'>
            <Bottom/>
        </div>

    </div>);
}

export default AboutUs;