import React,{useEffect} from 'react';
import Downloadcover from '../../../static/images/AdobeStock_487047993.jpeg';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
// import Midsection from './downloadcomponent/midsection';
import './download.css';
import Bottom from './downloadcomponent/downloadbottom';
function Download() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (<div data-aos='fade-up' >
        <div className=' w-full absolute -z-10 '> <img className='  opacity-50 img1 w-full  lg:max-h-fit ' src={Downloadcover}  /> </div>


        <div data-aos='fade-up' className=' lg:flex lg:flex-row flex flex-col flex-wrap m-auto container lg:mb-20  md:mb-20 p-5'>

            <h1 className='text-2xl  font-semibold xl:text-5xl lg:text-5xl lg:mb-0  lg:w-1/2 w-full xl:mt-60 lg:mt-40  mt-60 lg:pl-14 md:mt-60 md:text-4xl sm:text-3xl sm:mt-60  heading-color'>
                Equip yourself with the latest Storlytics software.
                One-month free trial with full features!


            </h1>
            <div className='mt-4 flex  text-white xl:justify-center  lg:justify-center justify-start lg:w-1/2 w-full '>

                <div className=' lg:mt-80 mt-0 md:mb-20  sm:mb-40 mb-48 '>
                  
                        <button className='  bg-sky-600  mr-auto lg:text-lg lg:w-48 w-40 h-10 lg:h-12 md:w-40 md:h-10 sm:w-36 rounded-lg '>
                            <a href='#'> Click to Download </a>
                        </button>

                    

                </div>
            </div>
        </div>

<div data-aos='fade-up'> <Bottom/> </div>
        


    </div>


    );
}

export default Download
    ;