import React from 'react';
import storlytics from '../static/images/logo.webp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import linkedin from '../static/images/icons/linkedin.png';
import twitter from '../static/images/icons/twitter.png';
import youtube from '../static/images/icons/youtube.png';
import './footer.css';
function Footer() {
    return (
        <footer >

            <div class="primary-footer w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col ">
                <div class="footer-col-1 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full m-auto justify-center items-center lg:pl-0 md:pl-0 xl:pl-0 pl-16 ">
                    <div class="footer-branding  ">
                        <a href="#" rel="home">
                            <img className=' w-60 h-14' src={storlytics} />

                        </a>
                    </div>
                    <div class="site-copyright">
                        <p><small>Copyright © 2022 Storlytics. All rights reserved.</small></p>


                    </div>
                </div>

                <div class="footer-col-2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full m-auto justify-center">
                    <div class="footer-social pl-16 ">



                        <ul class="social-nav flex-row flex xl:float-right lg:float-right md:float-right sm:float-right ">
                            <li>
                                <a href="https://twitter.com/storlytics" target="_blank">
                                <img className=' w-10 h-10' src={twitter} />

                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/storlytics" target="_blank">
                                
                                    <img className=' w-10 h-10' src={linkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCgyxkGuz2X_jIximCXtk15w" target="_blank">
                                   
                                    <img className='  w-10 h-10' src={youtube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </footer>

    );
}

export default Footer;