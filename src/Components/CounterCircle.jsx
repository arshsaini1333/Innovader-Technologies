// CounterCircle.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../public/HomeTestimonials.css';

const CounterCircle = ({ target, label, suffix}) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(target);
          const duration = 1500;
          const increment = Math.ceil(end / (duration / 30));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, 30);

          observer.current.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.current.observe(ref.current);
  }, [target]);

  return (
    <div className="counter-circle" ref={ref}>
      <h2>{count}{suffix}+</h2>
      <p>{label}</p>
    </div>
  );
};

export default CounterCircle;
