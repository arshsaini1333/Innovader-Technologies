import React, { useEffect, useRef, useState } from "react";
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c6.png'
import c4 from '../assets/c7.png'
import c5 from '../assets/c8.png'
import c6 from '../assets/c15.png'
import c7 from '../assets/c16.png'
import c8 from '../assets/c17.webp'
import c9 from '../assets/c19.webp'
import c10 from '../assets/c20.webp'
import c11 from '../assets/c21.webp'
import c12 from '../assets/c22.webp'
// import c12 from '../assets/c24.webp'
import 'aos/dist/aos.css';
export default function OurClients(){
  const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11,c12, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12,  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11,c12, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.animationPlayState = isHovered ? "paused" : "running";
    }
  }, [isHovered]);

  return (
    <div className="slider-wrapper"  >
      <div className="service-headings">
        <div className="sh-sub">Loved & Trusted By</div>
        {/* <div className="sh-super">We partner with businesses of all sizes to fuel their digital growth</div> */}
      </div>
      <div
        className="slider-track"
        ref={sliderRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
       
      >
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


