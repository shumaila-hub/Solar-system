import React,{useEffect} from 'react';
import computerimg from '../../../../static/images/Capture.webp'
import '../shop.css';
import Aos from 'aos';
 import '../../../../../node_modules/aos/dist/aos.css';

function Midsection() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (<><div data-aos='fade-up' className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap lg:p-10 xl:pt-20 lg:pt-16 md:pt-10  md:p-7  sm:p-5  p-5  ' >
        <div className=' lg:w-1/2 md:w-full lg:h-full  '>
            <img className=' lg:w-full w-full lg:mt-20 xl:p-0 2xl:p-0 lg:p-0 p-5 ' src={computerimg} />
        </div>
        <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0 '>
            <div>

                <h1 className='z-10 mb-5 text-left leading-normal font-semibold 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-2xl shop-page-heading inline-block primary-border border-b-4 md:mt-7 sm:mt-5 mt-4
                '>  <a className=' cursor-pointer' href='/trialversion'>Trial Version</a></h1>

                <p className=' text-left z-10 leading-8 mt-0 text1 ' >
                    <div> With the free trial version of the storlytics software you will be able to create and simulate AC and DC couple energy storage projects! </div>
                    <div> With the Battery Profile Creator user can select the type of application:
                        <ul>
                            <li>
                                <i class="fa-solid fa-circle"></i> PV smoothing
                            </li>
                            <li>
                                <i class="fa-solid fa-circle"></i> Peak Load shaving

                            </li>
                            <li>
                                <i class="fa-solid fa-circle"></i> Back-up Power

                            </li>
                        </ul>

                        <table className=' justify-center m-auto border text-center rounded-xl w-3/4 xl:mt-5 mt-5 '>
                            <thead>
                                <th className='shop-page-heading p-2 '> Trial

                                </th>
                            </thead>
                            <tbody>
                                <tr className=' bg-gray-200'>Validity</tr>
                                <tr>1 month</tr>
                                <tr className=' bg-gray-200'>Number of Licenses</tr>
                                <tr>1</tr>
                                <tr className=' bg-gray-200'>Software support</tr>
                                <tr > None</tr>
                                <tr className=' bg-gray-200'> System design consultation </tr>
                                <tr> None</tr>
                                <tr className=' bg-gray-200'> Purchase cost</tr>
                                <tr> Free</tr>
                                <tr className=' bg-gray-200'> Yearly renewal fee</tr>
                                <tr> NA</tr>
                            </tbody>

                        </table>
                    </div>
                </p>


            </div>
            </div>

    </div>
        <div data-aos='fade-up' className='main div lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap  
        lg:p-10  md:p-7  sm:p-5  p-5 ' >
           
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0 '>
                <div>

                    <h1 className='z-10 lg:mt-8 md:mt-7  text-left leading-10 font-semibold 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-2xl shop-page-heading mb-5 inline-block primary-border border-b-4  sm:mt-5 mt-4  '> 
                    <a href='/Singleuser'>  Single User  </a>
                   </h1>
                    <p className=' text-left z-10 leading-10 mt-0 text1  ' >

                        <div className='leading-10'>
                            With the Single-User purchase customers can utilize the software for an entire year! The package includes license for one machine only. For multiple users please look at the corporate license

                            <table className=' xl:mt-5 justify-center m-auto border text-center rounded-xl w-3/4 mt-5'>
                                <thead>
                                    <th className=' shop-page-heading p-2 ' > Single-User

                                    </th>
                                </thead>
                                <tbody>
                                    <tr className=' bg-gray-200'>Validity</tr>
                                    <tr>1 year extendable</tr>
                                    <tr className=' bg-gray-200'>Number of Licenses</tr>
                                    <tr>1</tr>
                                    <tr className=' bg-gray-200'>Software support</tr>
                                    <tr > None</tr>
                                    <tr className=' bg-gray-200'> System design consultation </tr>
                                    <tr> None</tr>
                                    <tr className=' bg-gray-200'> Purchase cost</tr>
                                    <tr> $3000</tr>
                                    <tr className=' bg-gray-200'> Yearly renewal fee</tr>
                                    <tr> $2000</tr>
                                </tbody>

                            </table>
                        </div>
                    </p>


                </div></div>
                <div className=' lg:w-1/2 md:w-full lg:h-full  '>
                <img className='w-full lg:mt-20  xl:p-0 2xl:p-0 lg:p-0 p-5' src={computerimg} />
            </div>

        </div>
      
    </>
    );
}

export default Midsection;