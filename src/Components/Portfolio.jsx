import React, { useState, useEffect, useRef } from 'react';
import '../public/ThreeDCarousel.css';

// new images
import w1 from '../assets/work/w1.png'
import w2 from '../assets/work/w2.png'
import w3 from '../assets/work/w3.png'
import w4 from '../assets/work/w4.png'
import w5 from '../assets/work/w5.png'
import w6 from '../assets/work/w6.png'
import w7 from '../assets/work/w7.png'
import w8 from '../assets/work/w8.png'
import w9 from '../assets/work/w9.png'
import w10 from '../assets/work/w10.png'
import w11 from '../assets/work/w1.png'

const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11];

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds per slide

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(images.length - 1)) return 'right';
    if (diff === -1 || diff === images.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-stage">
          {images.map((img, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={index}
                className={`carousel-card ${position}`}
              >
                <div className="card-inner">
                  <div className="card-emoji">
                    <img src={img} alt="portfolio" />
                  </div>
                  <div className={`card-shine ${position === 'center' ? 'active' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
