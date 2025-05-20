import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c6.png'
import c4 from '../assets/c7.png'
import c5 from '../assets/c8.png'
import c6 from '../assets/c15.png'
import c7 from '../assets/c16.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function OurClients(){
  const images = [c1, c2, c3, c4, c5, c6, c7,c1, c2, c3, c4, c5, c6, c7];
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Pause animation on hover
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration in ms
  //     once: false,     // Animation only happens once when scrolled into view
  //   });
  // }, []);
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.animationPlayState = isHovered ? "paused" : "running";
    }
  }, [isHovered]);

  return (
    <div className="slider-wrapper"  >
      <h2 className="our-c-h">Our Clients</h2>
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


