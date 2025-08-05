import React from 'react'
import img from '../assets/about.jpg'
function AboutTop() {
  return (
    <div className='abt-container'>
      <div className="abt-head">Welcome to Innovader Technology  <div className="head-sub">Delhi’s leading digital powerhouse built exclusively for the real estate industry.</div>
      </div>
      <div className="abtimage">
        <img src={img} alt="" />
      </div>
      <div className="abt-subhead">
        We don’t just run campaigns.
        We generate real, high-quality leads that convert into sales.
      </div>
      <div className="abt-content">At Innovader, we understand the real estate market inside out. Whether you’re a builder, broker, or developer – we know what your buyers are searching for and how to bring them to your doorstep. From high-performance ad campaigns to smart digital strategies, our focus is clear: results that grow your business.

      Backed by deep industry insights and digital innovation, we’ve helped real estate brands stand out in a crowded market – and close deals faster than ever.
      </div>
    </div>
  )
}

export default AboutTop
