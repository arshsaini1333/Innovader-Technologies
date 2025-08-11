import React from 'react'
import ig1 from '../assets/Insta Work/ig1.jpg'
import ig2 from '../assets/Insta Work/ig2.jpg'
import ig3 from '../assets/Insta Work/ig3.jpg'
import ig4 from '../assets/Insta Work/ig4.jpg'
import ig5 from '../assets/Insta Work/ig5.jpg'
import ig6 from '../assets/Insta Work/ig6.jpg'
import ig7 from '../assets/Insta Work/ig7.jpg'
import ig8 from '../assets/Insta Work/ig8.jpg'
import ig9 from '../assets/Insta Work/ig9.jpg'
import ig10 from '../assets/Insta Work/ig10.jpg'
import ig11 from '../assets/Insta Work/ig11.jpg'
import ig12 from '../assets/Insta Work/ig12.jpg'
import ig13 from '../assets/p17.jpg'
import ig14 from '../assets/p18.jpg'
export default function InstaPhotos() {
    const images = [ig1, ig2, ig3, ig4,ig5, ig6, ig7, ig8, ig9, ig10, ig11, ig12, ig13, ig14];
  return (
    <div className='InstaPhotos'>
      <div className="ig-heading">High-Impact Creatives for High-Value Properties</div>
      <div className="ig-cards">
      {
        images.map((img, index)=>(
            <div key={index} className='ig-card'> 
                <img src={img} alt="" />
            </div>
        ))
      }
      </div>
    </div>
  )
}
