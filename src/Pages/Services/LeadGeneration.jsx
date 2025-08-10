import React from 'react'
import '../../public/LeadGen.css'
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import QueueIcon from '@mui/icons-material/Queue';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MuseumIcon from '@mui/icons-material/Museum';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
export default function LeadGeneration() {
  return (
    <div className='LeadGen'>
      <div className="lead-gen-top">
        <div className="lg-head-content">
        <div className="lg-header">Real Estate Lead Generation Agency That Delivers Verified Buyer Leads</div>
        <div className="lg-sub-header">Get high-intent, pre-qualified buyer inquiries—delivered straight to your inbox or CRM every single day.</div>
        <button className='lead-gen-cta'>Book A Free Consultation Today</button>
        </div>
      </div>

      {/* Body of Lead Gen */}
      <div className="lg-why-block">
        <div className="lgw-head">Our Proven Process to Generate Real Estate Leads</div>
        <div className="lgw-cards">
        <div className="lgw-card">
          <div className="lgwc-content">
            <p>
            At <strong>Innovader Technologies</strong>, we specialize in real estate lead generation-helping developers, brokers, and property consultants attract motivated buyers with data-focused campaigns and conversion‑optimized funnels. <br /> <br />
          From video lead ads and Click-to-WhatsApp campaigns to tailored landing pages and retargeting sequences, we build a buyer journey that goes from awareness to action-ensuring you get qualified, site-visiting prospects-not just clicks or traffic.
            </p>
            <button className='lgwc-cta'><WifiCallingIcon/><span>Get Your Lead Generation Proposal</span></button>
          </div>
          <div className="lgwc-image">
            <img src={realE} alt="" />
          </div>
        </div>
        </div>
      </div>


      {/* 3rd SEction why no 1 */}
      <div className="lg-no">
        <div className="lgn-header">Here’s Why We’re the <span>#1</span> Choice for Real Estate Leads</div>
        <div className="lgn-cards">
          <div className="lgn-card">
            <div className="lgnc-icon"><CheckBoxIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">High‑Intent Buyer Leads</div>
            <div className="lgnc-desc">Leads captured based on location, budget, and property type—no junk, only quality.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><QueueIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">Multi‑Channel Marketing</div>
            <div className="lgnc-desc">Google Ads, Facebook & Instagram Ads, SEO, funnel-based lead pages—all working in sync.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><QuestionAnswerIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">End-to-End Conversion Systems</div>
            <div className="lgnc-desc">Landing pages with WhatsApp forms, drip emails, CRM integration for seamless lead delivery and follow-up.</div>
          </div>
          <div className="lgn-card">
            <div className="lgnc-icon"><MuseumIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgnc-name">Local Market Precision</div>
            <div className="lgnc-desc">Campaigns built for your location—Delhi NCR, Jaipur, Mohali, and beyond—to reach the right buyers.</div>
          </div>
        </div>
        <div className="lgn-cta">
        <button className='lgwc-cta'><WifiCallingIcon/><span>Get Your Lead Generation Proposal</span></button>
        </div>
      </div>

      {/* 4rd Section */}

      <div className="lg-steps">
        <div className="lgs-header">From Planning to Performance – Here's How We Do It</div>
        <div className="lgs-cards">
          <div className="lgs-card">
            <div className="lgsc-icon"><FilterAltIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Strategy & Funnel Design <span>5 Days</span></div>
            <div className="lgsc-desc">Keyword research, custom microsite/landing page setup optimized for conversions.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><RocketLaunchIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Campaign Launch <span>1 Day</span></div>
            <div className="lgsc-desc">Instagram + Meta Ads, Google search ads, and other targeted paid efforts to start bringing traffic.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><LocalLibraryIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Learning Phase <span>5–7 Days</span></div>
            <div className="lgsc-desc">Optimize campaigns, A/B test creatives, adjust budgets for best performance.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><AccessAlarmsIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Real-Time Analysis & Scaling</div>
            <div className="lgsc-desc">Track CPL, CTR, engagement; refine campaigns while retargeting high-interest users.</div>
          </div>
          <div className="lgs-card">
            <div className="lgsc-icon"><AssuredWorkloadIcon sx={{ fontSize: 40 }}/></div>
            <div className="lgsc-name">Retargeting & Follow-Up <span>Ongoing</span></div>
            <div className="lgsc-desc">WhatsApp automation, email drip sequences, lead nurturing to move leads toward site visits and conversions.</div>
          </div>
        </div>
      </div>


    </div>
  )
}
