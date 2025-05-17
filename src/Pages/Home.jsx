import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'
import Services from '../Components/Services.jsx'
import EnquireNow from '../Components/EnquireNowForm.jsx'
import OurClients from '../Components/OurClients.jsx'
import WantToSee from '../Components/WantToSee.jsx'
import OurPackages from '../Components/OurPackages.jsx'
// import Testimonial from '../Components/Testimonial.jsx'
import ClientCarousel from '../Components/ClientCarousel.jsx'
import Footer from '../Components/Footer.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ReactSlick from '../Components/ReactSlick.jsx'

 
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
        <Services />
        <OurClients/>
        <WantToSee/>      
        <ClientCarousel/>
        {/* <OurPackages/> */}
        <Footer/>
        <EnquireNow isShow={isShow} popUp={popUp}/>
        </>
    )
}