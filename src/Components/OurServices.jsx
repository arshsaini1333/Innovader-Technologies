import React from 'react'
import '../public/OurServices.css'
import brand from '../assets/services/brand.png'
import fb from '../assets/services/fb.webp'
import gads from '../assets/services/gads.webp'
import leadgen from '../assets/services/leadgen.png'
import seo from '../assets/services/seo.png'
import social from '../assets/services/social.webp'
import web from '../assets/services/web.png'

export default function OurServices() {
    
// Content Array
const services = [
    {
     
      name: " Targeted Lead Generation",
      content:
        "Reach serious buyers, not just random traffic! We use smart, data-backed ad strategies to connect you with people who are actually ready to invest. More conversions. More site visits. Better ROI.",
        img : leadgen
    },
    {
      name: " Brand Strategy",
      content:
        "Be the name people remember in real estate. From creative messaging to powerful visuals — we help you craft a brand that stands out in a crowded market and builds long-term trust.",
        img: brand
    },
    {
      name: " Website Design & Development",
      content:
        "Your website is your digital showroom. We create modern, mobile-friendly real estate websites that are fast, SEO-friendly, and built to convert visitors into buyers.",
        img: web
    },
    {
      name: " Social Media Marketing",
      content:
        "Turn scrolls into site visits. We turn your real estate project into a buzz on platforms like Instagram, Facebook, and LinkedIn. From eye-catching creatives to lead-generating reels, we build your brand and bring real engagement. Whether it’s a new launch, possession update, or testimonial — we make sure your audience sees it, remembers it, and acts on it.",
        img: social
    },
    {
      name: " Search Engine Optimization (SEO)",
      content:
        "Be seen when people are searching to buy. We help your real estate projects rank on Google using smart keywords, local SEO hacks, and page improvements. This means more people discover you — and more leads come in without spending on ads.",
        img: seo
    },
    {
      name: " Google Ads",
      content:
        "Run ads that actually convert. We create targeted campaigns for Google that drive high-quality traffic to your listings. Whether it’s buyers or investors — we help you get clicks that turn into bookings.",
        img: gads
    },
    {
      name: " Facebook Ads (Meta Ads)",
      content:
        "Reach the right buyers, right when they’re looking. Our laser-focused Facebook ad strategies bring in serious leads at lower costs. Whether you’re promoting a launch or running retargeting ads — we help you fill up your site visits calendar.",
        img: fb
    },
  ];
  




  return (
    <div className='OurServices'>
      <div className="service-head">
        <div className="heading">
        Solutions We Offer
        </div>
        <div className="service-context">
        <span>At Innovader Technologies</span> , we don’t just market — we grow real estate brands. From getting you quality leads to building a strong online presence, our digital strategies are designed to boost your sales and brand impact.

        </div>
      </div>
      <div className="services-cards">
        {services.map((service)=>(
            <div className='s-card'>
                <div className='s-image'>
                <img src={service.img} alt="" />
                </div>
                <div className="s-content">
                    <div className="s-name">{service.name}</div>
                    <div className="s-desc">{service.content}</div>
                    <div className="s-cta"><span>Learn More </span> <span className='arr'>→</span></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
