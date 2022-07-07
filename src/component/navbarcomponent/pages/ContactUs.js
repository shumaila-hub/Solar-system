import React from 'react';
  
import { LockClosedIcon } from '@heroicons/react/solid'
function ContactUs() {
    
    return (<div className=' 2xl:p-10  xl:p-10 lg:p-10   '>
   

      <div className= " xl:mt-32  xl:p-10 p-5 shadow-xl shadow-slate-600 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full container m-auto min-h-full flex items-center justify-center  ">
        <div className=" lg:mt-0 xl:mt-0 2xl:mt-0 mt-20 w-full ">
          
          <form className=" w-3/4 mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div> 
                Name
                <label htmlFor="email-address" className="sr-only">
               Name
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter your Name"
                />
              </div>
              
              <div > 
                Phone 
                <label htmlFor="email-address" className="sr-only">
               Phone number
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mt-3 mb-5  appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter Phone Number"
                />
              </div>
              <div>
                Email
                <label htmlFor="email-address" className="sr-only">
               Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                Company
                <label htmlFor="password" className="sr-only">
                  Company
                </label>
                <input
                  id="Company"
                  name="Company"
                  type="text"
                  autoComplete="current-password"
                  required
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Company Name"
                />
              </div>
              <div>
                Message
                <label htmlFor="password" className="sr-only">
                  Message
                </label>
                <input
                  id="Message"
                  name="Message"
                  type="text"
                  autoComplete="current-password"
                  required
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-40 text-left"
                  placeholder="Enter Your Message"
                />
              </div>
            </div>

            <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between'>
              <button
                type="submit"
                className="group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
                </span>
                Back
              </button>
              <button
                type="submit"
                className=" xl:mt-0 2xl:mt-0 lg:mt-0 mt-5 group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
                </span>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
   
 
    </div>);
}

export default ContactUs;