import React from 'react'
import '../../public/BrandStratergy.css'
import bst1 from '../../assets/bst1.png'
import bst2 from '../../assets/bst2.png'
import bst3 from '../../assets/bst3.png'
import bst4 from '../../assets/bst4.png'
import bst5 from '../../assets/bst5.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PinchIcon from '@mui/icons-material/Pinch';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
export default function BrandStratergy({popUp}) {
  return (
    <div className='Brand'>
      <div className="brand-top">
       <div className="brand-top-header">
       <div className="brand-top-head"> Brand Strategy That Sells Without Saying a Word</div>
        <div className="brand-top-sub">In a world full of listings, only a few feel like “the one” — that’s the power of branding.</div>
        <button onClick={()=>popUp()} className='brand-cta'>Book A Free Consultation</button>
       </div>
      </div>

      {/* 2nd Block */}

        <div className="brand-stat-two">
          
          <div className="bst-heading">What Makes Our Brand Strategy Different?</div>
          <div className="bst-sub">At Innovader, we turn your project into a desirable lifestyle, not just another property. We don’t just make noise — we build brands that speak value, trust, and urgency.</div>
        </div>

        <div className="bst-cards">
          <div className="bst-card">
            <div className="bstc-contetn">
              <div className="bstc-no">1</div>
              <div className="bstc-name">We Make You Look Bigger Than You Are</div>
              <div className="bstc-desc">Small team? New launch? No problem. Our branding makes you look like a category leader, even before your first site visit.</div>
            </div>
            <div className="bstc-image">
              <img src={bst1} alt="" />
            </div>
          </div>
          <div className="bst-card">
            <div className="bstc-contetn">
            <div className="bstc-no">2</div>
              <div className="bstc-name">We Sell Aspirations, Not Just Apartments</div>
              <div className="bstc-desc">Anyone can list square footage — we sell the story. Whether it’s a luxury villa or an affordable 2BHK, we craft narratives that resonate with your ideal buyer.</div>
            </div>
            <div className="bstc-image">
            <img src={bst2} alt="" />

            </div>
          </div>
          <div className="bst-card">
            <div className="bstc-contetn">
            <div className="bstc-no">3</div>
              <div className="bstc-name">We Think Buyer-First</div>
              <div className="bstc-desc">We position your brand the way buyers see it — modern, clean, reliable. From logo to landing page, everything speaks their language.</div>
            </div>
            <div className="bstc-image">
            <img src={bst3} alt="" />

            </div>
          </div>
          <div className="bst-card">
            <div className="bstc-contetn">
            <div className="bstc-no">4</div>
              <div className="bstc-name">Your Project = A Scroll-Stopping Experience</div>
              <div className="bstc-desc">From stunning Reels to branded brochures, we ensure your campaign looks so good… buyers pause, click, and act.
</div>
            </div>
            <div className="bstc-image">
            <img src={bst4} alt="" />

            </div>
          </div>
          <div className="bst-card">
            <div className="bstc-contetn">
            <div className="bstc-no">5</div>
              <div className="bstc-name">Everything Feels Premium (Even If It’s Budget)</div>
              <div className="bstc-desc">Branding isn’t about price; it’s about perception. We help you sell smarter with classy, consistent creative work.</div>
            </div>
            <div className="bstc-image">
            <img src={bst5} alt="" />
            </div>
          </div>
        </div>


        {/* 3rd Section */}

      <div className="bst-sec-three">
        <div className="bstt-header">
        The Real Impact
        </div>
        

            <div className="bstt-cards">
              <div className="bstt-card">
                  <div className="bstc-icon"><TrendingUpIcon sx={{fontSize: 40}}/></div>
                  <div className="bstc-desc">
            3x engagement on ads</div>
              </div>
              <div className="bstt-card">
                  <div className="bstc-icon"><PinchIcon sx={{fontSize: 40}}/></div>
                  <div className="bstc-desc">Better recall in competitive markets</div>
              </div>
              <div className="bstt-card">
                  <div className="bstc-icon"><JoinLeftIcon sx={{fontSize: 40}}/></div>
                  <div className="bstc-desc">More trust = More site visits = More conversions
</div>
              </div>
            </div>




        <div className="bstt-footer">At Innovader, we don’t chase trends. We create real estate brands that feel like the future.</div>
      </div>

    </div>
  )
}
