import React, { use, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "../public/EnquiryPopup.css";
import img from "../assets/realE.jpeg";

const EnquiryPopup = ({ isOpen, onClose }) => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycby1xh4MAihX9iGdnxXKewSv4Sb770HwSTNwPO7htKyQDkE88JZuNSBykFEvwkJcHX6_/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);
 const navigate = useNavigate()
  if (!isOpen) return null;

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

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        setMessage("Form submitted successfully!");
        setSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
        navigate('/thankyou')
      })
      .catch(() => {
        setMessage("Error submitting the form. Try again.");
        setSubmitting(false);
      });
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-left">
          <img src={img} alt="Beautiful Flats" />
        </div>
        <div className="popup-right">
          <h2>Schedule Your Call Today</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" id="contactSubmit" className={submitting ? 'blur-bt' : ''}>
              {submitting ? "Submitting..." : "Submit Enquiry"}
            </button>
            
          </form>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
