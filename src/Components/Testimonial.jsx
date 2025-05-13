import '../public/Testimonial.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Testimonial()
{
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: false,     // Animation only happens once when scrolled into view
        });
      }, []);
    return(
        <div className="Testimonial">
            <h2>What Our Client Says</h2>
            <div className="card-container">
                <div className="c-card" data-aos="zoom-out">
                    {/* <div className="quote-class">
                    
                    </div> */}
                 <p><i className="fa-solid fa-quote-left quote"></i>We've seen a massive increase in qualified buyer leads since partnering with Innovader Technologies. The Google Ads strategy they implemented delivered results within just a week. Best investment we've made in our marketing!</p>
                    <div className="c-name">
                    <h4>Ravi K</h4>
                        <i>Real Estate Developer</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>Our listings finally started getting real attention. Thanks to the Google Ads campaign, we generated 200+ leads in just 30 days — with actual conversions. Super impressed!</p>
                    <div className="c-name">
                    <h4>Neha M</h4>
                        <i> Real Estate Consultant</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>The Facebook and Instagram campaigns were beautifully designed and laser-targeted. I was blown away by how quickly inquiries started coming in — and they were real buyers, not just curious browsers.</p>
                    <div className="c-name">
                    <h4>Rahul S.</h4>
                        <i>Realtor</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>The creative + targeting = gold. We closed three high-ticket deals through leads we got via Meta Ads in just two months.</p>
                    <div className="c-name">
                        <h4>Simran D.</h4>
                        <i>Real Estate Agent, Delhi NCR</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>All the landing pages and organic forms were so well-optimized that we were able to capture quality leads without spending on ads. It’s an efficient and sustainable system.</p>
                    <div className="c-name">
                    <h4>Kunal J.</h4>
                        <i>Broker</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>What amazed me was the quality of the organic inquiries. They weren’t just random people — they were ready to buy or invest. The lead forms on our website are working like magic.</p>
                    <div className="c-name">
                    <h4>Pooja M.</h4>
                        <i>Agent</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>We’ve tried ads before, but this was the first time we actually saw consistent inquiries. Nothing fancy — just well-placed ads, the right landing page, and leads that actually answered the phone.</p>
                    <div className="c-name">
                    <h4>Ritika B.</h4>
                        <i>Property Consultan</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>Honestly, I wasn't sure if digital lead gen would work for real estate, but within a couple of weeks I started getting calls from serious buyers. The team didn’t overpromise — they just delivered. Simple and effective.</p>
                    <div className="c-name">
                    <h4>Anil S.</h4>
                        <i> Independent Real Estate Agent</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>What I liked most is that the leads didn’t feel random. They were coming through with genuine interest — and the forms were simple, not annoying to fill out. We’ve closed two deals already from just one campaign.</p>
                    <div className="c-name">
                    <h4>Farah K.</h4>
                        <i>Real Estate Agent</i>
                    </div>
                </div>
                <div className="c-card" data-aos="zoom-out">
                    <p><i className="fa-solid fa-quote-left quote"></i>I didn’t have time to figure out ads or SEO — I just needed leads. These guys set everything up, and now I get at least 3–4 qualified leads a day. It’s taken a huge load off my shoulders.</p>
                    <div className="c-name">
                    <h4>Jayant P.</h4>
                        <i>Solo Agent</i>
                    </div>
                </div>
            </div>
        </div>
    )
}