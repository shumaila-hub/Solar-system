import React, { useEffect } from "react";
import Downloadcover from "../../../static/images/AdobeStock_487047993.jpeg";
import Aos from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import "./download.css";

function Download() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const text = ['Storlytics is not meant to run on a server or on a Remote Desktop Client.', 'It has to be installed on the workstation where it will be used.', 'Storlytics runs only under Windows (with a virtual machine for others OS – VirtualBox, Parallels, etc).', 'The program works properly in full license mode only if the computer’s date and time are correct and have never been modified.Storlytics is not liable if the program does not work because the computer’s clock has been changed.'];
    return (
        <div data-aos="fade-up">
            <div className=" w-full relative -z-10 flex justify-center ">
                <img
                    className="  opacity-70 img1 w-full 2xl:max-h-fit xl:max-h-fit  lg:max-h-fit "
                    src={Downloadcover}
                />
                <div className=" cover-gradient top-5 bg-gradient-to-r from-blue-600 to-gray-500 w-full absolute -z-50"></div>
                <div
                    data-aos="fade-up"
                    className=" container absolute 2xl:flex 2xl:flex-row xl:flex xl:flex-row   lg:flex lg:flex-row flex flex-col flex-wrap m-auto   top-60 xl:pl-24 xl:pr-24 2xl:pl-28 2xl:pr-28 2xl:ml-20 lg:pl-24 lg:pr-24 md:pl-16 md:pr-16 sm:pr-10 sm:pl-10 pl-7 pr-7"
                >
                    <h1
                        className="text-2xl  font-semibold 2xl:text-5xl xl:text-5xl lg:text-5xl lg:mb-0 xl:w-1/2 2xl:w-3/5 lg:w-1/2 w-full  md:text-4xl sm:text-3xl text-white">
                        Equip yourself with the latest Storlytics software. One-month free
                        trial with full features!
                    </h1>
                    <div className=" flex  text-white 2xl:justify-center xl:justify-center  lg:justify-center justify-start lg:w-1/2 xl:w-1/2 2xl:w-2/5 w-full ">
                        <div>
                            <button
                                className=" lg:mt-16 md:mt-7 sm:mt-5 mt-5  bg-sky-600   mr-auto xl:text-xl 2xl:text-xl lg:text-lg xl:w-52 2xl:w-56 xl:h-12 2xl:h-14 lg:w-52 w-44 h-10 lg:h-12 md:w-48 md:h-10 sm:w-44 rounded-lg hover:shadow-2xl leading-10
                        
                        hover:opacity-90 hover:text-white  hover:shadow-slate-400 hover:bg-green-600  cursor-pointer"
                            >
                                <a className="" href="#">
                                    {" "}
                                    Click to Download{" "}
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    {/* Download Page Mid section Start */}
            <div className=" container m-auto">
                <div data-aos="fade-up">
                  

                    <div

                        className=" lg:p-20 md:p-16 sm:p-10 flow-root p-5 leading-10"
                    >
                        <div className=" lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap  ">
                            <div className=" lg:w-1/2 md:w-full lg:h-full  lg:mt-0  ">
                                <h1 className="heading-color xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold m-auto inline-block mb-5  mt-5 lg:mt-28 hover:border-green-500 hover:border-b-4 text-center ">
                                    {" "}
                                    Installation Requirements
                                </h1>
                            </div>
                            <div className=" lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full  ">
                                <div className="text1  list-inside text-base md:pt-2 sm:pt-2  ">
                                    {text.map((text1) => (
                                        <li className=" list-inside lg:leading-10 md:leading-10 leading-8  ">
                                            {" "}
                                            {text1}{" "}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* Bottom section start */}
                <div data-aos="fade-up">
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
                </div>
            </div>
        </div>
    );
}

export default Download;
