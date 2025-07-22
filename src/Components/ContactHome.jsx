import { useState } from 'react';
import '../public/ContactHome.css';
import cus from '../assets/contactUSpic.jpg';
export default function ContactHome()
{
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        businessType: "",
      });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you! We'll be in touch.");
      };
    return(
        <div className="ContactHome">
            <div className="rightContainer">
            <img src={cus} alt=""  />
         </div>
            <div className="left-container">
                {/* <h1>Contact US</h1> */}
                <div className="formContent">
                <p className='formHeading'>Stop Chasing Client Start Attracting Them</p>
                <p className='formsub'>Get Ready to convert leads, Not Random Clicks</p>
                <p className='formfill'> Fill this quick form — we’ll handle the rest.</p>
                </div>
                <div className="formArea">
                <form onSubmit={handleSubmit} className="contact-form-home">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
        >
          <option value="">Select Business Type</option>
          <option value="Broker">Broker</option>
          <option value="Builder">Builder</option>
          <option value="Property Consultant">Property Consultant</option>
        </select>

        <button type="submit">Let's Talk</button>
      </form>
    </div>
    </div>
         
</div>
    )
}