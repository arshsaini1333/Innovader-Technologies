import React from 'react';
import { Link } from 'react-router';
import '../public/PhotoLayout.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function WantToSee(){

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,     // Animation only happens once when scrolled into view
    });
  }, []);
  return (
    <div className="photo-layout">
      <div className="left-section" data-aos="slide-right">
        <h2>Want To See Our Work?</h2>
        <p>
        We don’t just run campaigns. We generate real, high-quality leads that convert into sales. Backed by deep industry insights and digital innovation, we’ve helped real estate brands stand out in a crowded market – and close deals faster than ever.
        </p>
        <Link to='/our-work' className='ls-link'>Our Projects</Link>
      </div>
      <div className="card-section" data-aos="slide-left">
        <div className="card">
          <button className="card-header">Industies We Serve</button>
          <ul>
          <li>Real Estate Builders</li>
          <li>Real Estate Brokers</li>
          <li>Real Estate Agents</li>
          <li>Property Consultants</li>
          </ul>
        </div>
        <div className="card">
          <button className="card-header">How We Work</button>
          <ul>
          
            <li>Lead Generation Process</li>
           
            <li>As Funnel Strategy</li>
            <li>CRM & Follow-up System</li>
            <li>Reporting & Results</li>
            
          </ul>
        </div>
      </div>
      {/* <div className="wave"></div> */}
    </div>
  );
};

