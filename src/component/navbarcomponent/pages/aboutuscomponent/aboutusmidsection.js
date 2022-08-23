import React from 'react';
import aboutus from '../../../../static/images/AdobeStock_230134446.jpeg';
import offer from '../../../../static/images/american-public-power-association-XGAZzyLzn18-unsplash.jpg';
import Adviser from './industryadviser';
function Midsec() {
    return (<div>
        <div className='lg:h-3/4 w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap 2xl:p-20 xl:p-16 xl:pb-0 lg:p-16 lg:pb-0 md:p-14 sm:p-10 p-6'>
            <div className=' lg:w-1/2  '>
                <img className=' md:mt-0 md:pr-0 sm:pr-0 sm:mt-0 sm:pb-0 mt-0
                 lg:mt-32 xl:mt-20 w-full lg:h-96 lg:pr-5' src={aboutus} />
            </div>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-0  xl:pr-5  mt-5 xl:mt-0 lg:mt-0 '>
                <div className=' sm:pb-0 md:mt-10 sm:mt-5 lg:mt-0'>
                    <h1 className='z-10 text-left leading-8 font-semibold 2xl:text-5xl lg:text-4xl xl:text-4xl text-3xl  mb-5 border-b-4 inline-block primary-border heading-color'>Our Story</h1>
                    <p className=' text-left z-10 leading-8 mt-0 text1' > It has been identified that energy storage is critical to achieving a low-carbon sustainable future. Energy storage offers unmatched flexibility in operation that can be utilized to improve overall grid reliability and stability.

                        The need of the hour is to enable companies, industries, and utilities to create their own energy storage project. This involves determining accurate Battery Energy Storage specs based on the project use-case, detailed reports on system design and losses, and providing consultation on existing or new projects. Tackling all of this amid false technical claims, new inexperienced entrants and no credible source of information can be extremely challenging for customers to formulate a project. This is where STORLYTICS taps in and provides critical assistance on system design and modeling.

                        Our mission is to help our clients design their next energy storage project and build long-lasting partnerships as we shape the future of our power system.
                    </p>
                </div></div>


        </div>

        <div className='w-full 2xl:flex 2xl:flex-row lg:flex lg:flex-row inline-block 2xl:p-20  xl:p-16  lg:p-16 lg:pt-0 md:p-14 md:pt-0 p-6 pt-0 sm:p-10 sm:pt-0 '>
            <div className=' lg:w-1/2  '>
                <div className=' lg:pr-0 lg:mt-0 '>
                    <h1 className='z-10 lg:mt-0 lg:mb-2 mt-5  text-left leading-8 font-semibold lg:text-4xl 2xl:text-5xl xl:text-4xl text-3xl mb-5 border-b-4 inline-block primary-border heading-color'>Who are we</h1>
                    <p className=' text-left z-10 leading-8 mt-0 text1 ' >Storlytics is a product of a collaboration between industry experts and universities. Our team of PhDs and professional engineers partner with industry-leading utilities, engineering consultants, Universities, and national labs to develop accurate models for grid-tied battery energy storage systems
                    </p>
                    <div className='lg:mt-12 '>
                        <h1 className='z-10 mt-5 lg:mt-2  text-left leading-8 font-semibold  2xl:text-5xl lg:text-4xl xl:text-4xl text-3xl mb-5 border-b-4 inline-block primary-border heading-color '>
                            What we offer

                        </h1>
                        <p className=' text-left z-10 leading-8 mt-0 text1 inline-block' > Recognizing major industry pain points in uncertainty of degradation and system loss profiles of battery energy storage systems, the Storlytics team have built the Storlytics platform to predict degradation of battery energy storage systems, allowing our users to reduce project uncertainty and risk. This also allows our users to optimize project design and inform selection of major system components like batteries and inverters.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' lg:w-1/2  '>
                <img className='lg:mt-20 xl:mt-16 md:mt-5 sm:mt-5 mt-5  ' src={offer} />
            </div>

        </div>

        <Adviser />


    </div>);
}

export default Midsec;



