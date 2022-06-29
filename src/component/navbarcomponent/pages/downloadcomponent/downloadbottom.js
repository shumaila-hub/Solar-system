import React, { useEffect } from 'react';
import '../download.css';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
import Midsection from './downloadmidsection';
function Bottom() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div data-aos='fade-up'>
            <Midsection />
            <div data-aos='fade-up' className=' flex flex-col justify-center items-center w-full m-auto text1 lg:p-20 lg:pt-10  md:p-16 md:pt-8 sm:p-10 sm:pt-5 p-5 ' >

                <div> <h1 className='font-semibold heading-color xl:text-4xl mb-10 lg:text-4xl md:text-3xl sm:text-2xl text-2xl primary-border border-b-4'> Required Computer Configuration</h1> </div>

                <div className=' flex flex-col m-auto  text-base'>
                    <div className=' flex lg:flex-row md:flex-row flex-col border  bg-gray-200 shadow-inner w-full ' >
                        <div className=' lg:w-1/4 md:w-1/4 w-full lg:m-auto md:m-auto text-center'>
                            <div className='m-5 font-semibold text-lg  border-b-2 border-gray-500 inline-block '>  Operating System </div>

                        </div>


                        <div className=' lg:w-3/4 md:w-3/4 w-full bg-gray-200 '>
                            <ul className=' text-left z-10 lg:leading-10 md:leading-10 leading-8 mt-0 inline-block border-l-2 p-2 '>
                                <li className='  '> <i class="fa-solid fa-circle mr-3" ></i> All Windows client versions currently supported by Microsoft: Windows 8, Windows 10 (32-bit or 64-bit)
                                </li>
                                <li className=''> <i class="fa-solid fa-circle mr-3"></i>Up-to-date Windows 7 systems
                                </li>
                                <li className=''> <i class="fa-solid fa-circle mr-3"></i>Other OS may support Storlytics installation and execution but no guarantee can be provided. This effectively depends on many parameters….
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col border shadow-inner w-full'>
                        <div className=' lg:w-1/4 md:w-1/4 w-full lg:m-auto md:m-auto text-center'>
                            <div className='m-5 font-semibold text-lg  border-b-2 border-gray-500 inline-block '>    OS not supported: </div>

                        </div>
                        <div className=' lg:w-3/4 md:w-3/4 w-full '>
                            <ul className=' text-left z-10 lg:leading-10 md:leading-10 leading-8 mt-0 inline-block border-l-2 p-2'>
                                <li className='  '> <i class="fa-solid fa-circle mr-3"></i> Windows servers, Application servers (Citrix, ZenDesktop, ZenApp)
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className=' flex lg:flex-row md:flex-row flex-col border  bg-gray-200 shadow-inner w-full'>
                        <div className=' lg:w-1/4 md:w-1/4 w-full lg:m-auto md:m-auto text-center '>

                            <div className='m-5 font-semibold text-lg  border-b-2 border-gray-500 inline-block '> Other requirements</div>
                        </div>
                        <div className=' lg:w-3/4 md:w-3/4 w-full '>
                            <ul className=' text-left z-10 lg:leading-10 md:leading-10 leading-8 mt-0 inline-block border-l-2 p-2 '>
                                <li className='  '> <i class="fa-solid fa-circle mr-3"></i> At least 1 GB of RAM
                                </li>
                                <li className=' '> <i class="fa-solid fa-circle mr-3"></i>At least 1 GB of free hard drive space
                                </li>
                                <li className=' '> <i class="fa-solid fa-circle mr-3"></i>Minimal screen resolution of 1280 x 720 pixels
                                </li>
                                <li className=' '> <i class="fa-solid fa-circle mr-3"></i>.NET 4.8 framework (for Meteonorm)
                                </li>
                                <li className=' '> <i class="fa-solid fa-circle mr-3"></i>Graphics card supporting OpenGL 2.0 or higher
                                </li>
                                <li className=''> <i class="fa-solid fa-circle mr-3"></i>Storlytics workspace does not support shared or remotely synced drives / folders (including OneDrive, Google Drive, Dropbox, etc…). Files and workspaces can be synced as a separate task, once Storlytics has been closed.
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>);
}

export default Bottom;