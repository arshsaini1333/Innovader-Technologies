import React from "react";
import { Carousel } from "react-bootstrap";
import "../public/CarouselSection.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Important
import wt1 from '../assets/wt1.png'
import wt2 from '../assets/wt2.jpg'
import wt3 from '../assets/wt3.png'
import wt4 from '../assets/wt4.jpg'
import wt5 from '../assets/wt5.jpg'
import wt6 from '../assets/wt6.webp'
const slides = [
    {
      title: "Beautiful Website Designs",
      description:
        "Crafting visually stunning and user-friendly websites tailored to your brand that leave a lasting impression.",
      image: wt1,
    },
    {
      title: "Real Estate Marketing & Broker Solutions",
      description:
        "Helping brokers and real estate professionals connect with the right buyers through targeted campaigns and digital strategy.",
      image: wt2,
    },
    {
      title: "Content Creation",
      description:
        "From engaging blogs to social media posts and videos, we create content that speaks directly to your audience.",
      image: wt3
    },
    {
      title: "Property Consultant Services",
      description:
        "Providing expert consulting for property investment, development, and market insights to help clients make informed decisions.",
      image: wt4
    },
    {
      title: "Marketing & Sales Automation",
      description:
        "Automate your sales funnel, lead nurturing, and marketing campaigns to save time and boost conversions.",
      image: wt5
    },
    {
      title: "Social Media Marketing",
      description:
        "Maximize your brand’s presence across platforms like Facebook, Instagram, and LinkedIn with strategic social media campaigns.",
      image: wt6
    },
  ];
  
const CarouselSection = () => {
  return (
    <div className="carousel-wrapper container">
      <Carousel className="carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
          <div className="carousel-slide">
            
          <div className="slide-image">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button>Let's Discuss Your Project</button>
          </div>
        </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
