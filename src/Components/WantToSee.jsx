import React from 'react';
// import CarouselSection from './CarouselSection';
import ThreeDCarousel from './Portfolio';

import '../public/ThreeDCarousel.css'
export default function WantToSee(){
       return(
        <div className='WantToSee'>
          <div className="service-headings">
            <div className="sh-sub">Real Results Real Proof</div>
            <div className="sh-super">Take a look inside our Meta Ads Manager — because performance speaks louder than promises.</div>
          </div>
          
          <ThreeDCarousel/>
        </div>
       )
};

