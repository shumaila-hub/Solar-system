import React,{useEffect} from 'react';
import adviserimage from '../../../../static/images/adviser1.webp';
import adviserimage1 from '../../../../static/images/R.webp';
import Aos from 'aos';
import '../../../../../node_modules/aos/dist/aos.css';
function Adviser()
 {useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
    return ( <div>
         <div data-aos='fade-up' className=' w-full xl:container flex flex-col items-center justify-center  m-auto lg:p-10 md:p-16 md:pt-8 sm:p-10 p-8'>
            <div> 
                <h1 className='text-center leading-8 font-semibold lg:text-4xl md:text-3xl text-2xl justify-center inline-block border-b-4  primary-border heading-color mb-5 '> INDUSTRY ADVISER </h1>
            </div>

            <div className=' flex lg:flex-row  flex-col w-full md:mt-5 '>
                <di className='lg:w-1/2 box1 lg:flex lg:flex-col w-full  rounded-lg shadow-lg pr-7 pl-7  '>

                <div className='w-1/4  m-auto '>
                        <img className=' shadow-lg ' src={adviserimage1} />
                    </div>
                    <div className=' '>
                        <h1 className=' heading text-center leading-8 font-semibold text-lg mb-5'>Jason Groenewold</h1>
                        <p className=' text1 lg:p-5 lg:pt-0 pb-5  '>Jason is currently the president of Common Square, LLC. He brings to Storlytics along with him a tremendous amount of experience in the renewable energy development space. Jason oversaw development, construction and operations for a rapidly growing portfolio of projects at Pine Gate Renewables and hired and trained staff to implement growth strategies its growth strategy. Prior to joining Pine Gate Renewables, Jason spearheaded the solar development team at Duke Energy Corporation and led them to the development of more than 300MW of solar projects in North Carolina and throughout Duke's regulated footprint.
                        </p>
                    </div>

                </di>

                <div className='lg:w-1/2 box1 lg:flex lg:flex-col w-full  rounded-lg shadow-lg pr-7 pl-7 md:mt-8 sm:mt-5 mt-5 lg:mt-0 '>

                    <div className=' w-1/4  m-auto '>
                        <img className=' shadow-lg' src={adviserimage1} />
                    </div>
                    <div className=' '>
                        <h1 className='heading text-center leading-8 font-semibold text-lg mb-5 mt-5'>Dr. Sherif A. Abdelrazek
                        </h1>
                        <p className=' text1 lg:p-5 lg:pt-0   pb-5'> Dr. Sherif A. Abdelrazek received his B.S. degree in electrical power engineering from Ain Shams University and his M.S. and Ph.D. degrees in electrical engineering from the University of North Carolina Charlotte, in 2015. Dr. Abdelrazek is passionate about sustainable and renewable energy and has more than 10 years of experience in design, development and execution of energy storage, microgrid and solar plus storage projects. Currently, Dr. Abdelrazek leads Duke Energy’s engineering team responsible for design and integration of utility scale and C and I energy storage, microgrid and storage plus solar projects. Dr. Abdelrazek currently holds three grid tied energy storage related patents and multiple IEEE journal and conference publications.</p>
                    </div>
                </div>

            </div>
        </div>
    </div> );
}

export default Adviser;