import '../public/Home.css';
import animationData from '../assets/animation.json';
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom'
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
    return(
        <div className="services">
        <div className="services-content" data-aos="flip-left" data-aos-delay="200">
            <h2>Our Services</h2>
            <div className="os-container">
                <div className="os-card">
                    <img src={logo1} alt=""/>
                    <p>SEO - Search Engine Optimization</p>
                </div>
                <div className="os-card">
                    <img src={logo2} alt=""/>
                    <p>PPC - Pay Per Click</p>
                </div>
                <div className="os-card">

                    <img src={logo3} alt=""/>
                    <p>Lead Generation</p>
                </div>
                <div className="os-card">

                    <img src={logo4} alt=""/>
                    <p>Meta Ads</p>
                </div>
                <div className="os-card">

                    <img src={logo5} alt=""/>
                    <p>Google Ads</p>
                </div>
                <div className="os-card">

                    <img src={logo6} alt=""/>
                    <p>Marketing & Sales Automation</p>
                </div>
                <div className="os-card">
                    <img src={logo7} alt=""/>
                    <p>Website Designing</p>
                </div>
                <div className="os-card">

                    <img src={logo8} alt=""/>
                    <p>Content Creation</p>
                </div>
                <div className="os-card">

                    <img src={logo9} alt=""/>
                    <p>Video Ad Shoot</p>
                </div>
                <div className="os-card">

                    <img src={logo10} alt=""/>
                    <p>Social Media Marketing</p>
                </div>

            </div>
            <div className="os-btn">
                <Link to='/our-services' className='link'>Know More..</Link>
               
            </div>
        </div>
        <div id="lottie-animation" className="services-ani">
        <Lottie animationData={animationData} loop={true} />
        </div>

    </div>
    )

}