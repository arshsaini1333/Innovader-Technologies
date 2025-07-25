import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ThreeDCarousel.css';
import wt1 from '../assets/wt1.png'
import wt2 from '../assets/wt2.jpg'
import wt3 from '../assets/wt3.png'
import wt4 from '../assets/wt4.jpg'
import wt5 from '../assets/wt5.jpg'
import wt6 from '../assets/wt6.webp'
const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center card active

  // const cards = [
  //   {
  //     id: 1,
  //     title: "Explore Nature",
  //     content: "Discover breathtaking landscapes and wildlife adventures.",
  //     color: "green",
  //     image: "🌲"
  //   },
  //   {
  //     id: 2,
  //     title: "Urban Adventures",
  //     content: "Experience the vibrant energy of city life and culture.",
  //     color: "blue",
  //     image: "🏙️"
  //   },
  //   {
  //     id: 3,
  //     title: "Ocean Dreams",
  //     content: "Dive into crystal clear waters and tropical paradises.",
  //     color: "cyan",
  //     image: "🌊"
  //   },
  //   {
  //     id: 4,
  //     title: "Explore Nature",
  //     content: "Discover breathtaking landscapes and wildlife adventures.",
  //     color: "green",
  //     image: "🌲"
  //   },
  //   {
  //     id: 5,
  //     title: "Explore Nature",
  //     content: "Discover breathtaking landscapes and wildlife adventures.",
  //     color: "green",
  //     image: "🌲"
  //   },
  //   {
  //     id: 6,
  //     title: "Explore Nature",
  //     content: "Discover breathtaking landscapes and wildlife adventures.",
  //     color: "green",
  //     image: "🌲"
  //   },
  // ];

  const cards = [
    {
      id:1,
      title: "Beautiful Website Designs",
      description:
        "Crafting visually stunning and user-friendly websites tailored to your brand that leave a lasting impression.",
      image: wt1,
    },
    {
      id:2,
      title: "Real Estate Marketing & Broker Solutions",
      description:
        "Helping brokers and real estate professionals connect with the right buyers through targeted campaigns and digital strategy.",
      image: wt2,
    },
    {
      id:3,
      title: "Content Creation",
      description:
        "From engaging blogs to social media posts and videos, we create content that speaks directly to your audience.",
      image: wt3
    },
    {
      id:4,
      title: "Property Consultant Services",
      description:
        "Providing expert consulting for property investment, development, and market insights to help clients make informed decisions.",
      image: wt4
    },
    {
      id:5,
      title: "Marketing & Sales Automation",
      description:
        "Automate your sales funnel, lead nurturing, and marketing campaigns to save time and boost conversions.",
      image: wt5
    },
    {
      id:6,
      title: "Social Media Marketing",
      description:
        "Maximize your brand’s presence across platforms like Facebook, Instagram, and LinkedIn with strategic social media campaigns.",
      image: wt6
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(cards.length - 1)) return 'right';
    if (diff === -1 || diff === cards.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="carousel-container">
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
                <div className={`card-inner `}>
                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-emoji">
                      <img src={card.image} alt="" />
                    </div>
                    <h3 className="card-title">
                      {card.title}
                    </h3>
                    <p className="card-description">
                      {card.description}
                    </p>
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
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="nav-button nav-right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="indicators">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;