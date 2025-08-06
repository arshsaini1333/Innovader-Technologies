import React, { useEffect, useRef } from 'react';

const InstagramEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div ref={ref}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
