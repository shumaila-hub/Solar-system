// import React from 'react';

// import { LockClosedIcon } from '@heroicons/react/solid'
// function ContactUs() {

//     return (<div className=' 2xl:p-10  xl:p-10 lg:p-10   '>


//       <div className= " xl:mt-32  xl:p-10 p-5 shadow-xl shadow-slate-600 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full container m-auto min-h-full flex items-center justify-center  ">
//         <div className=" lg:mt-0 xl:mt-0 2xl:mt-0 mt-20 w-full ">

//           <form className=" w-3/4 mt-8 space-y-6" action="#" method="POST">
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div> 
//                 Name
//                 <label htmlFor="email-address" className="sr-only">
//                Name
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder=" Enter your Name"
//                 />
//               </div>

//               <div > 
//                 Phone 
//                 <label htmlFor="email-address" className="sr-only">
//                Phone number
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className=" mt-3 mb-5  appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder=" Enter Phone Number"
//                 />
//               </div>
//               <div>
//                 Email
//                 <label htmlFor="email-address" className="sr-only">
//                Email
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter Your Email"
//                 />
//               </div>
//               <div>
//                 Company
//                 <label htmlFor="password" className="sr-only">
//                   Company
//                 </label>
//                 <input
//                   id="Company"
//                   name="Company"
//                   type="text"
//                   autoComplete="current-password"
//                   required
//                   className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter Company Name"
//                 />
//               </div>
//               <div>
//                 Message
//                 <label htmlFor="password" className="sr-only">
//                   Message
//                 </label>
//                 <input
//                   id="Message"
//                   name="Message"
//                   type="text"
//                   autoComplete="current-password"
//                   required
//                   className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-40 text-left"
//                   placeholder="Enter Your Message"
//                 />
//               </div>
//             </div>

//             <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between'>
//               <button
//                 type="submit"
//                 className="group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                   <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
//                 </span>
//                 Back
//               </button>
//               <button
//                 type="submit"
//                 className=" xl:mt-0 2xl:mt-0 lg:mt-0 mt-5 group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//               >
//                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                   <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
//                 </span>
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>


//     </div>);
// }

// export default ContactUs;


import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEnvelope } from "react-icons/fa";

import { USERS_API_URL } from '../../../constants/index.js';
import axios from "axios";
import { Helmet } from "react-helmet";
import { LockClosedIcon } from '@heroicons/react/solid';

