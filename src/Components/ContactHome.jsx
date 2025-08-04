import React from 'react';
import '../public/ContactHome.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ContactHome(){
  return (
    <div className="contact-wrapper-home">
      <div className="contact-left">
       <div className="cl-head">Get Ready to Elevate Your Business! 🚀</div>
       <div className="cl-sub-head">Partner with our marketing experts to refine your goals. We’ll enhance your brand’s visibility, generate quality leads, and drive sales with powerful digital strategies. Let’s grow together!</div>

       <div className="cl-contacts">
        <p><CallIcon/> +91 8447149389</p>
        <p><EmailIcon/> Hr@innovader.in</p>
        <p><LocationOnIcon/> E-93/1, SOUTH, near SUMAN CHOWK <br />
Block D, Chhatarpur Extension<br /> Chhatarpur,
New Delhi (110074)</p>
       </div>
      </div>

      <div className="contact-form-card">
      <form className="contact-form-home">
      <h2 className="contact-heading">
        Fill the Form – Let the Results Speak
        </h2>
        <p className="contact-subtext">
        Get real leads, ready to talk and convert
        </p>
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
            <option value="brand-stat">Brand Strategy</option>
            <option value="smm">Social Media Marketing</option>
            <option value="tlg">Targeted Lead Generation</option>
          </select>
          <textarea placeholder="Leave a message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

