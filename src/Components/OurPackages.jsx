import '../public/OurPackages.css'
import EnquireNow from './EnquireNowForm.jsx'
import { useState } from 'react';
export default function OurPackages()
{
    const [isShow, setShow] = useState(false);
    function popUp()
    {
        setShow(!isShow);
    }
  return(
    <>
    <div className="OurPackages">
        <h2>Our Packages</h2>
        <div className="package-cont">
            {/* <div className="stack1"> */}
            <div className="package-card small">
                <div className="p-name">Performance Plan</div>
                <div className="p-descp">Ads Only</div>
                <div className="p-benefits">
                    <ul>
                        <li>Meta Ads (Facebook & Instagram)</li>
                        <li>Google Ads</li>
                        <li>Lead Form Set Up & Optimization</li>
                        <li>Weekly Ad Performance Report</li>
                    </ul>
                </div>
                <button onClick={()=>popUp()}>Get Quote</button>
            </div>
            
            {/* </div> */}
           {/* <div className="stack2"> */}
           <div className="package-card big">
                <div className="p-name">High Impact Plan</div>
                <div className="p-descp">Video Shoot + Models + Ads</div>
                <div className="p-benefits">
                    <ul>
                        <li>On Location Video Shoot</li>
                        <li>Professional Models Included</li>
                        <li>Video Editing & Reel Creation</li>
                        <li>Meta Ads (Facebook & Instagram)</li>
                        <li>Google Ads</li>
                        <li>Script Concept and Execution</li>
                        <li>Reporting & Performance Tracking</li>
                    </ul>
                </div>
                <button onClick={()=>popUp()} className='button-cp'>Get Quote</button>
            </div>
            <div className="package-card big">
                <div className="p-name">Premium Plan</div>
                <div className="p-descp">Complete Social Media Handle & Ads</div>
                <div className="p-benefits">
                    <ul >
                        <li>Full Socail Media Handling (Instagram, Facebook etc)</li>
                        <li>Meta Ads (Facebook + Instagram)</li>
                        <li>Google Ads (Search + Display)</li>
                        <li>Professional Video Shoot with Model</li>
                        <li>Creative Script Writing & Story Boarding</li>
                        <li>Reels, Property, Walk-Through and Promo Videos </li>
                        <li>Post Designing + Caption Writing</li>
                        <li>Monthly Reporting & Strategy</li>
                    </ul>
                </div>
                <button onClick={()=>popUp()}>Get Quote</button>
                
            </div>

            <div className="package-card small">
                <div className="p-name">Growth Plan</div>
                <div className="p-descp">Video Editing + Ads</div>
                <div className="p-benefits">
                    <ul>
                        <li>Video Editing (Reels)</li>
                        <li>Meta Ads (Facebook & Instagram)</li>
                        <li>Google Ads</li>
                        <li>Campaign Strategy & Reporting</li>
                    </ul>
                </div>
                <button onClick={()=>popUp()}>Get Quote</button>
            </div>
           {/* </div> */}
            
        </div>
    </div>


    <EnquireNow isShow={isShow} popUp={popUp}/>
    </>
  )
}