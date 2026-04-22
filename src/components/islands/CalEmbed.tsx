'use client';

import { useEffect } from 'react';

interface CalEmbedProps {
  calLink?: string;
}

export default function CalEmbed({ calLink = 'patriciataques/tarot-reading' }: CalEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className='cal-embed-container'
      data-cal-link={calLink}
      data-cal-config='{&quot;theme&quot;:&quot;dark&quot;,&quot;styles&quot;:{&quot;background&quot;:&quot;#18181B&quot;,&quot;primaryColor&quot;:&quot;#D4A12C&quot;}}'
      style={{ minHeight: '600px' }}
    />
  );
}