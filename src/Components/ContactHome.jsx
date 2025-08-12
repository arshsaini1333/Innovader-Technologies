import React from 'react';
import '../public/ContactHome.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useRef } from 'react';
export default function ContactHome(){

  const scriptURL = 'https://script.google.com/macros/s/AKfycby1xh4MAihX9iGdnxXKewSv4Sb770HwSTNwPO7htKyQDkE88JZuNSBykFEvwkJcHX6_/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);
 const navigate = useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);
    postData.append('service', formData.service);

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        setMessage("Form submitted successfully!");
        setSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        navigate('/thankyou')
      })
      .catch(() => {
        setMessage("Error submitting the form. Try again.");
        setSubmitting(false);
      });
  };

  return (
    <div className="contact-wrapper-home">
      <div className="contact-left">
       <div className="cl-head">Get Ready to Elevate Your Business! 🚀</div>
       <div className="cl-sub-head">Partner with our marketing experts to refine your goals. We’ll enhance your brand’s visibility, generate quality leads, and drive sales with powerful digital strategies. Let’s grow together!</div>

       <div className="cl-contacts">
        <p><CallIcon/> +91 8447149389</p>
        <p><EmailIcon/> Hr@innovader.in</p>
        {/* <p><LocationOnIcon/> E-93/1, SOUTH, near SUMAN CHOWK <br />
Block D, Chhatarpur Extension<br /> Chhatarpur,
New Delhi (110074)</p> */}
       </div>
      </div>

      <div className="contact-form-card">
      <form className="contact-form-home" onSubmit={handleSubmit}>
      <h2 className="contact-heading">
        Fill the Form – Let the Results Speak
        </h2>
        <p className="contact-subtext">
        Get real leads, ready to talk and convert
        </p>
          <input type="text" placeholder="Full Name *" name='name' value={formData.name} onChange={handleChange} required />
          <div className="form-row unq-row">
            <input type="email" placeholder="Enter Your Email *" name='email' value={formData.email} onChange={handleChange} required />
            <input type="tel" placeholder="Enter phone number *" name='phone' value={formData.phone} onChange={handleChange} required />
          </div>
          <select  name="service"
  value={formData.service}
  onChange={handleChange}>
            <option value="">Select Service looking for</option>
            <option value="web-design">Website Design</option>
            <option value="seo">SEO</option>
            <option value="digital-ads">Digital Ads</option>
            <option value="brand-strategy">Brand Strategy</option>
            <option value="socail-media-marketing">Social Media Marketing</option>
            <option value="targeted-lead-generation">Targeted Lead Generation</option>
          </select>
          <textarea name='message' value={formData.message} onChange={handleChange} placeholder="Leave a message" rows="4"></textarea>
          <button type="submit">{submitting ? "Submitting..." : "Submit Enquiry"}</button>
        </form>
      </div>
    </div>
  );
};

