import React, { useState } from 'react';
import industryadviser from '../../../static/images/Sherif.png';
import industryadviser1 from '../../../static/images/Jason.jpg';
import './dropdown.css';
function AboutusDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <> <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

      <div className='flex flex-row w-full leading-10 p-5  '>

        <div className=' w-1/4 text-white p-5 justify-start border-r-2 border-white'>
          <div className='xl:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold 2xl:mt-3   '> <a href='/aboutus'>Our Story</a></div>
          <div className=' mt-5 xl:text-sm lg:text-sm 2xl:text-base font-normal'>  <p>It has been identified that energy storage is critical to achieving a low-carbon sustainable future. Energy storage offers unmatched flexibility in operation that can be utilized to improve overall grid reliability and stability.
          </p></div>
          <div>
            <button className=' text-base font-semibold border-2 border-sky-600 rounded-lg p-3 pl-5 pr-5 mt-5 hover:shadow-lg hover:shadow-blue-600'  > <a href='/aboutus'>LEARN MORE </a>  </button>
          </div>
        </div>
        <div className='flex flex-col w-1/2 mt-3 text-center justify-center text-white items-center ' >
          <div className=' text-2xl font-semibold  uppercase '> <a href='/aboutus'>industry adviser</a></div>

          <div className='flex flex-row mt-3 '>
            <div className=' w-1/2 flex flex-col mr-7'>
              <div> <img className=' w-52 h-52' src={industryadviser} /></div>
              <div> <p> Dr. Sherif A. </p></div>
            </div>
            <div className=' w-1/2 flex flex-col'>
              <div>  <img className=' w-52 h-52' src={industryadviser1} /></div>

              <div> <p> Jason Groenewold</p></div>
            </div>
          </div>
        </div>
        <div className=' w-1/4 text-white p-5 justify-start border-l-2 border-white '>

          <div className=' text-2xl font-semibold mt-3  '> <a href='/aboutus'>Our Values</a></div>
          <div className=' mt-5  text-sm font-normal'>
            <ul className=' text-left  leading-10   p-2 '>
              <li className='  '> <i class="fa-solid fa-circle mr-3" ></i> Quality Oriened
              </li>
              <li className=''> <i class="fa-solid fa-circle mr-3"></i>Dynamic
              </li>
              <li className=''> <i class="fa-solid fa-circle mr-3"></i>Dependable
              </li>
              <li className=''> <i class="fa-solid fa-circle mr-3"></i>Sustainability Oriented
              </li>

            </ul>
          </div>



        </div>
      </div>

    </div>

    </>
  );
}

export default AboutusDropdown;