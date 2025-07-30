import React from 'react';
import '../public/ContactHome.css'

export default function ContactHome(){
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <p className="contact-label">REACH OUT</p>
        <h2 className="contact-heading">
        Fill the Form – Let the Results Speak
        </h2>
        <p className="contact-subtext">
        Get real leads, ready to talk and convert
        </p>
      </div>

      <div className="contact-form-card">
        <h3 className="form-title">
          Speak with our <strong className="bold-black">Digital</strong>{' '}
          <strong className="bold-gradient">Professionals</strong>
        </h3>
        <form className="contact-form">
          <input type="text" placeholder="Full Name *" required />
          <div className="form-row">
            <input type="email" placeholder="Enter Your Email *" required />
            <input type="tel" placeholder="Enter phone number *" required />
          </div>
          <select required>
            <option value="">Select Service looking for</option>
            <option value="web">Website Design</option>
            <option value="seo">SEO</option>
            <option value="ads">Digital Ads</option>
          </select>
          <textarea placeholder="Leave a message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

