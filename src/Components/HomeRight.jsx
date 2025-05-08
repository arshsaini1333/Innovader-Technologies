import React from 'react';
import '../public/Home.css';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';
import p13 from '../assets/p13.jpg';
import p14 from '../assets/p14.jpg';
import p15 from '../assets/p15.jpg';
import p16 from '../assets/p16.jpg';




const row1Images = [
  // Add image URLs here (repeat as needed for looping)
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,  
];
const row2Images = [
  // Add image URLs here (repeat as needed for looping)
  p1,
  p2,
  p3,
  p4,
  p5,
    
];
const row3Images = [
  // Add image URLs here (repeat as needed for looping)
 
  p6,
  p7,
  p8,
  p9,
  p10,
  
];

const HomeRight = () => {
    const renderRow = (images, direction) => (
      <div className={`scroll-row ${direction}`}>
        <div className="scroll-inner">
          {images.map((img, i) => (
            <div className='images'>
                <img src={img} alt={`img-${i}`} key={i} />
            </div>
          ))}
          {/* Duplicate for infinite loop effect */}
          {images.map((img, i) => (
            <div className='images'>
             <img src={img} alt={`img-${i}-duplicate`} key={i + images.length} />
            </div>
          ))}
        </div>
      </div>
    );
  
    return (
      <div className="scrolling-gallery HomeRight">
        {renderRow(row1Images, "down")}
        {renderRow(row2Images, "up" )}
        {renderRow(row3Images, "down")}
      </div>
    );
  };
  
  export default HomeRight;
