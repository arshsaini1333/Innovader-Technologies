import React from 'react';
import { Link } from 'react-router';
import '../public/PhotoLayout.css';

export default function WantToSee(){
  return (
    <div className="photo-layout">
      <div className="left-section">
        <h2>Want To See Our Work?</h2>
        <p>
        We don’t just run campaigns. We generate real, high-quality leads that convert into sales. Backed by deep industry insights and digital innovation, we’ve helped real estate brands stand out in a crowded market – and close deals faster than ever.
        </p>
        <Link to='/our-work' className='ls-link'>Our Projects</Link>
      </div>
      <div className="card-section">
        <div className="card">
          <button className="card-header">Marketing</button>
          <ul>
          <li>Marketing & Sales Automation</li>
          <li>Social Media Marketing</li>
          <li>Lead Generation</li>
          <li>Meta Ads</li>
          <li>Google Ads</li>
          </ul>
        </div>
        <div className="card">
          <button className="card-header">Services</button>
          <ul>
          <li>SEO</li>
            <li>PPC</li>
           
            <li>Website Designing</li>
            <li>Content Creation</li>
            <li>Video Ad Shoot</li>
            
          </ul>
        </div>
      </div>
      <div className="wave"></div>
    </div>
  );
};

