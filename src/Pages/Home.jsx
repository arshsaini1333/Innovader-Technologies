import HomeLeft from '../Components/HomeLeft.jsx'
import HomeRight from '../Components/HomeRight.jsx'
import '../public/Home.css'
import Services from '../Components/Services.jsx'
import EnquireNow from '../Components/EnquireNowForm.jsx'
import OurClients from '../Components/OurClients.jsx'
import WantToSee from '../Components/WantToSee.jsx'
import Testimonial from '../Components/Testimonial.jsx'
import Footer from '../Components/Footer.jsx'
import { useState } from 'react'

 
export default function Home()
{
    
    const [isShow, setShow] = useState(false);
    function popUp()
    {
        setShow(!isShow);
    }
    
    return (
        <>
        <div className='Home'>
        <HomeLeft popUp={popUp} />      
        </div>
        <Services />
        
        <OurClients/>
        <WantToSee/>
        <Testimonial/>
        <Footer/>
        <EnquireNow isShow={isShow} popUp={popUp}/>
        </>
    )
}