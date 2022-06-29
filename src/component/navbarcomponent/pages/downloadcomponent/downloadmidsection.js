import React,{useEffect} from 'react';
import '../download.css';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
function Midsection(){
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
const text =['Storlytics is not meant to run on a server or on a Remote Desktop Client.','It has to be installed on the workstation where it will be used.','Storlytics runs only under Windows (with a virtual machine for others OS – VirtualBox, Parallels, etc).','The program works properly in full license mode only if the computer’s date and time are correct and have never been modified.Storlytics is not liable if the program does not work because the computer’s clock has been changed.']; 

    return (<div data-aos='fade-up' className=' lg:p-20 md:p-16 sm:p-10 flow-root p-5 leading-10'>

        <div className=' lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap  '>
            <div className=' lg:w-1/2 md:w-full lg:h-full  lg:mt-0  '>
                <h1 className='heading-color xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold m-auto inline-block mb-5  mt-5 lg:mt-28 hover:border-blue-500 hover:border-b-4 text-center '  > Installation Requirements</h1>
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full  '>

                <div className='text1  list-inside text-base md:pt-2 sm:pt-2  '>

                {text.map(text1 => <li className=' list-inside lg:leading-10 md:leading-10 leading-8  '> {text1}  </li>)}
                    
                </div></div>


        </div>


    </div>);
}

export default Midsection;