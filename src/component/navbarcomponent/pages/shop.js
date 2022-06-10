import React,{useEffect} from 'react';
import Aos from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
import './shop.css';
import Header from './shopcomponent/shopheader';
import Midsection from './shopcomponent/shopmidsection';
function Shop() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (  <div> 
        <div data-aos='fade-up'><Header/></div>
     <div  data-aos='fade-up'> <Midsection/></div>
    
    </div>);
}

export default Shop;