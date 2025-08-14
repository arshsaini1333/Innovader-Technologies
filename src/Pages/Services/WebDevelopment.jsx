import React from 'react'
import '../../public/WebsiteDesign.css'
import card from '../../assets/webcard2.png'
import Lottie from "lottie-react";
import animation from '../../assets/ani.json'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import WebIcon from '@mui/icons-material/Web';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ScoreIcon from '@mui/icons-material/Score';
import EmergencyIcon from '@mui/icons-material/Emergency';
import websol from '../../assets/websol4.png'
import ServiceForm from '../../Components/ServiceForm'

import Timeline from '../../Components/TimeLine';

export default function WebDevelopment({popUp}) {
  return (
    <div className='WebsiteDesign'>
      {/* Top Image Bg */}
       <div className="wt-topmost">
        <div className="wtt-content">
          <div className="wtt-header">Web Development That Builds Brands, Not Just Websites</div>
          <div className="wtt-sub-head">At Innovader Technologies, we don’t just create websites — we craft digital experiences that convert, engage, and scale.</div>
          <button className="wtt-cta" onClick={()=>popUp()}>Get My Free Web Strategy</button>
        </div>
       </div>
       {/* Second Part */}

       <div className="web-service">
        <div className="webs-left">
        <div className="webs-content"><span>Your website is your digital storefront,</span> and we ensure it speaks value, credibility, and trust from the first click. Whether you're a startup or an established brand, our web development solutions are designed to reflect your vision and drive real business results.
         </div>
        <button className='webs-btn' onClick={()=>popUp()}>Get My Free Web Strategy</button>
        </div>

        <div className="webs-image">
          {/* <img src={card} alt="" /> */}
          <Lottie animationData={animation} loop={true} />
        </div>
       </div>

       {/* Third Part */}
       <div className="web-sol">
        <div className="websol-header">Solutions We Offer</div>
        <div className="websol-cards">
          <div className="wsc-card">
            <div className="wscc-icon" sx={{ fontSize: 40 }}><DashboardCustomizeIcon sx={{ fontSize: 40 }}/></div>
            <div className="wscc-name">Custom Business Websites </div>
            <div className="wscc-desc">lly responsive, fast-loading, and SEO-friendly</div>
          </div>
          <div className="wsc-card">
            <div className="wscc-icon" sx={{ fontSize: 40 }}><WebIcon sx={{ fontSize: 40 }}/></div>
            <div className="wscc-name">Landing Pages</div>
            <div className="wscc-desc">Built for conversion, perfect for campaigns and ads
</div>
          </div>
          <div className="wsc-card">
            <div className="wscc-icon" sx={{ fontSize: 40 }}><LocalGroceryStoreIcon sx={{ fontSize: 40 }}/></div>
            <div className="wscc-name">eCommerce Stores</div>
            <div className="wscc-desc">Scalable, secure, and built to sell more</div>
          </div>
          <div className="wsc-card">
            <div className="wscc-icon" sx={{ fontSize: 40 }}><ScoreIcon sx={{ fontSize: 40 }}/></div>
            <div className="wscc-name">Portfolio Websites</div>
            <div className="wscc-desc">Scalable, secure, and built to sell more</div>
          </div>
          <div className="wsc-card">
            <div className="wscc-icon" ><EmergencyIcon sx={{ fontSize: 40 }}/></div>
            <div className="wscc-name">Booking & Appointment Websites</div>
            <div className="wscc-desc">For clinics, salons, consultants, etc.</div>
          </div>
        </div>
        <button className="wscc-btn" onClick={()=>popUp()}>Boost My Online Presence
</button>
       </div>


       {/* Fourth part */}

        <div className="why-we-better">
          <div className="wwb-left">
          <div className="wwb-header">What Sets Innovader Apart in Web Development?</div>
          <div className="wwbl-list">
          <ul>
             <li>🌐 <strong>SEO-Friendly Website Setup</strong></li>
             <li>📊 <strong>Analytics Integration</strong></li>
            <li>🎯 <strong>Conversion Optimization Setup</strong></li>
            <li>🎨 <strong>Interactive UI with 3D Animations</strong></li>
            <li>📱 <strong>Dynamic &amp; Responsive Web Design</strong></li>
            <li>🗄️ <strong>Database-Driven Functionality</strong></li>
         </ul>
          </div>
          </div>
          <div className="wwb-image">
            <img src={websol} alt="" />
          </div>
        </div>
        <Timeline/>
<ServiceForm/>
    </div>
  )
}
