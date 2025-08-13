import React from 'react'
import '../../public/WebsiteDesign.css'
import '../../public/LeadGen.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import QueueIcon from '@mui/icons-material/Queue';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MuseumIcon from '@mui/icons-material/Museum';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

import googlead from '../../assets/googlead2.png'
import realE from '../../assets/googleads.png'
export default function GoogleAds({popUp}) {
  return (
    <div className='GoogleADS'>
      <div className="lead-gen-top">
        <div className="lg-head-content">
        <div className="lg-header">Instant Visibility Measurable Growth
</div>
        <div className="lg-sub-header">Turn Searchers into Buyers with Targeted Google Advertising
</div>
        <button onClick={()=>popUp()} className='lead-gen-cta'>Stop Wasting Ad Spend, Let’s Optimize
</button>
        </div>
      </div>

      {/* Body of Lead Gen */}
      <div className="lg-why-block">
        <div className="lgw-head">Google Ads Campaigns That Deliver Real ROI</div>
        <div className="lgw-cards">
        <div className="lgw-card">
          <div className="lgwc-content">
            <p>
            Google Ads is one of the fastest and most effective ways to reach customers who are actively searching for your products or services. At Innovader, we create and manage high-converting Google Ads campaigns that put your brand at the top of search results — right when potential customers are ready to buy. <br /> <br />

            Our Google Ads management services cover everything from keyword research and ad copywriting to campaign setup, bid optimization, and conversion tracking. We focus on maximizing your ad spend by targeting the right audience, using the right keywords, and optimizing for the best possible cost per lead. <br /> <br />

            Whether you need Search Ads, Display Ads, Shopping Ads, or YouTube Ads, we’ll tailor a strategy that delivers instant traffic, more leads, and measurable growth.

            </p>
            <button onClick={()=>popUp()} className='lgwc-cta'><span>Run My Google Ads Now</span></button>
          </div>
          <div className="lgwc-image">
            <img src={realE} alt="" />
          </div>
        </div>
        </div>
      </div>


      {/* 3rd SEction why no 1 */}
      <div className="lg-no">
        <div className="lgn-header" style={{marginTop: 25}}>Why Choose Innovader for Google Ads Management?</div>
        <div className="lgn-cards">
          <div className="lgn-card">
            <div className="lgnc-icon"><CheckBoxIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name"> Data-Driven Campaign Strategies</div>
            <div className="lgnc-desc">We use in-depth keyword research and audience targeting to ensure your ads are shown to people who are ready to take action.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><QueueIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name"> High-Converting Ad Copy & Creatives</div>
            <div className="lgnc-desc">Our Google Ads experts write persuasive ad copy and design compelling visuals that attract clicks and drive conversions.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><QuestionAnswerIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">Continuous Optimization for Maximum ROI</div>
            <div className="lgnc-desc">We monitor your campaigns daily, optimizing bids, keywords, and targeting to get the best results for your budget.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><MuseumIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">Transparent Reporting You Can Trust</div>
            <div className="lgnc-desc">We provide detailed Google Ads performance reports so you see exactly how your money is being spent and the results it’s delivering.</div>
          </div>
        </div>
        <div className="lgn-cta">
        <button onClick={()=>popUp()} className='lgwc-cta'>Get My Free Google Ads Audit
</button>
        </div>
      </div>

      {/* 4rd Section */}

      <div className="lg-steps">
        <div className="lgs-header">Our 5-Step Google Ads Process</div>
        <div className="lgs-cards">
          <div className="lgs-card">
            <div className="lgsc-icon"><SaveAsIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Plan Your Campaign</div>
            <div className="lgsc-desc">We understand your goals and create a custom Google Ads strategy.
</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><ThumbsUpDownIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Pick the Best Keywords</div>
            <div className="lgsc-desc">We find search terms your ideal customers use.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><AdsClickIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Create Ads That Click</div>
            <div className="lgsc-desc">We design and write ads that grab attention and drive action.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><TrackChangesIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Target & Optimize</div>
            <div className="lgsc-desc">We show your ads to the right audience and keep improving them for better results.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><ArtTrackIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Track & Report</div>
            <div className="lgsc-desc">You get easy-to-read reports showing exactly what your ads achieved.</div>
          </div>
        </div>
        <button style={{borderRadius:16}} onClick={()=>popUp()} className='lead-gen-cta'>Get My Free Google Ads Audit</button>

      </div>

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
            <img src={googlead} alt="" />
          </div>
        </div>


    </div>
  )
}

