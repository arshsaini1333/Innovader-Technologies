import React from 'react'
import HistoryIcon from '@mui/icons-material/History';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CallMadeIcon from '@mui/icons-material/CallMade';
function AboutTop() {
  return (
    <div className='abt-container'>
      <div className="abt-head">
          <div className="abth-content">
          <div className="head-super">
             Innovader Technologies
          </div>  
          <div className="head-sub">
            Delhi’s leading digital powerhouse built exclusively for the real estate industry.
          </div>
          </div>
      </div>
      {/* <div className="abtimage">
        <img src={img} alt="" />
      </div> */}
      <div className="abt-subhead">
        We don’t just run campaigns.
        We generate real, high-quality leads that convert into sales.
      </div>
      <div className="abt-content">At Innovader, we understand the real estate market inside out. Whether you’re a builder, broker, or developer – we know what your buyers are searching for and how to bring them to your doorstep. From high-performance ad campaigns to smart digital strategies, our focus is clear: results that grow your business.

      Backed by deep industry insights and digital innovation, we’ve helped real estate brands stand out in a crowded market – and close deals faster than ever.
      </div>

      <div className="abt-btn">
        <button><CallMadeIcon sx={{ fontSize: 30}}/>Unlock Your Digital Edge </button>
      </div>

      <div className="abt-cards">
        <div className="abt-card">
          <div className="abtc-logo"><HistoryIcon sx={{ fontSize: 50}}/></div>
          <div className="abtc-name">Our Story</div>
          <div className="abtc-desc">We started Innovader Technology with a mission – to solve the biggest problem in real estate marketing: poor-quality leads. With deep knowledge of buyer psychology, digital trends, and real estate sales funnels, we help builders, brokers, and developers reach serious buyers online. What began as a small idea has now helped 50+ real estate brands grow.
</div>
        </div>
        <div className="abt-card odd">
          <div className="abtc-logo"><CurrencyExchangeIcon sx={{ fontSize: 50}}/></div>
          <div className="abtc-name">Our Mission</div>
          <div className="abtc-desc">
To deliver high-quality, conversion-focused leads for the real estate industry through performance-driven ad campaigns. We blend creativity, data, and market research to craft campaigns that don’t just get clicks — they bring real site visits and sales conversions.
</div>
        </div>
        <div className="abt-card">
          <div className="abtc-logo"><RemoveRedEyeIcon sx={{ fontSize: 50}}/></div>
          <div className="abtc-name">Our Vission</div>
          <div className="abtc-desc">To become India’s most trusted digital growth partner for real estate. We aim to change the way property is marketed online — with smart targeting, measurable ROI, and campaigns that actually work.</div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutTop
