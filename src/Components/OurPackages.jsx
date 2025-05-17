import React, { useState } from "react";

const plansData = [
  {
    title: "Premium Plan - Complete Social Media Handle & Ads",
    features: [
      "Full Social Media Handling (Instagram, Facebook, etc.)",
      "Meta Ads (Facebook + Instagram)",
      "Google Ads (Search + Display)",
      "Professional Video Shoots with Models",
      "Creative Scriptwriting & Storyboarding",
      "Reels, Property Walkthroughs, Promo Videos",
      "Post Designing & Caption Writing",
      "Monthly Reporting & Strategy",
    ],
  },
  {
    title: "High Impact Plan - Video Shoot + Models + Ads",
    features: [
      "On-location Video Shoot",
      "Professional Models Included",
      "Video Editing & Reel Creation",
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "Scripting Concept and Execution",
      "Reporting & Performance Tracking",
    ],
  },
  {
    title: "Growth Plan - Video Editing + Ads",
    features: [
      "Video Editing (Reels)",
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "Campaign Strategy & Reporting",
    ],
  },
  {
    title: "Performance Plan - Ads Only",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "Lead Form Setup & Optimization",
      "Weekly Ad Performance Report",
    ],
  },
];

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quote Requested for ${form.plan}`);
    // Add API call or processing logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Get Quote</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      /><br />
      <input
        type="text"
        name="phone"
        placeholder="Phone No."
        value={form.phone}
        onChange={handleChange}
        required
      /><br />
      <input
        type="email"
        name="email"
        placeholder="Email ID"
        value={form.email}
        onChange={handleChange}
        required
      /><br />
      <select name="plan" value={form.plan} onChange={handleChange} required>
        <option value="">Choose Plan</option>
        {plansData.map((plan, idx) => (
          <option key={idx} value={plan.title.split(" - ")[0]}>
            {plan.title.split(" - ")[0]}
          </option>
        ))}
      </select><br />
      <button type="submit">Submit</button>
    </form>
  );
};

const OurPackages = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Our Packages</h2>
      {plansData.map((plan, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div
            onClick={() => toggle(index)}
            style={{
              cursor: "pointer",
              background: "#eee",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <strong>{plan.title}</strong>
          </div>
          {openIndex === index && (
            <ul style={{ padding: "10px", background: "#f9f9f9" }}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {/* <QuoteForm /> */}
    </div>
  );
};

export default OurPackages;
