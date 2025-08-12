import '../public/Contact.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import Footer from '../Components/Footer';
export default function Contact(){
    // Form HAndlish

    const scriptURL = 'https://script.google.com/macros/s/AKfycby1xh4MAihX9iGdnxXKewSv4Sb770HwSTNwPO7htKyQDkE88JZuNSBykFEvwkJcHX6_/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    btype: '',
    ploc: '',
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
    postData.append('ploc', formData.ploc);
    postData.append('btype', formData.btype);

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



    return(
        <>
        <div class="contact-container">

            <div className="contact-top">
                <div className="c-top-content">
                    <div className="stt-head">Let’s Grow Your Business Together</div>
                    <div className="ctt-subhead">Tell us about your goals, and we’ll create a strategy to make them happen. Your next big win starts here.</div>
                </div>
            </div>


            {/* 2nd Block */}

            {/* <div className="ct-contact-info">
                <div className="ctt-left">
                    Need Help? Lets Talk
                </div>
                <div className="ctt-right">
                    <div className="ctt-row">
                        <p className='ctt-name'>Email: </p>
                        <p>Hr@innovader.in</p>
                    </div>
                    <div className="ctt-row">
                        <p className='ctt-name'>Phone No.</p>
                        <p><span>8447149389</span><span>9211904059</span></p>
                    </div>
                </div>
            </div> */}

<h2 class="c-heads">Need Help? Let’s Talk.</h2>

<div class="contact-wrapper" >
    <div class=" contact-info ">
        {/* <div class="info-box">
            <i class="fas fa-home icon "></i>
            <div>
                <h4>Address</h4>
                <p><strong>INNOVADER TECHNOLOGIES</strong> <br/> E-93/1, SOUTH, near SUMAN CHOWK <br/> Block D, Chhatarpur Extension, Chhatarpur <br/> New Delhi, Delhi 110074</p>
            </div>
        </div> */}

        <div class="info-box ">
        <i class="fa-solid fa-hourglass-start icon "></i>
            <div>
                
                 <h4>Business Hours</h4>
                 <p>Mon–Sat: 10:30 AM – 6:30 PM</p>
                 <p>Sunday: Closed</p>

            </div>
        </div>
        <div class="info-box ">
            <i class="fas fa-phone icon "></i>
            <div>
                <h4>Phone</h4>
                <p>+91 8447149389
                </p>
                <p>+91 9211904059</p>
            </div>
        </div>

        <div class="info-box ">
            <i class="fas fa-envelope icon "></i>
            <div>
                <h4>Email</h4>
                <p>hr@innovader.in
                </p>
            </div>
        </div>
    </div>

   {/* ---------------------Forms--------------------- */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name='name' value={formData.name} onChange={handleChange} placeholder="Enter your full name" required/>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" placeholder="Enter your phone" name='phone' value={formData.phone} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <input
              type="text"
              id="businessType"
              placeholder="Enter your business type"
              name='btype'
              value={formData.btype}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectLocation">Project Location</label>
            <input
              type="text"
              id="projectLocation"
              placeholder="Enter project location"
              name='ploc'
              value={formData.ploc}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="1"
            placeholder="Type your message..."
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
        {submitting ? "Submitting..." : "Connect With Expert"}
        </button>
      </form>
    </div>
</div>
    
    <Footer/>
    </>

    )
}