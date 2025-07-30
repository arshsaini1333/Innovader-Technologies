import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'
import Services from '../Components/Services.jsx'
import EnquireNow from '../Components/EnquireNowForm.jsx'
import OurClients from '../Components/OurClients.jsx'
import WantToSee from '../Components/WantToSee.jsx'
// import Testimonial from '../Components/Testimonial.jsx'
import HomeTestimonials from '../Components/HomeTestimonials.jsx'
import WhyInnovader from '../Components/WhyInnovader.jsx'
import Footer from '../Components/Footer.jsx'

import OurServices from '../Components/OurServices.jsx'
import { useState } from 'react'
import { useEffect } from 'react';

import ContactHome from '../Components/ContactHome.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

 
export default function Home()
{
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    const [isShow, setShow] = useState(false);
    function popUp()
    {
        setShow(!isShow);
    }
    
    return (
        <>
        <div className='Home'>
        <HomeLeft popUp={popUp} />  
        <HomeRight/>      
        </div>
        <div className="Parallax">
        <OurClients/>
        <WhyInnovader/>

        <OurServices/>
        {/* <Services /> */}
        <WantToSee/>      
        
        {/* <Testimonial/> */}
        <HomeTestimonials/>
        {/* <HoverPanels/> */}
        {/* <ContactHome/> */}
        <Footer/>
        </div>
        <EnquireNow isShow={isShow} popUp={popUp}/>
        </>
    )
}