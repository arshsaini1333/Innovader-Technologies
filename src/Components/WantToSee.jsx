import React from 'react';
import CarouselSection from './CarouselSection';
export default function WantToSee(){
       return(
        <div className='WantToSee'>
          <div className="service-headings">
            <div className="sh-sub">See What We’ve Built</div>
            <div className="sh-super">We don’t just run campaigns. We generate real, high-quality leads that convert into sales.</div>
          </div>
          {/* Slider */}
          <CarouselSection/>

        </div>
       )
};

