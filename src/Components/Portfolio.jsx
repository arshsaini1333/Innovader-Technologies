import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../public/ThreeDCarousel.css';
import wt1 from '../assets/wt1.png';
import wt2 from '../assets/wt2.jpg';
import wt3 from '../assets/wt3.png';
import wt4 from '../assets/wt4.jpg';
import wt5 from '../assets/wt5.jpg';
import wt6 from '../assets/wt6.webp';

const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const intervalRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Beautiful Website Designs",
      description:
        "Crafting visually stunning and user-friendly websites tailored to your brand that leave a lasting impression.",
      image: wt1,
    },
    {
      id: 2,
      title: "Real Estate Marketing",
      description:
        "Helping brokers and real estate professionals connect with the right buyers through targeted campaigns.",
      image: wt2,
    },
    {
      id: 3,
      title: "Content Creation",
      description:
        "From engaging blogs to social media posts and videos, we create content that speaks directly to your audience.",
      image: wt3,
    },
    {
      id: 4,
      title: "Property Consultant Services",
      description:
        "Providing expert consulting for property investment, development, and market insights to help clients make informed decisions.",
      image: wt4,
    },
    {
      id: 5,
      title: "Marketing & Sales Automation",
      description:
        "Automate your sales funnel, lead nurturing, and marketing campaigns to save time and boost conversions.",
      image: wt5,
    },
    {
      id: 6,
      title: "Social Media Marketing",
      description:
        "Maximize your brand's presence across platforms like Facebook, Instagram, and LinkedIn with strategic social media campaigns.",
      image: wt6,
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 2000); // 2 seconds
    }

    // Cleanup function to clear interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay, cards.length]);

  // Pause autoplay when user interacts
  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume autoplay after user interaction
  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };

  const nextSlide = () => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    // Resume autoplay after 3 seconds of inactivity
    setTimeout(resumeAutoplay, 3000);
  };

  const prevSlide = () => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    // Resume autoplay after 3 seconds of inactivity
    setTimeout(resumeAutoplay, 3000);
  };

  const goToSlide = (index) => {
    pauseAutoplay();
    setCurrentIndex(index);
    // Resume autoplay after 3 seconds of inactivity
    setTimeout(resumeAutoplay, 3000);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(cards.length - 1)) return 'right';
    if (diff === -1 || diff === cards.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div 
      className="carousel-container"
      
    >
      <div className="carousel-wrapper">
        {/* Carousel Container */}
        <div className="carousel-stage">
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={card.id}
                className={`carousel-card ${position}`}
              >
                <div className="card-inner">
                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-emoji">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="card-text">
                      <h2 className="card-title">
                        {card.title}
                      </h2>
                      <p className="card-description">
                        {card.description}
                      </p>
                      <button className="project-button">
                        Let's Discuss Your Project
                      </button>
                    </div>
                  </div>
                  {/* Shine Effect */}
                  <div className={`card-shine ${position === 'center' ? 'active' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="nav-button nav-left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="nav-button nav-right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        {/* <div className="indicators">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Autoplay Toggle Button */}

      </div>
    </div>
  );
};

export default ThreeDCarousel;