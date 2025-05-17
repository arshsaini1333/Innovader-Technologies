import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../public/ClientCarousel.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // 👈 this should match `items`
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const clinetInfo = [
  {name:"Ravi K", desg:"Real Estate Developer", review:"We've seen a massive increase in qualified buyer leads since partnering with Innovader Technologies. The Google Ads strategy they implemented delivered results within just a week. Best investment we've made in our marketing!"},
  {name:"Neha M", desg:"Real Estate Consultant", review:"Our listings finally started getting real attention. Thanks to the Google Ads campaign, we generated 200+ leads in just 30 days — with actual conversions. Super impressed!"},
  {name:"Rahul S", desg:"Realtor", review:"The Facebook and Instagram campaigns were beautifully designed and laser-targeted. I was blown away by how quickly inquiries started coming in — and they were real buyers, not just curious browsers."},
  {name:"Simran D.", desg:"Real Estate Agent, Delhi NCR", review:"The creative + targeting = gold. We closed three high-ticket deals through leads we got via Meta Ads in just two months."},
  {name:"Kunal J.", desg:"Broker", review:"All the landing pages and organic forms were so well-optimized that we were able to capture quality leads without spending on ads. It’s an efficient and sustainable system."},
  {name:"Pooja M.", desg:"Agent", review:"What amazed me was the quality of the organic inquiries. They weren’t just random people — they were ready to buy or invest. The lead forms on our website are working like magic."},
  {name:"Ritika B.", desg:"Property Consultan", review:"We’ve tried ads before, but this was the first time we actually saw consistent inquiries. Nothing fancy — just well-placed ads, the right landing page, and leads that actually answered the phone."},
  {name:"Anil S.", desg:"Independent Real Estate Agent", review:"Honestly, I wasn't sure if digital lead gen would work for real estate, but within a couple of weeks I started getting calls from serious buyers. The team didn’t overpromise — they just delivered. Simple and effective."},
  {name:"Farah K.", desg:"Real Estate Agent", review:"What I liked most is that the leads didn’t feel random. They were coming through with genuine interest — and the forms were simple, not annoying to fill out. We’ve closed two deals already from just one campaign."},
  {name:"Jayant P.", desg:"Solo Agent", review:"I didn’t have time to figure out ads or SEO — I just needed leads. These guys set everything up, and now I get at least 3–4 qualified leads a day. It’s taken a huge load off my shoulders."},

]
const ClientCarousel = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };
  
    // Wait until page is fully loaded (images, fonts, etc.)
    window.addEventListener('load', handleResize);
  
    // Fallback: fire resize anyway after a delay
    const resizeFallback = setTimeout(() => {
      handleResize();
    }, 1000);
  
    return () => {
      window.removeEventListener('load', handleResize);
      clearTimeout(resizeFallback);
    };
  }, []);
  



  return (
<div className="Testimonial">
            <h2>What Our Client Says</h2>
        <div className="carousel-wrapper" data-aos="zoom-in">
        <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        arrows={false}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {clinetInfo.map((client, index) => {
          console.log(client.name)
          return (
           
            <div className="slider" key={index} >
              <div className="headings">
                <div className="quoteDiv"><i className="fa-solid fa-quote-left quote"></i></div>
              <div><h4>{client.name}</h4>
              <i>{client.desg}</i></div>
              </div>
              <div className="content-c">
              <p>{client.review}</p>
              </div>
              
              
            </div>
          );
        })}
      </Carousel>
    </div>
     </div>
  );
};
export default ClientCarousel;
