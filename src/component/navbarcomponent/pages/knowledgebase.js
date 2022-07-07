
import React from 'react';
import articlelogo from '../../../static/images/icons/rethinkresearch-logo.png';
// import '../../App.css';
import Pagination from '@material-ui/lab/Pagination';
function KnowledgeBase() {




  return (
    <div className='mt-0 container m-auto'>
      <div className='flex w-full lg:flex-row  flex-col pb-10 md:p-16 sm:p-10 p-8'>
        <div className=' lg:w-1/2 border-2 lg:p-5 md:p-5 sm:p-5 p-3 lg:h-[38rem] xl:h-[34rem] w-full lg:m-5  lg:mt-32 md:mt-28 sm:mt-24 mt-28'>
          <div className='flex flex-col'>
            <div>
              <span className=' text-blue-600 lg:text-lg md:text-lg text-base hover:text-blue-800 '> JUNE 2, 2020</span> </div>
            <div className=' lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold md:mt-5 sm:mt-5 mt-5' >
              <a href='#'> EnerVenue Announces Agreement to Support Sonnell Power Solutions’ Clean Energy Development with Stationary Storage Solution</a>
            </div>
            <div>
              <p className=' lg:text-lg md:text-lg sm:text-base text-sm md:mt-5 sm:mt-5 mt-5'>
                Continuing to expand globally, EnerVenue will accelerate the clean energy transformation into Puerto Rico’s industrial sector through the new partnership with Sonnell FREMONT, Calif. and… <a href='#' className=' text-blue-600  underline underline-offset-4'>Read </a>
              </p>
            </div>
          </div>
        </div>
        <div className=' lg:w-1/2 border-2 lg:h-[38rem] xl:h-[34rem]  lg:p-5 md:p-5 sm:p-5 p-3 w-full lg:m-5 lg:mt-32 md:mt-10 sm:mt-10 mt-8'>
          <div className='flex flex-col'>
            <div>
              <span className=' text-blue-600 lg:text-lg md:text-lg text-base hover:text-blue-800'> JUNE 2, 2020</span> </div>
            <div className=' lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold md:mt-5 sm:mt-5 mt-5' >
              <a href='#'> EnerVenue Announces Agreement to Support Sonnell Power Solutions’ Clean Energy Development with Stationary Storage Solution</a>
            </div>
            <div>
              <p className='lg:text-lg md:text-lg sm:text-base text-sm md:mt-5 sm:mt-5 mt-5'>
                Continuing to expand globally, EnerVenue will accelerate the clean energy transformation into Puerto Rico’s industrial sector through the new partnership with Sonnell FREMONT, Calif. and… <a href='#' className=' text-blue-600  underline underline-offset-4'>Read </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto flex  justify-center'> <button className=' bg-blue-600 shadow-lg rounded-3xl xl:w-52 2xl:w-60 2xl:h-16 lg:w-52 lg:h-14 md:w-52 md:h-14 sm:w-48 sm:h-12 w-48 h-12 text-white text-center sm:mt-0 text-xl  hover:bg-blue-500 hover:opacity-90 hover:text-white  hover:shadow-slate-400   hover:shadow-2xl  2xl:text-2xl xl:text-xl lg:text-lg '> SEE ALL </button> </div>
      <div className=' flex flex-col lg:p-20 leading-10 md:p-16 sm:p-10 p-8'>
        <div className=' flex justify-center'> <h1 className=' font-semibold text-4xl'> Press</h1></div>
        <div className=' flex justify-start mt-10'> <p className=' font-semibold lg:text-3xl md:text-3xl sm:text-2xl text-xl'>EnerVenue raises $100M to accelerate clean energy using nickel-hydrogen batteries.</p></div>
        <div className='mt-10'>
          <p className=' lg:text-xl md:text-xl sm:text-lg text-base text-gray-500'> <i class="fa fa-quote-left" aria-hidden="true"></i>
            order to support a buildout of renewable energy, which tends to over-generate electricity at certain times of day and under-generate at others, the grid is going to need a lot of batteries. While lithium-ion works fine for consumer electronics and even electric vehicles, battery startup EnerVenue says it developed a breakthrough technology to revolutionize stationary energy storage. </p>

        </div>
        <div className=' flex lg:flex-row flex-col w-full mt-20 text-xl font-medium text-gray-500'>
          <div className='  lg:w-1/3 w-full lg:m-5  ' >
            <blockquote>
              <p className='lg:text-xl md:text-xl sm:text-lg text-base'>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                EnerVenue Closes An Enormous Investment Round In A Great Sign For Grid-Level Storage Technology.
              </p>
            </blockquote>
            <p className=' font-semibold text-3xl lg:mt-10 mt-5'> <a href='#'> Forbes</a></p>
          </div>
          <div className='lg:w-1/3 w-full  lg:m-5 mt-10'>
            <blockquote>
              <p>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                EnerVenue signed its first major distribution agreement with Hong Kong’s Towngas. The deal will pilot the company’s nickel-hydrogen battery technology and serve as an audition for future deals to come.
              </p>
            </blockquote>
            <p className=' font-semibold text-3xl lg:mt-10 mt-5'> <a href='#'> Pv magazine</a></p>
          </div>
          <div className='lg:w-1/3 w-full  lg:m-5 mt-10 '>
            <blockquote>
              <p>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                EnerVenue is a classic case of how fast energy markets can change in the current energy transition – just 3 years ago, the breakthrough that made this type of energy storage possible, did not exist.
              </p>
            </blockquote>
            <div className='lg:mt-5 mt-5'>
              <a href='#'>  <img src={articlelogo} className=' bg-gray-500 w-20 h-20' /> </a>

            </div>
          </div>

        </div>



      </div>
     
      <div className='  p-8 m-auto flex justify-center'>
    
      <Pagination count={10} />
    </div>

    </div>
  );
}

export default KnowledgeBase;

