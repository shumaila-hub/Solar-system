import React,{useEffect} from 'react';
import icon1 from '../../../../static/images/icons/Battery-Icon.jpg';
import icon2 from '../../../../static/images/icons/recycle.png';
import icon3 from '../../../../static/images/icons/data-search-interface-symbol-of-a-bars-graphic-with-a-magnifier-tool.png';
import Inverter from '../../../../static/images/icons/icons8-dynamo-100.png';
import BalanceofPlant from '../../../../static/images/icons/network.png';
import reporticon from '../../../../static/images/icons/report.png';
import UseCase from '../../../../static/images/icons/workflow.png';
import TimeSeries from '../../../../static/images/icons/TimeSeries-Icon.png';
import Output from '../../../../static/images/icons/output.png';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
import './boxes.css';
function Boxes() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div data-Aos='fade-up' className=' m-0 lg:m-10 xl:m-10 p-0 md:m-0  flex flex-col items-center '>
            <div className=''> <h1 className=' text-center xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold heading-color  primary-border border-b-4 m-auto justify-center mb-5 mt-5  '> <a href='#'> Software Features</a> </h1></div>

            <div className=' main-div-box lg:grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3  sm:w-full relative max-w-7xl  z-40'>

                <div className='box  overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative  '>
                    <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r '>
                    </div>
                        <div className='icon rounded-2xl '>
                            <img className='box-img1' src={icon1} /> 
                            <p className=' title  text-white text-xl font-semibold w-full'> Deatiled Battery Models</p>
                        </div>
                        <div className='content'>
                            <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'>Deatiled Battery Models</h3>
                            <p className='m-0 p-0 text-white text-sm mt-3'>Detailed analytics including sizing optimization, State of Health (SoH) profiles, Round Trip Efficiency (RTE) and more! </p>  </div>
                </div>

                <div className='box  overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r '>
                    </div>
                    <div className='icon rounded-2xl'>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={icon2} />
                        <p className=' title absolute text-white text-xl font-semibold w-full'> Data Preprocessing</p> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'> Data Preprocessing</h3>

                        <p className='m-0 p-0 text-white  text-sm mt-3'>Detailed analytics including sizing optimization, State of Health (SoH) profiles, Round Trip Efficiency (RTE) and more! </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes bg-gradient-to-r '>
                    </div>
                    <div className='icon rounded-2xl '> 
                    <img className='box-img1 w-40 h-40' src={icon3} />
                    <p className=' title absolute  text-white text-xl font-semibold  w-full'> Data Advance Analytics</p></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'>Advance Analytics</h3>
                        <p className=' m-0 p-0 text-white  text-sm mt-3'>
                            Accurately models battery degradation and losses for all lithium chemistries and more</p>   </div>
                </div>
            </div>

            <div className=' main-div-box mr-3  lg:grid grid-cols-3 relative max-w-7xl h-80  md:grid-cols-2 sm:grid-cols-1 sm:h-4/5 md:w-full sm:w-full'>

                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative z-50 '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl  absolute mt-0 ml-0 w-full h-full   duration-1000 z-10 hover:mt-5 hover:w-20 hover:h-20 hover:left-10  '>
                        <img className='box-img1  absolute' src={Inverter} />
                        <p className=' title absolute  text-white font-semibold text-xl w-full'> Deatiled Inverter Models</p>
                    </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'>Detailed Inverter Models </h3>
                        <p className='m-0 p-0 text-white  text-sm mt-3'> Accurately models detailed losses and efficiency of widely used energy storage inverters </p>  </div>

                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl '>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={BalanceofPlant} />
                        <p className=' title absolute text-white font-semibold text-xl w-full'> Balance of plant simulation</p> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 mt-3 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl'> Balance of Plant Simulation</h3>

                        <p className='m-0 p-0 text-white  text-sm mt-3'>Models balance of plant components like PCS transformers, cables and HVAC systems to simulate energy storage system efficiency </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl '> <img className='box-img1' src={reporticon} />
                    <p className=' title absolute  text-white font-semibold text-xl text-center  w-full'> Report</p></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3' >Report</h3>
                        <p className=' m-0 p-0 text-white  text-sm mt-3'>
                            Generate PDF reports detailing battery Sizing, Degradation, State of Health, Augmentation and Round Trip Efficiency (RTE) diagrams</p>   </div>

                </div>




            </div>
            <div className=' main-div-box
             mr-3  lg:grid grid-cols-3 relative max-w-7xl h-80  md:grid-cols-2 sm:grid-cols-1 sm:h-4/5 sm:w-full'>

                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl  absolute mt-0 ml-0 w-full h-full  duration-1000 z-10 hover:mt-5 hover:w-20 hover:h-20  hover:left-10  '>
                        <img className='box-img1  absolute' src={UseCase} />
                        <p className=' title absolute top-3/4 text-white font-semibold text-xl  w-full'> Use Cases</p>
                    </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'>Use Cases  </h3>
                        <p className='m-0 p-0 text-white  text-sm mt-3'>Project development made easy; supports a wide range of energy storage applications and use cases, including stacked benefits </p>  </div>

                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl '>
                        {/* <h3> our software</h3> */}
                        <img className='box-img1' src={TimeSeries} />
                        <p className=' title absolute top-3/4 text-white font-semibold text-xl  w-full'> Time series Analyses</p> </div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'> Time Series Analyses</h3>

                        <p className='m-0 p-0 text-white  text-sm mt-3'>Time series simulations allow evaluation of energy storage system power, State of Charge (SoC), Losses, RTE and SoH degradation curves </p>
                    </div>
                </div>
                <div className='box overflow-hidden bg-cover box-border m-4 float-left rounded-xl object-center relative '>
                <div className=' overflow-hidden bg-cover absolute object-center rounded-xl boxes '>
                    </div>
                    <div className='icon rounded-2xl '> 

                    <img className='box-img1 mr-10 ' src={Output} />
                    <p className=' title absolute top-3/4 text-white font-semibold text-xl lg:ml-0  md:ml-0 sm:ml-24 ml-10 w-full'> Output Data</p></div>
                    <div className='content'>
                        <h3 className='m-0 p-0 text-white font-semibold text-base lg:text-xl xl:text-xl md:text-xl mt-3'>Output Data</h3>
                        <p className=' m-0 p-0 text-white  text-sm mt-3'>Results of energy storage system simulations raw data available in sub-hourly, hourly (8760s) and daily formats
                        </p>   </div>

                </div>




            </div>
        </div>
    );
}

export default Boxes;