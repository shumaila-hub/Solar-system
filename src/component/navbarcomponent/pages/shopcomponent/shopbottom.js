import React,{useEffect} from 'react';
import computerimg from '../../../../static/images/Capture.webp';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
function ShopBottom() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (  <div data-aos='fade-up'>
      <div className=' lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap lg:p-10 lg:pb-20 lg:pt-0 md:p-7 md:pb-20 md:pt-0 sm:p-5 sm:pb-20 pb-10 sm:pt-0 p-5 pt-0' >
            <div className=' lg:w-1/2 md:w-full lg:h-full  '>
                <img className='w-full lg:mt-20  xl:p-0 2xl:p-0 lg:p-0 p-5' src={computerimg} />
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full '>
                <div>
                    <h1 className='z-10 lg:mt-8 md:mt-7 sm:mt-5 mt-4 text-left leading-10 font-semibold  heading-color 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-2xl mb-5 inline-block primary-border border-b-4  '>Corporate </h1>
                    <p className=' text-left z-10 leading-8 mt-0 text1 ' >
                    Corporate is a mutli-user license for the Storlytics software which supports upto 20 users. Additional benefits include system design consultation where the user/customer can leverage Storlytics engineers' assistance on system design and modeling. Customers can procure 10 design consultation from Storlytics over the valid license year.

                        <div>
                           

                            <table className= ' xl:mt-5 justify-center m-auto border text-center rounded-xl w-3/4 mt-5 '>
                                <thead>
                                    <th className='shop-page-heading p-2'> Corporate

                                    </th>
                                </thead>
                                <tbody>
                                    <tr className=' bg-gray-200'>Validity</tr>
                                    <tr>1 year extendable</tr>
                                    <tr className=' bg-gray-200'>Number of Licenses</tr>
                                    <tr>15</tr>
                                    <tr className=' bg-gray-200'>Software support</tr>
                                    <tr > Yes</tr>
                                    <tr className=' bg-gray-200'> System design consultation </tr>
                                    <tr> 10 per year</tr>
                                    <tr className=' bg-gray-200'> Purchase cost</tr>
                                    <tr> $30,000</tr>
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

export default ShopBottom;