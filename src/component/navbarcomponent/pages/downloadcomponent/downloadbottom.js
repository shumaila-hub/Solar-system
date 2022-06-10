import React,{useEffect} from 'react';
import '../download.css';
import Aos  from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
import Midsection from './downloadmidsection';
function Bottom() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (
    <div data-aos='fade-up'>
        <Midsection/>
    <div data-aos='fade-up' className=' w-full m-auto text1 container lg:ml-10 lg:mr-10'>
        <h1 className=' text-center font-semibold text-sky-600 xl:text-4xl mb-10 lg:text-4xl md:text-3xl sm:text-2xl text-2xl '> Required Computer Configuration</h1>
        <div className=' flex flex-col m-auto pb-10  lg:ml-10 text-base'>
            <div className=' flex flex-row border  border-b-0 bg-gray-200 shadow-inner ' >
                <div className=' w-1/4 m-auto lg:pl-20'>
                    Operating System
                </div>
                <div className=' w-3/4 bg-gray-200 '>
                    <ul className=' text-left z-10 leading-normal mt-0 inline-block border-l-2 p-5  '>
                        <li className=' hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i> All Windows client versions currently supported by Microsoft: Windows 8, Windows 10 (32-bit or 64-bit)
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>Up-to-date Windows 7 systems
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>Other OS may support Storlytics installation and execution but no guarantee can be provided. This effectively depends on many parameters….
                        </li>

                    </ul>
                </div>
            </div>
            <div className='flex flex-row border  border-b-0 shadow-inner'>
                <div className=' w-1/4 m-auto lg:pl-20 flex-wrap'>
                OS not supported: 
                </div>
                <div className=' w-3/4 '>
                    <ul className=' text-left z-10 leading-normal mt-0 inline-block border-l-2 p-5'>
                        <li className=' hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i> Windows servers, Application servers (Citrix, ZenDesktop, ZenApp)
                        </li>


                    </ul>
                </div>
            </div>
            <div className=' flex flex-row border  bg-gray-200 shadow-inner'>
                <div className=' w-1/4 m-auto lg:pl-20'>
                  
               <div> Other requirements</div>
                </div>
                <div className=' w-3/4 '>
                    <ul className=' text-left z-10 leading-normal mt-0 inline-block border-l-2 p-5 '>
                        <li className=' hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i> At least 1 GB of RAM
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>At least 1 GB of free hard drive space
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>Minimal screen resolution of 1280 x 720 pixels
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>.NET 4.8 framework (for Meteonorm)
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>Graphics card supporting OpenGL 2.0 or higher
                        </li>
                        <li className='hover:shadow-md p-1'> <i class="fa-solid fa-circle"></i>Storlytics workspace does not support shared or remotely synced drives / folders (including OneDrive, Google Drive, Dropbox, etc…). Files and workspaces can be synced as a separate task, once Storlytics has been closed.
                        </li>


                    </ul>
                </div>
            </div>

        </div>
        </div>
    </div>);
}

export default Bottom;