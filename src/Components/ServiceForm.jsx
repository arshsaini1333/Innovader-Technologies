import React from 'react'
import '../public/ServiceForm.css'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useRef } from 'react';
export default function ServiceForm() {


  const scriptURL = 'https://script.google.com/macros/s/AKfycby1xh4MAihX9iGdnxXKewSv4Sb770HwSTNwPO7htKyQDkE88JZuNSBykFEvwkJcHX6_/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    btype: '',
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
    postData.append('btype', formData.btype);

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        setMessage("Form submitted successfully!");
        setSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '', btype: '' });
        navigate('/thankyou')
      })
      .catch(() => {
        setMessage("Error submitting the form. Try again.");
        setSubmitting(false);
      });
  };



  return (
    <div>
       <div className="service-form-container">
      {/* Left Section */}
      <div className="service-form-left">
        
       <div className="sfl-content">
       <h2>Let’s Build Something Game-Changing</h2>
        <p>
          Fill out the form and let <strong>Innovader</strong> help you launch
          high-converting campaigns, build stunning websites, and scale your
          brand digitally — faster and smarter.
        </p>
       </div>
      </div>

      {/* Right Section */}
      <div className="service-form-right">
        <form onSubmit={handleSubmit}>
          <div className="service-row">
            <input type="text" placeholder="Your Name*" name='name' value={formData.name} onChange={handleChange} required />
            <input type="email" placeholder="Email*" name='email' value={formData.email} onChange={handleChange} required />
          </div>

          <div className="service-row">
            <input type="tel" placeholder="Phone Number*" name='phone' value={formData.phone} onChange={handleChange} required />
            <input type="text" placeholder="Business Type" name='btype' value={formData.btype} onChange={handleChange}/>
          </div>

          <textarea
            placeholder="Tell us about your project or goals"
            rows="4"
            name='message' 
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Ready to Innovate? Let’s Go!</button>
        </form>
      </div>
    </div>
    </div>
  )
}
