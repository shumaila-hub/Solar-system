import React,{useEffect} from 'react';
import computerimg from '../../../../static/images/Capture.webp';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
function Bottom() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (  <div data-aos='fade-up'>
      <div className='main div lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap ' >
            <div className=' lg:w-1/2 md:w-full lg:h-full  '>
                <img className=' lg:p-14  lg:pr-0 sm:p-14 sm:pb-0 container lg:w-3/4 w-3/5 lg:ml-32 lg:mt-20 md:m-auto sm:m-auto m-auto' src={computerimg} />
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0 '>
                <div className='lg:pl-14  lg:pr-20 md:p-10 md:pt-0 sm:p-14  sm:pb-0 lg:mt-0 p-10'>
                    <h1 className='z-10 lg:mt-8  text-left leading-normal font-semibold text-4xl shop-page-heading lg:text-5xl mb-5'>Corporate </h1>
                    <p className=' text-left z-10 leading-8 mt-0 text1 lg:mr-10' >
                    Corporate is a mutli-user license for the Storlytics software which supports upto 20 users. Additional benefits include system design consultation where the user/customer can leverage Storlytics engineers' assistance on system design and modeling. Customers can procure 10 design consultation from Storlytics over the valid license year.

                        <div>
                           

                            <table className=' justify-center m-auto border text-center rounded-xl w-3/4 '>
                                <thead>
                                    <th className='shop-page-heading'> Corporate

                                    </th>
                                </thead>
                                <tbody>
                                    <tr className=' bg-gray-200'>Validity</tr>
                                    <tr>1 year extendable</tr>
                                    <tr className=' bg-gray-200'>Number of Licenses</tr>
                                    <tr>20</tr>
                                    <tr className=' bg-gray-200'>Software support</tr>
                                    <tr > Yes</tr>
                                    <tr className=' bg-gray-200'> System design consultation </tr>
                                    <tr> 10 per year</tr>
                                    <tr className=' bg-gray-200'> Purchase cost</tr>
                                    <tr> $10,000</tr>
                                    <tr className=' bg-gray-200'> Yearly renewal fee</tr>
                                    <tr> $10,000</tr>
                                </tbody>

                            </table>
                        </div>
                    </p>


                </div></div>

        </div>
    </div>  );
}

export default Bottom;