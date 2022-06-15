import React from 'react';
import oursoftware from '../../../../static/images/AdobeStock_230134446.jpeg';
import './midsection.css';

function MidSection() {
    return (<div className=' 2xl:mt-72 xl:mt-0 lg:p-10 p-10 lg:mt-32 md:mt-24 md:pt-0  sm:p-10 sm:mt-0 md:p-10  mt-0'>
        <div className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap '>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full   '>
                <div className='   md:mt-0 sm:mt-10  mt-10  xl:pr-10 lg:pr-5 lg:pl-5'>

                    <h1 className='headingcolor z-10  sm:mt-5  text-left leading-10 inline-block primary-border font-semibold xl:text-4xl lg:text-4xl md:text-3xl text-2xl mb-5 border-b-4 xl:mt-5 '> Our Software</h1>

                    <p className=' textcolor text-left z-10 leading-8 inline-block  ' > Storlytics is a powerful software for modeling battery energy storage systems. It allows users to design, size and optimize grid tied battery systems by offering a user friendly interface to deduce power and energy capacity requirements for different energy storage grid applications "use-cases". It also allows users to accurately model power flow, battery losses, round trip efficiency and predict degradation curves of defined energy storage systems leveraging a wide variety of inverter and battery models, including Lithium Nickel Manganese Cobalt (NMC) and Lithium Iron Phosphate (LFP) chemistries. Storlytics can import user defined and benchmark ESS profiles to deduce actual performance of  planned grid tied and renewable energy projects.</p>

                    <div className=' flex  flex-row lg:flex-row lg:mr-5 lg:mt-7 mt-5  '>
                        <button className=' btn1  rounded-lg text-white xl:w-52 lg:w-52 md:w-48 sm:w-44 lg:h-12 xl:h-12 md:h-10 w-44 h-10 xl:mr-4 mr-2 lg:leading-10 md:leading-8 leading-normal lg:text-xl md:text-lg xl:text-xl text-base '> Download Now!<i class='fas fa-arrow-right ml-2'></i> </button>
                        <button className=' btn1 rounded-lg text-white xl:w-48 lg:w-48 md:w-48 lg:h-12 xl:h-12 md:h-10 w-44 h-10 lg:leading-10 md:leading-8 leading-normal lg:text-xl md:text-lg xl:text-xl text-base sm:w-44 '> Request Demo</button>
                    </div>

                </div></div>
             <div className=' lg:w-1/2 md:w-full md:mt-10 sm:mt-5  mt-5  '>
                <img className='   xl:mt-10 ' src={oursoftware} />
            </div>

        </div>




    </div>);
}

export default MidSection;