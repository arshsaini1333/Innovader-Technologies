import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'

import OurClients from '../Components/OurClients.jsx'
import WantToSee from '../Components/WantToSee.jsx'
// import Testimonial from '../Components/Testimonial.jsx'
import HomeTestimonials from '../Components/HomeTestimonials.jsx'
import WhyInnovader from '../Components/WhyInnovader.jsx'
import Results from '../Components/Results.jsx'
import Footer from '../Components/Footer.jsx'
import EnquiryPopup from '../Components/EnquiryPopup.jsx'
import OurServices from '../Components/OurServices.jsx'
import { useState } from 'react'
import { useEffect } from 'react';

import ContactHome from '../Components/ContactHome.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

 
export default function Home({popUp})
{
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
    
    return (
        <>
        <div className='Home'>
        <HomeLeft popUp={popUp} />  
        <HomeRight/>      
        </div>
        <div className="Parallax">
        <OurClients/>
        <WhyInnovader popUp={popUp}/>
        <OurServices/>
        <WantToSee/>     
        <Results popUp={popUp}/> 
        <HomeTestimonials popUp={popUp}/>
        <ContactHome/>
        {/* <Footer/> */}
        </div>
        
       
        </>
    )
}