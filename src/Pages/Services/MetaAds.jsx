import React from 'react'
import '../../public/SocialMedia.css'
import '../../public/MetaAds.css'
import ssm1 from '../../assets/metaads.png'
import ssm from '../../assets/Metacard.png'
import ShareIcon from '@mui/icons-material/Share';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ServiceForm from '../../Components/ServiceForm'

export default function MetaAds({popUp}) {
  return (
    <div className='MetaAds'>
      {/* Part 1 */}
      <div className="socialmiedia-top">
          <div className="ssm-content">
            <div className="ssm-header">Turn Facebook & Instagram into Your Real Estate Lead Machine</div>
            <div className="ssm-sub-header">From targeting high-intent buyers to automating lead responses, our Meta Ads deliver sales-ready inquiries fast.</div>
            <button className='ssm-cta' onClick={()=>popUp()}>Let’s Generate Leads</button>
          </div>
        </div>
        
        {/* Second Part */}

        <div className="ssm-part2">
          <div className="spt-header">High-Converting Meta Ads for Real Estate Growth</div>
          <div className="spt-content">
             <div className="spt-left">Meta Ads (Facebook & Instagram) are one of the most powerful tools for real estate lead generation. At Innovader, we design high-converting ad campaigns that target the right audience at the right time — ensuring your properties get maximum visibility and quality inquiries. <br /> <br />

             From eye-catching carousel ads to Instagram Reels that showcase your projects, we create campaigns that stop the scroll and spark action. Our targeting strategies focus on location, demographics, interests, and buyer intent, so your ads are seen only by potential property buyers and investors.  <br /> <br />

             We handle everything — creative design, ad copy, budget optimization, lead capture, and performance tracking — so you can focus on closing deals while we bring in the leads.

            </div>
             <div className="spt-image">
              <img src={ssm1} alt="" />
             </div>
          </div>
          <button className='spt-cta' onClick={()=>popUp()}>Get My Meta Ads Proposal</button>
        </div>

            {/* Third Part */}
         <div className="ssm-third">
          <div className="ssmt-header">Why Choose Innovader for Meta Ads in Real Estate?</div>
          <div className="ssmt-cards">
            <div className="ssms-card">
              <div className="smc-icon"><ShareIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Quality Leads That Convert</div>
              <div className="smc-desv">We focus on generating verified, high-quality property leads so you spend time only on serious buyers, not cold inquiries.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><MonetizationOnIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Lower Cost Per Lead (CPL)</div>
              <div className="smc-desv">Our advanced targeting and ad optimization ensure you get maximum leads at the lowest possible cost.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><RealEstateAgentIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">High-Intent Buyers = More Sales</div>
              <div className="smc-desv">We target people actively looking for property, increasing the chances of closing deals faster.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><TipsAndUpdatesIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Smart Automation with WhatsApp Integration</div>
              <div className="smc-desv">Leads are instantly delivered to your WhatsApp with automated responses — so you never miss a hot prospect.</div>
            </div>
          </div>
         </div>
         <div className="sswi-header">Social Media Marketing Services We Offer</div>
         <div className="ssm-wi">
           <div className="sswi-left">
                
               <div className="sswi-list">
               <ul>
                   <li>📌 <strong>Facebook & Instagram Lead Generation Campaigns</strong> <br />
                   <span>Get high-quality property leads directly in your inbox.</span></li>
                   <li>📍 <strong>Location & Project-Based Targeting</strong> <br />
                  <span> Reach only people in your target city, area, or near your project site.</span></li>
                   <li>🎥 <strong>High-Impact Video & Reel Ads</strong> <br />
                    <span>Engaging property walkthroughs and lifestyle videos that sell the dream.</span></li>
                   <li>🖼 <strong>Carousel & Collection Ads</strong> <br />
                    <span>Showcase multiple units, floor plans, or offers in a single ad.</span></li>
                   <li>💬 <strong>Instant Lead Capture with Meta Forms</strong> <br /> 
                   <span>Collect lead details without making them leave Facebook or Instagram.</span></li>
                   <li>⚡ <strong>Retargeting Campaigns</strong> <br /> 
                   <span>Re-engage people who have visited your website or interacted with your ads.</span></li>
                   <li>📊 <strong>Weekly Campaign Performance Reports</strong> <br /> 
                   <span>Transparent reporting to track ROI and optimize campaigns.</span></li>
               </ul>
               </div>
           </div>
           <div className="sswi-image">
            <img src={ssm} alt="" />
           </div>
         </div>
           
           <ServiceForm/>
      
    </div>
  )
}
