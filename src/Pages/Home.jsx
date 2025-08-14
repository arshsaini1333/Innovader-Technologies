import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'

import OurClients from '../Components/OurClients.jsx'
import WantToSee from '../Components/WantToSee.jsx'
// import Testimonial from '../Components/Testimonial.jsx'
import HomeTestimonials from '../Components/HomeTestimonials.jsx'
import WhyInnovader from '../Components/WhyInnovader.jsx'
import Results from '../Components/Results.jsx'
import OurServices from '../Components/OurServices.jsx'
import ServiceForm from '../Components/ServiceForm.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
import Lottie from "lottie-react";
import animationData from '../assets/loader.json'
import 'aos/dist/aos.css';

 
export default function Home({popUp})
{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000); // Show animation for 2 seconds
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return (
          <div className="preloader">
            <Lottie
              animationData={animationData}
              loop={true} /* change to false to play once */
              className="preloader-animation"
            />
          </div>
        );
      }
    
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
        {/* <ContactHome/> */}
        <ServiceForm/>
        {/* <Footer/> */}
        </div>
        
       
        </>
    )
}