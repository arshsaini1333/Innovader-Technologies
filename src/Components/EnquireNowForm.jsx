import React, { useState } from 'react';
import '../public/Home.css';

const EnquireNowForm = ({ isShow, popUp }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    });
  };

  // 🔒 Do not render the form if isShow is false
  if (!isShow) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit} className='form'>
          <div className="row">
            <input type="text" name="firstName" placeholder="Name" value={formData.firstName} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
  
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <textarea name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
          {submitted && <p className="thank-you">Thanks for submitting!</p>}
        </form>
        <span className="close-btn" onClick={()=>popUp()}>&times;</span>
      </div>
    </div>
  );
};

export default EnquireNowForm;
