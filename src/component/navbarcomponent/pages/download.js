import React, { useEffect } from 'react';
import Downloadcover from '../../../static/images/AdobeStock_487047993.jpeg';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
// import Midsection from './downloadcomponent/midsection';
import './download.css';
import DownloadBottom from './downloadcomponent/downloadbottom';
import Midsection from './downloadcomponent/downloadmidsection';
function Download() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (<div data-aos='fade-up' >
        <div className=' w-full relative -z-10 flex justify-center '>

            <img className='  opacity-70 img1 w-full 2xl:max-h-fit xl:max-h-fit  lg:max-h-fit ' src={Downloadcover} />
            <div className=' cover-gradient top-5 bg-gradient-to-r from-blue-600 to-gray-500 w-full absolute -z-50'>
            </div>
            <div data-aos='fade-up' className=' container absolute 2xl:flex 2xl:flex-row xl:flex xl:flex-row   lg:flex lg:flex-row flex flex-col flex-wrap m-auto   top-60 xl:pl-24 xl:pr-24 2xl:pl-28 2xl:pr-28 2xl:ml-20 lg:pl-24 lg:pr-24 md:pl-16 md:pr-16 sm:pr-10 sm:pl-10 pl-7 pr-7'>

                <h1 className='text-2xl  font-semibold 2xl:text-5xl xl:text-5xl lg:text-5xl lg:mb-0 xl:w-1/2 
            2xl:w-3/5 lg:w-1/2 w-full    md:text-4xl sm:text-3xl text-white'>
                    Equip yourself with the latest Storlytics software.
                    One-month free trial with full features!
                </h1>
                <div className=' flex  text-white 2xl:justify-center xl:justify-center  lg:justify-center justify-start lg:w-1/2 xl:w-1/2 2xl:w-2/5 w-full '>
                    <div>
                        <button className=' lg:mt-16 md:mt-7 sm:mt-5 mt-5  bg-sky-600   mr-auto xl:text-xl 2xl:text-xl lg:text-lg xl:w-52 2xl:w-56 xl:h-12 2xl:h-14 lg:w-52 w-44 h-10 lg:h-12 md:w-48 md:h-10 sm:w-44 rounded-lg hover:shadow-2xl leading-10
                        
                        hover:opacity-90 hover:text-white  hover:shadow-slate-400 hover:bg-green-600  cursor-pointer'>
                            <a className='' href='#'> Click to Download </a>
                        </button>


                    </div>
                </div>
            </div>
        </div>
        <div className=' container m-auto'>
            <div data-aos='fade-up'> <Midsection /> </div>
            <div data-aos='fade-up'> <DownloadBottom /> </div>

        </div>
    </div>
    );
}

export default Download
    ;