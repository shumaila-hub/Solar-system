import React from 'react';
import homebottomimg from '../../../../static/images/Studio_Project (1).jpeg';
function Bottom() {
    const texts = ['Storlytics leverages more than 20 years of battery energy storage projects development to simplify modeling BESSs', ' Input CSV format files for expected battery dispatch profile ',
        'Specify the number of battery modules, racks and inverters to match power and energy needed in provided Point of Interconnect (POI) profile using the "Sizing Assist Tool"', ' Simulate performance of specified battery energy storage system and plug and chug designs to reach optimal performance" ', ' Simulate performance of specified battery energy storage system and plug and chug designs to reach optimal performance" ', 'Create CSV files with 8760s (Hourly or sub-hourly) of important system parameters like power flow at battery, inverter and point of interconnect (POI)'];

    return (<div className=' '>
        <div className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap  '>
            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-10 lg:mt40   '>
                <div className='lg:p-20 lg:pt-0 lg:pr-0 md:p-10  p-5 lg:mt-0 '>

                    <h1 className='headingcolor z-10  text-left leading-10 font-semibold lg:text-4xl lg:mt-10 text-3xl mb-5 '> Energy Storage Systems Modeling Simplified</h1>

                    <p className=' list-outside textcolor text-left z-10 leading-8 inline-block ' >

                        Storlytics leverages more than 20 years of battery energy storage projects development to simplify modeling BESSs 
                        <div className='mt-5 '>
                            {texts.map(text => <li className=' hover:shadow-lg leading-8  '> {text}  </li>)}
                        </div>
                    </p>


                </div>
            </div>
            <div className=' lg:w-1/2 md:w-full lg:h-full lg:mt-32  '>
                <img className=' lg:pr-24 w-auto md:p-20 p-10 pt-0 xl:pt-0  ' src={homebottomimg} />
            </div>

        </div>

    </div>);
}

export default Bottom;