import React from 'react'
import ScrollCounter from './ScrollCounter'
import '../public/WhyInnovader.css'
import logo from '../assets/logo.png'

export default function WhyInnovader() {

  return (
    <div className='WhyInnovader'>
      <div className="why-innovader">
        {/* <img src={logo} alt="" /> */}
        <span>Why Innovader</span>
      </div>
      <div className="super-head">
      We’re not just another agency, we’re your <span>
      Digital Sales Partner.
      </span>
      </div>
      <div className="why-content">
      With a sharp focus on real estate, we specialize in turning online clicks into on-site visits and qualified leads into closed deals. Leveraging data-driven performance marketing strategies, we help real estate businesses maximize visibility, drive serious buyer interest, and accelerate conversions — all while optimizing ad spend for maximum ROI.


      </div>
    <div className="why-counters">
        <div className="counter">
        <ScrollCounter target={1} duration={1000} /> <span>Cr +</span>
        <p>Ad Spend Managed</p>
        </div>
        <div className="counter">
        <ScrollCounter target={50} duration={1000} /> <span>K +</span>
        <p>Leads Delivered</p>
        </div>
        <div className="counter">
        <ScrollCounter target={60} duration={1000} /> <span>+</span>
        <p>Real Estate Projects Handled</p>
        </div>
        <div className="counter">
        <ScrollCounter target={4} duration={1000} /> <span>Years +</span>
        <p>Of Industry Experience</p>
        </div>
    </div>
    <div className="why-cta"> 
       <div className='spans'>
     <span>Verified Buyers</span> <span>Lower CPR</span> 
       </div><span>Real Estate Leads</span>
   <button className='why-btn'>Scale With Us Today</button>

   </div> 
    </div>
  )
}
