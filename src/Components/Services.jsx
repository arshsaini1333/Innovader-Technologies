import '../public/Home.css';
import animationData from '../assets/animation.json';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// Importin images

import logo1 from '../assets/seo.png'
import logo2 from '../assets/ppc.png'
import logo3 from '../assets/user-engagement.png'
import logo4 from '../assets/video-marketing.png'
import logo5 from '../assets/gads.png'
import logo6 from '../assets/sales.png'
import logo7 from '../assets/ux.png'
import logo8 from '../assets/content-creation.png'
import logo9 from '../assets/movie.png'
import logo10 from '../assets/social-media.png'

export default function Services()
{
    // Data Arrays

    const data = [
        {
            img: logo1, 
            name: "SEO - Search Engine Optimization"
        },
        {
            img: logo2, 
            name: "PPC - Pay Per Click"
        },
        {
            img: logo3, 
            name: "Lead Generation"
        },
        {
            img: logo4, 
            name: "Meta Ads"
        },
        {
            img: logo5, 
            name: "Google Ads"
        },
        {
            img: logo6, 
            name: "Marketing & Sales Automation"
        },
        {
            img: logo7, 
            name: "Website Designing"
        },
        {
            img: logo8, 
            name: "Content Creation"
        },
        {
            img: logo9, 
            name: "Video Ad Shoot"
        },
        {
            img: logo10, 
            name: "Social Media Marketing"
        },
        
    ]
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: false,     
        });
      }, []);
    return(
        <div className="services">
            <div className="service-headings">
                <div className="sh-sub">Our Services </div>
                <siv className="sh-super">Driving Growth with Marketing, Design & Automation</siv>
            </div>
            <div className="services-content">
            {data.map(d => (
                <div className="service-card">
                    <img src={d.img} alt="" />
                    <p>{d.name}</p>
                </div>
            ))}
            </div>
        </div>
    )

}