import React from 'react'
import '../../public/SocialMedia.css'
import ssm1 from '../../assets/ssm2.png'
import ssm from '../../assets/ssm.png'
import ShareIcon from '@mui/icons-material/Share';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import ScaleIcon from '@mui/icons-material/Scale';
import IosShareIcon from '@mui/icons-material/IosShare';
export default function SocialMedia({popUp}) {
  return (
    <div className='social-media'>
      {/* Part 1 */}
        <div className="socialmiedia-top">
          <div className="ssm-content">
            <div className="ssm-header">Turn Every Scroll into a Business Opportunity</div>
            <div className="ssm-sub-header">Your audience is already online — we make sure they’re looking at you.</div>
            <button className='ssm-cta' onClick={()=>popUp()}>Boost My Social Presence</button>
          </div>
        </div>
        
        {/* Second Part */}

        <div className="ssm-part2">
          <div className="spt-header">Social Media Marketing That Delivers Real Results</div>
          <div className="spt-content">
             <div className="spt-left">Social media marketing is more than just posting content — it’s the heartbeat of modern brand growth and lead generation. At <strong>Innovader</strong>, we transform your social media presence into a powerful business growth engine. <br />  <br />

             Our social media marketing services go beyond likes and shares. We create attention-grabbing content, run high-converting ad campaigns, and tell your brand’s story in a way that makes your audience stop scrolling and start engaging. <br /> <br />

             From Instagram Reels that spark conversations to LinkedIn lead generation ads that drive sales, we custom-build every campaign to match your business goals and target audience. Our approach combines creative design, persuasive copywriting, and advanced analytics to ensure every post has a clear purpose — whether it’s boosting brand awareness, generating leads, or building loyal communities.
            </div>
             <div className="spt-image">
              <img src={ssm1} alt="" />
             </div>
          </div>
          <button className='spt-cta' onClick={()=>popUp()}>Boost My Social Presence</button>
        </div>


        {/* Third Part */}
         <div className="ssm-third">
          <div className="ssmt-header">Why Choose Innovader for Social Media Marketing?</div>
          <div className="ssmt-cards">
            <div className="ssms-card">
              <div className="smc-icon"><ShareIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Social Media Campaigns That Convert</div>
              <div className="smc-desv">We blend creativity and proven marketing strategies to deliver posts and ads that actually generate clicks, leads, and sales.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><OfflinePinIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Expertise Across All Social Platforms</div>
              <div className="smc-desv">From Insta marketing and FB advertising to LinkedIn campaigns and YouTube growth, we create platform-specific strategies for maximum engagement.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><ScaleIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Transparent, Measurable Results</div>
              <div className="smc-desv">We track every like, click, and conversion with clear social media analytics reports, so you know exactly where your budget is going.</div>
            </div>
            <div className="ssms-card">
              <div className="smc-icon"><IosShareIcon sx={{ fontSize: 40 }}/></div>
              <div className="smc-name">Stay Ahead of the Competition</div>
              <div className="smc-desv">We keep your brand at the forefront with fresh, trend-driven strategies and viral content ideas.</div>
            </div>
          </div>
         </div>


         {/* Last Content */}

         <div className="ssm-wi">
           <div className="sswi-left">
                <div className="sswi-header">Social Media Marketing Services We Offer</div>
               <div className="sswi-list">
               <ul>
                 <li>📊 Social Media Strategy & Planning</li>
                 <li>✍️ Content Creation</li>
                 <li>🎯 Paid Meta Ad Campaigns</li>
                 <li>🤝 Community Management</li>
                 <li>📈 Performance Tracking & Reports</li>
               </ul>
               </div>
           </div>
           <div className="sswi-image">
            <img src={ssm} alt="" />
           </div>
         </div>

         {/* Last Div */}
    </div>
  )
}
