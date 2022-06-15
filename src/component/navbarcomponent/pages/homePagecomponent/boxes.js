import React from 'react';
import icon1 from '../../../../static/images/icons/Battery-Icon.jpg';
import icon2 from '../../../../static/images/icons/Data-Icon.jpg';
import icon3 from '../../../../static/images/icons/Analytics-Icon.jpg';
import Inverter from '../../../../static/images/icons/Inverter-Icon.jpg';
import BalanceofPlant from '../../../../static/images/icons/BalanceofPlant-Icon.jpg';
import reporticon from '../../../../static/images/icons/Report-Icon.jpg';
import UseCase from '../../../../static/images/icons/UseCase-Icon.jpg';
import TimeSeries from '../../../../static/images/icons/TimeSeries-Icon.jpg';
import Output from '../../../../static/images/icons/Output-Icon.jpg';
import './boxes.css';
function Boxes() {
    return (
        <div className=' m-0 lg:m-10 xl:m-10 p-0 md:m-0  flex flex-col items-center '>
            <div className=''> <h1 className=' text-center xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold heading-color  primary-border border-b-4 m-auto justify-center mb-5 mt-5  '> <a href='#'> Software Features</a> </h1></div>

            <div className=' main-div-box lg:grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3  sm:w-full relative max-w-7xl  z-40'>

                <div className='box  overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative  '>
                    <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>


                        <div className='icon  '>
                            <img className='box-img1' src={icon1} />
                        </div>
                        <div className='content'>
                            <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'>Deatiled Battery Models</h3>
                            <p className='m-0 p-0 text-white text-sm'>Detailed analytics including sizing optimization, State of Health (SoH) profiles, Round Trip Efficiency (RTE) and more! </p>  </div>
                   
                </div>

                <div className='box  overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={icon2} /> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'> Data Preprocessing</h3>

                        <p className='m-0 p-0 text-white  text-sm'>Detailed analytics including sizing optimization, State of Health (SoH) profiles, Round Trip Efficiency (RTE) and more! </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'> <img className='box-img1' src={icon3} /></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'>Advance Analytics</h3>
                        <p className=' m-0 p-0 text-white  text-sm'>
                            Accurately models battery degradation and losses for all lithium chemistries and more</p>   </div>

                </div>




            </div>

            <div className=' main-div-box mr-3  lg:grid grid-cols-3 relative max-w-7xl h-80  md:grid-cols-2 sm:grid-cols-1 sm:h-4/5 md:w-full sm:w-full'>

                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon absolute mt-0 ml-0 w-full h-full bg-amber-600  duration-1000 z-10 hover:mt-5 hover:w-20 hover:h-20 rounded-md hover:left-10  '>
                        <img className='box-img1  absolute' src={Inverter} />
                    </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'>Detailed Inverter Models </h3>
                        <p className='m-0 p-0 text-white  text-sm'> Accurately models detailed losses and efficiency of widely used energy storage inverters </p>  </div>

                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={BalanceofPlant} /> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'> Balance of Plant Simulation</h3>

                        <p className='m-0 p-0 text-white  text-sm'>Models balance of plant components like PCS transformers, cables and HVAC systems to simulate energy storage system efficiency </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'> <img className='box-img1' src={reporticon} /></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl' >Report</h3>
                        <p className=' m-0 p-0 text-white  text-sm'>
                            Generate PDF reports detailing battery Sizing, Degradation, State of Health, Augmentation and Round Trip Efficiency (RTE) diagrams</p>   </div>

                </div>




            </div>
            <div className=' main-div-box
             mr-3  lg:grid grid-cols-3 relative max-w-7xl h-80  md:grid-cols-2 sm:grid-cols-1 sm:h-4/5 sm:w-full'>

                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon absolute mt-0 ml-0 w-full h-full bg-amber-600  duration-1000 z-10 hover:mt-5 hover:w-20 hover:h-20 rounded-md hover:left-10  '>
                        <img className='box-img1  absolute' src={UseCase} />
                    </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'>Use Cases  </h3>
                        <p className='m-0 p-0 text-white  text-sm'>Project development made easy; supports a wide range of energy storage applications and use cases, including stacked benefits </p>  </div>

                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={TimeSeries} /> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'> Time Series Analyses</h3>

                        <p className='m-0 p-0 text-white  text-sm'>Time series simulations allow evaluation of energy storage system power, State of Charge (SoC), Losses, RTE and SoH degradation curves </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r from-indigo-400 to-green-400'>
                    </div>
                    <div className='icon'> <img className='box-img1' src={Output} /></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'>Output Data</h3>
                        <p className=' m-0 p-0 text-white  text-sm'>Results of energy storage system simulations raw data available in sub-hourly, hourly (8760s) and daily formats
                        </p>   </div>

                </div>




            </div>
        </div>
    );
}

export default Boxes;