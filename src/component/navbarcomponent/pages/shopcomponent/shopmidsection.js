import React,{useEffect} from 'react';
import computerimg from '../../../../static/images/Capture.webp'
import '../shop.css';
import Bottom from './shopbottom';
import Aos from 'aos';
 import '../../../../../node_modules/aos/dist/aos.css';

function Midsection() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (<><div data-aos='fade-up' className='main div lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap   lg:mt-32 md:mt-32' >
        <div className=' lg:w-1/2 md:w-full lg:h-full  '>
            <img className=' lg:p-14 lg:pt-0  lg:pr-0 sm:p-14 sm:pb-0 container lg:w-3/4 w-3/5 lg:ml-32 lg:mt-20 md:m-auto md:mt-10 sm:mt-10 sm:m-auto m-auto p-5' src={computerimg} />
        </div>
        <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0 '>
            <div className='lg:pl-14  lg:pr-20 md:p-10 sm:p-14  sm:pb-0 lg:mt-10 p-10'>
                <h1 className='z-10 lg:mt-14 text-left leading-normal font-semibold text-4xl shop-page-heading'>Trial Version</h1>
                <p className=' text-left z-10 leading-normal mt-0 text1 lg:mr-10' >
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

                        <table className=' justify-center m-auto border text-center rounded-xl w-3/4 '>
                            <thead>
                                <th className='shop-page-heading'> Trial

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
                                <tr> Free</tr>
                            </tbody>

                        </table>
                    </div>
                </p>


            </div></div>

    </div>
        <div data-aos='fade-up' className='main div lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap ' >
            <div className=' lg:w-1/2 md:w-full lg:h-full  '>
                <img className=' lg:p-14  lg:pr-0 sm:p-14 sm:pb-0 container lg:w-3/4 w-3/5 lg:ml-32 lg:mt-20 md:m-auto sm:m-auto m-auto' src={computerimg} />
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0 '>
                <div className='lg:pl-14  lg:pr-20 md:p-10 sm:p-14  sm:pb-0 lg:mt-0 lg:pt-0 p-10'>
                    <h1 className='z-10 lg:mt-8  text-left leading-normal font-semibold text-4xl shop-page-heading'>Single User </h1>
                    <p className=' text-left z-10 leading-normal mt-0 text1 lg:mr-10' >

                        <div>
                            With the Single-User purchase customers can utilize the software for an entire year! The package includes license for one machine only. For multiple users please look at the corporate license

                            <table className=' justify-center m-auto border text-center rounded-xl w-3/4 '>
                                <thead>
                                    <th className=' shop-page-heading'> Single-User

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
                                    <tr> $750</tr>
                                    <tr className=' bg-gray-200'> Yearly renewal fee</tr>
                                    <tr> $750</tr>
                                </tbody>

                            </table>
                        </div>
                    </p>


                </div></div>

        </div>
        <Bottom />
    </>
    );
}

export default Midsection;