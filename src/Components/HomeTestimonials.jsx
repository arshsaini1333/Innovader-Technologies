import React from 'react';
import '../public/HomeTestimonials.css';
import { useState } from 'react';

import EnquiryPopup from './EnquiryPopup';
import CounterCircle from './CounterCircle';
import CallIcon from '@mui/icons-material/Call';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// const testimonials = [
//   {
//     name: "Rajat Arora",
//     location: "New Delhi",
//     msg: "Buying a villa through Roofing Empires was the best decision we made. The location in Chhattarpur is peaceful, and the quality is top-notch. Their team is extremely professional and transparent!"
//   },
//   {
//     name: "Ankita Mehra",
//     location: "Saket",
//     msg: "We were looking for a reliable developer in South Delhi and Roofing Empires exceeded all expectations. From site visits to paperwork – smooth and stress-free!"
//   },
//   {
//     name: "Prateek Bansal",
//     location: "Gurugram",
//     msg: "Their DLF Farms project is pure luxury. It’s rare to find such premium quality with timely delivery in Delhi. Highly recommended!"
//   },
//   {
//     name: "Kunal Sharma",
//     location: "Vasant Kunj",
//     msg: "I invested in a plot with Roofing Empires last year and have already seen great appreciation. Their team’s market knowledge is excellent."
//   },
//   {
//     name: "Divya Kapoor",
//     location: "Chhattarpur",
//     msg: "As a first-time homebuyer, I had many doubts. But Roofing Empires guided me through every step with patience and clarity. Truly trustworthy people."
//   },
//   {
//     name: "Anil & Seema Grover",
//     location: "South Delhi",
//     msg: "We shifted to our new 3BHK flat in their low-rise project last month – beautiful interiors, peaceful surroundings, and great connectivity."
//   },
//   {
//     name: "Simran Chadha",
//     location: "Panchsheel Park",
//     msg: "What I loved most was their honesty – no hidden charges, no delays, and regular updates. Roofing Empires delivers what they promise."
//   },
//   {
//     name: "Siddharth Taneja",
//     location: "Hauz Khas",
//     msg: "I’ve worked with many developers, but Roofing Empires stands out for their ethics, clear titles, and premium construction quality."
//   },
//   {
//     name: "Megha Suri",
//     location: "CR Park",
//     msg: "From paperwork to possession, it was a seamless experience. Their customer service is unmatched in Delhi’s real estate scene."
//   },
//   {
//     name: "Rohit Malhotra",
//     location: "Punjabi Bagh",
//     msg: "We wanted a farmhouse near Delhi and Roofing Empires helped us find the perfect one in DLF Farms. Great value and no compromise on quality!"
//   }
// ];

const testimonials = [
  {
    name: "Ravi K",
    title: "Real Estate Developer",
    description: "We've seen a massive increase in qualified buyer leads since partnering with Innovader Technologies. The Google Ads strategy they implemented delivered results within just a week. Best investment we've made in our marketing!"
  },
  {
    name: "Neha M",
    title: "Real Estate Consultant",
    description: "Our listings finally started getting real attention. Thanks to the Google Ads campaign, we generated 200+ leads in just 30 days — with actual conversions. Super impressed!"
  },
  {
    name: "Rahul S.",
    title: "Realtor",
    description: "The Facebook and Instagram campaigns were beautifully designed and laser-targeted. I was blown away by how quickly inquiries started coming in — and they were real buyers, not just curious browsers."
  },
  {
    name: "Simran D.",
    title: "Real Estate Agent, Delhi NCR",
    description: "The creative + targeting = gold. We closed three high-ticket deals through leads we got via Meta Ads in just two months."
  },
  {
    name: "Kunal J.",
    title: "Broker",
    description: "All the landing pages and organic forms were so well-optimized that we were able to capture quality leads without spending on ads. It’s an efficient and sustainable system."
  },
  {
    name: "Pooja M.",
    title: "Agent",
    description: "What amazed me was the quality of the organic inquiries. They weren’t just random people — they were ready to buy or invest. The lead forms on our website are working like magic."
  },
  {
    name: "Ritika B.",
    title: "Property Consultant",
    description: "We’ve tried ads before, but this was the first time we actually saw consistent inquiries. Nothing fancy — just well-placed ads, the right landing page, and leads that actually answered the phone."
  },
  {
    name: "Anil S.",
    title: "Independent Real Estate Agent",
    description: "Honestly, I wasn't sure if digital lead gen would work for real estate, but within a couple of weeks I started getting calls from serious buyers. The team didn’t overpromise — they just delivered. Simple and effective."
  },
  {
    name: "Farah K.",
    title: "Real Estate Agent",
    description: "What I liked most is that the leads didn’t feel random. They were coming through with genuine interest — and the forms were simple, not annoying to fill out. We’ve closed two deals already from just one campaign."
  },
  {
    name: "Jayant P.",
    title: "Solo Agent",
    description: "I didn’t have time to figure out ads or SEO — I just needed leads. These guys set everything up, and now I get at least 3–4 qualified leads a day. It’s taken a huge load off my shoulders."
  }
];


const splitColumns = (data, columns) => {
  const result = Array.from({ length: columns }, () => []);
  data.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
};

const TestimonialCard = ({ name, title, description }) => (
  <div className="testimonial-card">
    <div className="stars">★★★★★</div>
    <div className="name">{name}</div>
    <div className="location">{title}</div>
    <p className="message">{description}</p>
  </div>
);

const HomeTestimonials = () => {
  const columns = splitColumns(testimonials, 2);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
    <div className="testimonial-wrapper" >
      <div className="text-block">
        <div className='ht-sub'>What Our Clients Speak for Us</div>
        <div className='ht-super'>From consultation to completion, see how we deliver peace of mind.</div>
        
        <div className="left-column">
       <CounterCircle target={200} label="Projects" />
       <CounterCircle target={50} label="Happy Clients" />
      <CounterCircle target={70} label="NPS Score"  />
      </div>
 <p><FormatQuoteIcon className='fq-start fq'/>Our clients’ success stories reflect our commitment to excellence. See how we’ve helped them find their dream homes, sustainable investments, and perfect getaways.<FormatQuoteIcon className='fq'/></p>
      <div className="ht-cta">
        <button ><CallIcon className='callIcon' sx={{ fontSize: 25 }}/> <span>Enquire Now</span></button>
      </div>
      </div>
      <div className="columns">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`column ${index % 2 === 0 ? 'scroll-up' : 'scroll-down'}`}
          >
            <div className="column-inner">
              {col.map((item, idx) => (
                <TestimonialCard key={idx} {...item} />
              ))}
              {col.map((item, idx) => (
                <TestimonialCard key={idx + '-copy'} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      
    </div>
   
    <EnquiryPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default HomeTestimonials;
