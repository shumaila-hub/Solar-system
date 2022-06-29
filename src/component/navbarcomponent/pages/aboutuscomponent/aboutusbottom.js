import React from 'react';

function Bottom() {
    return (
        <div>
            <div className=' lg:flex xl:flex xl:flex-row lg:flex-row flex-col w-full  md:flex sm:hidden xl:mb-10 lg:p-20 md:p-20 md:pt-0 hidden '>

                <div className=' xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full'>
                    <h1 className=' xl:mt-40 lg:mt-40 text-center leading-8 font-semibold  text-5xl text-sky-600 md:p-10 ' >
                        Our values
                    </h1>
                </div>
                <div className='  md:justify-center md:items-center xl:w-1/2 lg:w-1/2 w-full about-us-botto-bg  '>

                    <span className=' aboutus-circle1 lg:mr-80 xl:mt-5 lg:mt-5 md:mt-1 sm:mt-1 md:-mr-24 sm:-mr-24 w-24 h-24 rounded-full bg-cover relative  text-center lg:float-right xl:float-right float-left '>

                        <div className='aboutus-content  box-border opacity-0 p-5 flex flex-col 
                        lg:h-full lg:ml-20 xl:ml-10 md:ml-20 text-center lg: '>
                            <div>  <h3 className='m-0 p-0  green-color text-base font-semibold lg:text-xl'>Quality oriented</h3>
                            </div>
                           <div>   <p className='m-0 p-0   text-sm ml-5'  >We stand by our work and are comittted to its accuracy and quality </p></div>
                          
                        </div>
                    </span>


                    <span className=' lg:mt-5 lg:ml-0  xl:mt-5 xl:ml-20 mt-32 w-36 h-36 rounded-full bg-green-color font-semibold text-xl inline-block text-center m-auto items-center float-left '>
                        <div className='text-white justify-center mt-10 '>  Storlytics Core Values</div>

                    </span>
                    <span className=' aboutus-circle2 lg:mr-48  xl:-mt-6 lg:-mt-6 md:mt-16 sm:mt-16 w-24 h-24 rounded-full bg-cover relative   text-center lg:float-right xl:float-right float-left md:mr-72 sm:mr-72'>
                    <div className='aboutus-content box-border opacity-0 p-5 flex flex-col lg:h-full  xl:ml-14 lg:ml-10 md:ml-20 sm:ml-20'>
                            <div>  <h3 className='m-0 p-0  green-color text-base font-semibold lg:text-xl '>Dynamic</h3></div>
                           <div>   <p className='m-0 p-0   text-sm ml-3'>We stand by our work and are comittted to its accuracy and quality </p></div>
                          
                        </div>
                     
                    </span>


                    <span className=' aboutus-circle3 lg:mr-48 xl:mt-6 lg:mt-10 md:mt-16 sm:mt-16  w-24 h-24 rounded-full bg-cover relative   text-center lg:float-right xl:float-right float-left md:mr-72 sm:mr-72'>

                    <div className='aboutus-content box-border opacity-0 p-5 flex flex-col lg:h-full xl:ml-14 lg:ml-10 md:ml-10 sm:ml-20'>
                            <div>  <h3 className='m-0 p-0  green-color text-base font-semibold lg:text-xl'>Dependable</h3></div>
                           <div>   <p className='m-0 p-0   text-sm ml-3'>We stand by our work and are comittted to its accuracy and quality </p></div>
                          
                        </div>
                    </span>
                    <span className=' aboutus-circle4 lg:mr-80 xl:-mt-5 lg:-mt-5 md:-mt-2 sm:-mt-2 w-24 h-24 rounded-full bg-cover relative   text-center lg:float-right xl:float-right  float-left'>

                    <div className='aboutus-content box-border opacity-0 p-5 flex flex-col lg:h-full xl:ml-14 lg:ml-10 md:ml-10 sm:ml-20  '>
                            <div>  <h3 className='m-0 p-0  green-color text-base font-semibold lg:text-xl'>Sustainabilty oriented</h3></div>
                           <div>   <p className='m-0 p-0   text-sm ml-2'>We stand by our work and are comittted to its accuracy and quality </p></div>
                          
                        </div>
                    
                    </span>



                </div>

            </div>


        </div>



    );
}

export default Bottom;