const ContactUs = (props) => {
  const history = useHistory();
  const [signUpSuccessMsg, setSignUpSuccessMsg] = useState("");
  const [isFormSubmitError, setIsFormSubmitError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });

  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  const redirectPage = (page) => {
    history.push(page);
  };

  const formValid = (formErrors, formData) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    // validate the form was filled out
    Object.values(formData).forEach((val) => {
      val === null && (valid = false);
    });
    return valid;
  };

  const handleSubmit = (e) => {
    setIsDisabled(true);
    let post_data = {};
    let valid = false;
    e.preventDefault();
    if (formValid(formErrors, formData)) {
      valid = true;
      post_data = formData;
    } else {
      setIsFormSubmitError(true);
      valid = false;
      setSignUpSuccessMsg("Some of your fields are empty or incorrect");
      setTimeout(function () {
        setSignUpSuccessMsg("");
      }, 10000);
      setIsDisabled(false);
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    if (valid) {
      axios
        .post(USERS_API_URL + "send_message/", post_data)
        .then((response) => {
          setIsDisabled(false);
          if (response.data.ok) {
            setFormData({
              name: "",
              email: "",
              phone: "",
              company_name: "",
              message: "",
            });
            setIsFormSubmitError(false);
            setSignUpSuccessMsg(response.data.message);
            setTimeout(function () {
              setSignUpSuccessMsg("");
            }, 10000);
            //
          } else {
            setIsFormSubmitError(true);
            setSignUpSuccessMsg("Some Error occured.Try again after some time.");
            setTimeout(function () {
              setSignUpSuccessMsg("");
            }, 10000);
            console.log("Error");
          }
        })
        .catch((error) => {
          setIsDisabled(false);
          setIsFormSubmitError(true);
          setSignUpSuccessMsg("Some error Occurred");
          setTimeout(function () {
            setSignUpSuccessMsg("");
          }, 10000);
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    validate(name, value);
  };

  const validate = (name, value) => {
    switch (name) {
      case "name":
        setFormData({ ...formData, name: value });
        if (value.length <= 0) {
          setFormErrors({
            ...formErrors,
            name: "Name is required",
          });
        } else {
          setFormErrors({ ...formErrors, name: "" });
        }
        break;
      case "phone":
        setFormData({ ...formData, phone: value });
        if (value.length <= 0) {
          setFormErrors({
            ...formErrors,
            phone: "Phone is required",
          });
        } else {
          setFormErrors({ ...formErrors, phone: "" });
        }
        break;
      case "email":
        setFormData({ ...formData, email: value });
        if (emailRegex.test(value)) {
          setFormErrors({ ...formErrors, email: "" });
        } else {
          if (value.length > 0) {
            setFormErrors({ ...formErrors, email: "Invalid email address" });
          } else {
            setFormErrors({ ...formErrors, email: "" });
          }
        }
        break;
      case "company_name":
        setFormData({ ...formData, company_name: value });
        if (value.length <= 0) {
          setFormErrors({
            ...formErrors,
            company_name: "Company name is required.",
          });
        } else {
          setFormErrors({ ...formErrors, company_name: "" });
        }
        break;
      case "message":
        setFormData({ ...formData, message: value });
        if (value.length <= 0) {
          setFormErrors({
            ...formErrors,
            message: "Please write some message.",
          });
        } else {
          setFormErrors({ ...formErrors, message: "" });
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="  w-full  ">
      <div className="  ">
        <Helmet >
          <title>Storlytics | Contact Us </title>
        </Helmet>
     
        <div className= " xl:mt-0  xl:p-20 p-5 shadow-xl shadow-slate-600 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full container m-auto min-h-full flex items-center justify-center  ">
        <div className=" lg:mt-0 xl:mt-0 2xl:mt-0 mt-20 w-full ">

          <form onSubmit={(e) => handleSubmit(e)}
           className=" w-3/4 mt-8 space-y-6" action="#" method="POST">
            <div className=" flex bg-slate-200 h-10 ">
              <div className=" w-1/4 text-blue-600 p-2 text-right flex justify-end"><FaEnvelope className="quote_section_icon" /> </div>
              <div className=" w-3/4 text-left p-1">Send us your message
                </div> 
             
              </div> 
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div> 
                Name <span style={{ color: "red" }}>*</span>
                <label htmlFor="email-address" className="sr-only">
               Name
                </label>
                <input
                 name="name"
                 value={formData.name}
                 onChange={(e) => handleChange(e)}
                 type="text"
                 placeholder="Enter Name"
                 required
              
                  id="name"
                  
                  autoComplete="name"
                
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              
                />
              </div>

              <div > 
                Phone <span style={{ color: "red" }}>*</span>
                <label htmlFor="email-address" className="sr-only">
               Phone number
                </label>
                <input
                 name="phone"
                 value={formData.phone}
                 onChange={(e) => handleChange(e)}
                 type="text"
                 placeholder="Enter Phone Number"
                 required
                  id="phone"
                  
                  
                  autoComplete="phone"
           
                  className=" mt-3 mb-5  appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 
                />
              </div>
              <div>
                Email <span style={{ color: "red" }}>*</span>
                <label htmlFor="email-address" className="sr-only">
               Email
                </label>
                <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
                  id="email-address"
                 
                 
                  autoComplete="email"
                 
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 
                />
              </div>
              <div>
                Company <span style={{ color: "red" }}>*</span>
                <label htmlFor="password" className="sr-only">
                  Company
                </label>
                <input
                 name="company_name"
                 value={formData.company_name}
                 onChange={(e) => handleChange(e)}
                 type="text"
                 placeholder="Enter Company Name"
                 required
                  id="Company"
                
                  autoComplete="company-name"
              
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               
                />
              </div>
              <div>
                Message <span style={{ color: "red" }}>*</span>
                <label htmlFor="password" className="sr-only">
                  Message
                </label>
                
                <input
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                as="textarea"
                placeholder="Enter your message"
                required
                  id="Message"
                
                  autoComplete="message"
                 
                  className=" mt-3 mb-5 appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-40 text-left"
               
                />
              </div>
            </div>

            <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between'>
              <button onClick={() => redirectPage("/shop")}
                type="submit"
                className="group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" /> */}
                </span>
                Back
              </button>
              <button
                type="submit"
                disabled={isDisabled}
                className=" xl:mt-0 2xl:mt-0 lg:mt-0 mt-5 group relative 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
                </span> */}
                Send
              </button>

            </div>
            {!signUpSuccessMsg ? (
              ""
            ) : (
         
                  <div style={{ display: "table", margin: "0 auto" }} className={isFormSubmitError ? "form_error_message" : "form_success_message"}>
                    {signUpSuccessMsg}
                  </div>
              
            )}
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}
export default withRouter(ContactUs);
