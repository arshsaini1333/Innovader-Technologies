import React from 'react';
// import CarouselSection from './CarouselSection';
import ThreeDCarousel from './Portfolio';
import CallIcon from '@mui/icons-material/Call';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import '../public/ThreeDCarousel.css'
export default function WantToSee(){
       return(
        <div className='WantToSee'>
          <div className="service-headings">
            <div className="sh-sub">Real Results Real Proof</div>
            <div className="sh-super">Take a look inside our Meta Ads Manager — because performance speaks louder than promises.</div>
          </div>
          {/* Slider */}
          {/* <CarouselSection/> */}
          <ThreeDCarousel/>

          <div className="why-next">
            <div className="wn-cards">
              <div className="wn-card wn1">
                <div className="wnc">
                  <ShowChartIcon sx={{ fontSize: 50 }}/>
                </div>
                <div className="wn-content">High Intent Leads</div>
              </div>
              <div className="wn-card wn2">
              <div className="wnc">
                <TipsAndUpdatesIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">Smart Targeting</div>
              </div>
              <div className="wn-card wn3">
              <div className="wnc">
                <FitScreenIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">Scalable Ad Campaigns</div>
              </div>
              <div className="wn-card wn4">
              <div className="wnc">
                <TrendingUpIcon sx={{ fontSize: 50 }}/>
              </div>
                <div className="wn-content">ROI you can Measure</div>
              </div>
            </div>
            <div className="wn-btn">
              <p>Want results like these?</p>
              <button><span>Lets Talk</span><CallIcon/></button>
            </div>
          </div>

        </div>
       )
};

