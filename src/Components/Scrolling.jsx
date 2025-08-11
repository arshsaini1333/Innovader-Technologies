import React, { useEffect, useRef, useState } from 'react';

// Imoprting Images 
import myraP from '../assets/work/myra.png'
import myraV from '../assets/work/myra.mp4'
import roofingP from '../assets/work/roofing.png'
import roofingV from '../assets/work/roofing.mp4'
import shapoorjiP from '../assets/work/shapoorji.png'
import shapoorjiV from '../assets/work/shapoorji.mp4'
import yugenP from '../assets/work/yugen.png'
import yugenV from '../assets/work/yugen.mp4'

import VideoHover from './VideoHover'
import '../public/Scroll.css';

const F1HorizontalScroll = () => {

  // Vdo Hover start

  const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handleMouseEnter = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => console.log("Autoplay blocked:", error));
          setIsPlaying(true);
        }
      };
    
      const handleMouseLeave = () => {
        if (videoRef.current) {
          videoRef.current.pause(); // Pause without resetting
          setIsPlaying(false);
        }
      };

  // VDO hover End
  const racesRef = useRef(null);
  const racesWrapperRef = useRef(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger from CDN
    const loadGSAP = () => {
      return new Promise((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          resolve();
          return;
        }

        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        gsapScript.onload = () => {
          const scrollTriggerScript = document.createElement('script');
          scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          scrollTriggerScript.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger);
            resolve();
          };
          document.head.appendChild(scrollTriggerScript);
        };
        document.head.appendChild(gsapScript);
      });
    };

    const initializeAnimation = () => {
      const races = racesRef.current;
      const racesWrapper = racesWrapperRef.current;

      if (!races || !racesWrapper) return;

      console.log(races.offsetWidth);

      function getScrollAmount() {
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
      }

      const tween = window.gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      window.ScrollTrigger.create({
        trigger: racesWrapper,
        start: "top 10%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false
      });
    };

    // Load Google Font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    loadGSAP().then(initializeAnimation);

    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="f1-container">
      <div className="scroll-head">A Glimpse into Our Web Design Creations</div>
      <div className="sub-head">Discover how we turn concepts into high-performing, visually stunning websites.</div>
      <div ref={racesWrapperRef} className="racesWrapper">
        <div ref={racesRef} className="races">
                    <div className="projectBlock">
                        <VideoHover videoSrc={roofingV} poster={roofingP} cat="Real Estate" plat="React, Tailwind CSS"/>
                    </div>
                    <div className="projectBlock">
                        <VideoHover videoSrc={yugenV} poster={yugenP} cat="Real Estate" plat="HTML, JS, CSS" />
                    </div>
                    <div className="projectBlock">
                        <VideoHover videoSrc={shapoorjiV} poster={shapoorjiP} cat="Real Estate" plat="HTML, CSS, JS"/>
                    </div>
                    <div className="projectBlock">
                        <VideoHover videoSrc={myraV} poster={myraP} cat="Real Estate" plat="Wordpress"/>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default F1HorizontalScroll;