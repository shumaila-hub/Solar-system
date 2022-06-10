import React,{useEffect} from 'react';
import '../download.css';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
function Midsection(){
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
const text =['Storlytics is not meant to run on a server or on a Remote Desktop Client.','It has to be installed on the workstation where it will be used.','Storlytics runs only under Windows (with a virtual machine for others OS – VirtualBox, Parallels, etc).','The program works properly in full license mode only if the computer’s date and time are correct and have never been modified.Storlytics is not liable if the program does not work because the computer’s clock has been changed.']; 

    return (<div data-aos='fade-up' className=' '>

        <div className=' lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap    container lg:mt-10 '>
            <div className=' lg:w-1/2 md:w-full lg:h-full sm:mt52 lg:mt-0 '>
                <h1 className=' text-sky-600 xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold m-auto lg:p-32 lg:pr-0  md:pl-32 pl-5 pr-5  sm:mt-10 mt-10'  > Installation Requirements</h1>
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full  '>

                <div className='lg:pl-4 text1 lg:pt-14  lg:pr-14 md:p-10 md:pl-28 sm:p-10 lg:mt-0 list-inside text-base md:pt-2 sm:pt-2 '>

                {text.map(text1 => <li className=' hover:shadow-md p-2'> {text1}  </li>)}
                    
                </div></div>


        </div>


    </div>);
}

export default Midsection;