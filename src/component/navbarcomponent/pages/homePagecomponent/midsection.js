import React from 'react';
import oursoftware from '../../../../static/images/AdobeStock_230134446.jpeg';
import './midsection.css';

function MidSection() {
    return (<div className=' lg:mt-0'>
        <div className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap  '>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-10 lg:mt40  '>
                <div className='lg:p-24 lg:pb-0 lg:pr-10  md:p-10 sm:p-10 lg:mt-0 md:mt-0 sm:mt-10 mt-10 '>

                    <h1 className='headingcolor z-10 lg:mt-0  xl:mt-20 sm:mt-5 mt-10 text-left leading-normal font-semibold xl:text-4xl lg:text-4xl md:text-3xl text-2xl '> Our Software</h1>

                    <p className=' textcolor text-left z-10 leading-normal inline-block ' > Storlytics is a powerful software for modeling battery energy storage systems. It allows users to design, size and optimize grid tied battery systems by offering a user friendly interface to deduce power and energy capacity requirements for different energy storage grid applications "use-cases". It also allows users to accurately model power flow, battery losses, round trip efficiency and predict degradation curves of defined energy storage systems leveraging a wide variety of inverter and battery models, including Lithium Nickel Manganese Cobalt (NMC) and Lithium Iron Phosphate (LFP) chemistries. Storlytics can import user defined and benchmark ESS profiles to deduce actual performance of planned grid tied and renewable energy projects.</p>

                    <div className=' flex  flex-row lg:flex-row lg:mr-5 lg:mt-10 mt-5  '>
                        <button className=' btn1  rounded mr-5 '> Download Now! </button>
                        <button className=' btn1  rounded '> Request Demo</button>
                    </div>

                </div></div>
            <div className=' lg:w-1/2 md:w-full lg:h-full lg:mt-32   '>
                <img className=' lg:p-20  lg:pl-0 w-auto xl:mt-10 ' src={oursoftware} />
            </div>

        </div>




    </div>);
}

export default MidSection;