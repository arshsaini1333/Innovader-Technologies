import React from "react";
import "../public/Hover.css";
import img1 from '../assets/sss1.png'
import img2 from '../assets/sss2.png'
import img3 from '../assets/sss3.png'
import img4 from '../assets/sss4.png'
export default function ImageScrollCard() {
  return (
    <div className="websiteHover">
      <div className="wsc-header">A Glimpse into Our Web Design Creations</div>
      <div className="wsc-subhead">Discover how we turn concepts into high-performing, visually stunning websites.</div>
     
     <div className="webs-cards">
     <div className="web-s-c">
      <img
        src={img1}
        alt="Scrolling"
        className="scroll-img"
      />
    </div>
     <div className="web-s-c">
      <img
        src={img2}
        alt="Scrolling"
        className="scroll-img"
      />
    </div>
     <div className="web-s-c">
      <img
        src={img3}
        alt="Scrolling"
        className="scroll-img"
      />
    </div>
     <div className="web-s-c">
      <img
        src={img4}
        alt="Scrolling"
        className="scroll-img"
      />
    </div>
     </div>
     <div className="reel-cta">
     <button onClick={()=>popUp()} className="work-btn"> Want To know More</button>
     </div>
    </div>
  );
}
