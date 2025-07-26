import React, { useState } from 'react';
import './HoverPanels.css';

// const panelData = [
//   {
//     number: '01',
//     title: 'Real Estate Builder',
//     desc: 'For Zeller, an Australian fintech, we delivered a dedicated extension to their product and engineering teams to enhance the solution ahead of the product launch.'
//   },
//   {
//     number: '02',
//     title: 'Real Estate Broker',
//     desc: 'We helped the brand accelerate product development timelines and achieve milestone delivery by scaling their tech team within 3 weeks.'
//   },
//   {
//     number: '03',
//     title: 'Real Estate Agents',
//     desc: 'Our involvement continued post-launch to support expansion and roll out additional features across markets efficiently.'
//   },
//   {
//     number: '04',
//     title: 'Property Consultant',
//     desc: 'Our involvement continued post-launch to support expansion and roll out additional features across markets efficiently.'
//   }
// ];
const panelData = [
    {
      id: "01",
      title: "Real Estate Builder",
      description: "We help builders launch, promote, and sell new projects faster with high-converting websites, targeted ad campaigns, and lead automation. From project landing pages to site visit scheduling—we handle it all."
    },
    {
      id: "02",
      title: "Real Estate Broker",
      description: "For brokers, we offer lead generation, branding, and digital outreach strategies to expand client reach and close more deals. Our CRM setup ensures no enquiry gets missed."
    },
    {
      id: "03",
      title: "Real Estate Agents",
      description: "We empower agents with local SEO, WhatsApp automation, and ad funnels to consistently bring in ready-to-talk property seekers. Boost visibility, trust, and inbound inquiries."
    },
    {
      id: "04",
      title: "Property Consultant",
      description: "Consultants benefit from tailored campaigns that attract serious investors and buyers. We provide digital tools to showcase listings, capture leads, and manage relationships effortlessly."
    }
  ];
  

export default function HoverPanels() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='HoverPanels'>
    <div className="headings"></div>
    <div className="hover-panels">
      {panelData.map((panel, index) => (
        <div
          key={index}
          className={`panel ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          
          <div className="panel-number">{panel.id}</div>
          
          <div className="data-show">
          <div className="panel-title">{panel.title}</div>
          {activeIndex === index && (
            <div className="panel-desc">{panel.description}</div>
          )}
          </div>
          
        </div>
      ))}
    </div>
    </div>
  );
}
