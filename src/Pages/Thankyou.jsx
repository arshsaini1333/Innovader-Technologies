import React from 'react'
import { useNavigate } from "react-router";
import '../public/Thankyou.css'
export default function Thankyou() {
  const navigate = useNavigate();
  return (
    <div className='Thanyou'>
      <div className="thankyou-content">
        <div className="thank-head"> Thanks for Getting in Touch!</div>
        <div className="thank-subhead">Our experts will reach out to you to discuss your needs shortly.</div>
        <button onClick={()=>{navigate('/')}}  className='thank-cta'>Back to Home</button>
      </div>
    </div>
  )
}
