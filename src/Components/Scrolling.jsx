import { useEffect, useRef } from 'react';

export default function ScrollControlledHorizontal() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const onWheel = (e) => {
      if (container && container.getBoundingClientRect().top <= 0 && container.getBoundingClientRect().bottom > window.innerHeight) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div ref={scrollRef} className="horizontal-scroll-section">
      {[1, 2, 3, 4, 5].map((num) => (
        <div className="card" key={num}>Card {num}</div>
      ))}
    </div>
  );
}
