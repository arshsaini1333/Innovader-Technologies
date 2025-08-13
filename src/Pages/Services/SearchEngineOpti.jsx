import React from 'react'
import '../../public/SocialMedia.css'
import ssm1 from '../../assets/seos.png'


import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ArticleIcon from "@mui/icons-material/Article";
import LinkIcon from "@mui/icons-material/Link";
import PlaceIcon from "@mui/icons-material/Place";
import InsightsIcon from "@mui/icons-material/Insights";

export default function SearchEngineOpti({popUp}) {


  
  return (
    <div className='Search-e-o'>
       {/* Part 1 */}
       <div className="socialmiedia-top">
          <div className="ssm-content">
            <div className="ssm-header">Climb Google Rankings OR Stay There Choice is yours.</div>
            <div className="ssm-sub-header">Your customers are searching for you — we make sure they find you first.</div>
            <button className='ssm-cta' onClick={()=>popUp()}>Get Found, Get Leads</button>
          </div>
        </div>


         {/* Part 2 */}
        <div className="ssm-part2">
          <div className="spt-header">Rank Higher. Get Found. Grow Faster.</div>
          <div className="spt-content">
             <div className="spt-left"><p>
             Search Engine Optimization (SEO) is the key to making your website rank higher on Google, increase organic traffic, and attract qualified leads. At Innovader, we provide result-driven SEO services designed to improve your visibility, boost brand credibility, and grow your business. <br /> <br />

            Our SEO experts analyze your website, research high-traffic keywords, and create a custom SEO strategy that includes on-page SEO, technical SEO, and content optimization. We ensure your site is fast, mobile-friendly, and optimized for both search engines and users. Whether you need local SEO to dominate your city or national SEO to reach customers across the country, we focus on strategies that deliver long-term results. <br /> <br />

           With <strong>Innovader</strong>, you get more than just rankings — you get higher click-through rates, increased leads, and measurable ROI. Let us make your website the top choice for customers searching online.

             </p>

             <button className='spt-cta' onClick={()=>popUp()}>Start My SEO Growth Journey</button>
            </div>
             <div className="spt-image">
              <img src={ssm1} alt="" />
             </div>
          </div>
          
        </div>


        {/* LAst PArt */}

        <div className="seos-container">
          <div className="seos-header">What We Offer in Our SEO Services</div>
         <div className="seos-grid">

        <div className="seos-card">
          <div className="seos-icon"><ManageSearchIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">Keyword Research & Strategy</h3>
          <p className="seos-desc">
            We identify high-volume, low-competition keywords your audience searches, so you rank for the right terms.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><TuneIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">On-Page SEO Optimization</h3>
          <p className="seos-desc">
            We optimize meta titles, descriptions, headings, images, and internal links to improve rankings and UX.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><SettingsSuggestIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">Technical SEO</h3>
          <p className="seos-desc">
            We fix site speed, mobile responsiveness, indexing errors, and crawl issues to meet Google’s requirements.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><ArticleIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">Content Creation & Optimization</h3>
          <p className="seos-desc">
            We create SEO-friendly content that engages readers, answers their questions, and ranks higher.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><LinkIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">Link Building Services</h3>
          <p className="seos-desc">
            We build high-quality backlinks from reputable websites to grow domain authority and rankings.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><PlaceIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">Local SEO Services</h3>
          <p className="seos-desc">
            We optimize your Google Business Profile and local listings to boost visibility in local search.
          </p>
        </div>

        <div className="seos-card">
          <div className="seos-icon"><InsightsIcon sx={{ fontSize: 40 }} /></div>
          <h3 className="seos-title">SEO Reporting & Analytics</h3>
          <p className="seos-desc">
            We provide detailed reports tracking rankings, organic traffic, and ROI for measurable growth.
          </p>
        </div>

      </div>
    </div>
      
    </div>
  )
}
