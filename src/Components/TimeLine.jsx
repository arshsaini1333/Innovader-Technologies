import React, { useEffect, useRef, useState } from 'react';
import '../public/Timeline.css';
import ChatIcon from '@mui/icons-material/Chat';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  {
    title: '1',
    subtitle: 'Consultation',
    heading: 'Understanding Your Needs',
    description: 'We discuss your vision, goals, and requirements to craft a perfect website plan.',
    icon: <ChatIcon sx={{ fontSize: 40, color: '#00ff73' }} />,
  },
  {
    title: '2',
    subtitle: 'Designing',
    heading: 'Creating the Blueprint',
    description: 'We design a stunning prototype that aligns with your brand and user experience.',
    icon: <PaletteIcon sx={{ fontSize: 40, color: '#3f88ff' }} />,
  },
  {
    title: '3',
    subtitle: 'Development',
    heading: 'Building Your Website',
    description: 'Our expert developers bring the design to life with a fully functional website.',
    icon: <CodeIcon sx={{ fontSize: 40, color: '#00ffff' }} />,
  },
  {
    title: '4',
    subtitle: 'Launch & Support',
    heading: 'Go Live & Ongoing Support',
    description: 'We launch your website and provide support to keep it running smoothly.',
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#ff4d4d' }} />,
  },
];

const Timeline = () => {
  const lineRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = lineRef.current.getBoundingClientRect();
      const totalHeight = rect.height;
      const screenHeight = window.innerHeight;
      const scrollY = window.scrollY + screenHeight;
      const offsetTop = lineRef.current.offsetTop;

      const progress = Math.min(
        ((scrollY - offsetTop) / totalHeight) * 100,
        100
      );

      setProgressHeight(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-wrapper">
      <div className='tl-head'> <span>From</span> Concept <span>to</span> Completion</div>
      <div className="timeline" ref={lineRef}>
        <div className="timeline-line">
          <div className="timeline-progress" style={{ height: `${progressHeight}%` }} />
        </div>

        {steps.map((step, index) => (
          <div className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="step-content">
              <div className="step-icon">{step.icon}</div>
              <div className="step-text">
                {/* <span className="step-title">{step.title}</span> */}
                <span className="step-subtitle">{step.subtitle}</span>
                <h3>{step.heading}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;