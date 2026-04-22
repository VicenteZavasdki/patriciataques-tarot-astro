'use client';

import { useEffect } from 'react';

interface CalEmbedProps {
  calLink?: string;
  calNamespace?: string;
}

export default function CalEmbed({
  calLink = 'patriciataques/30min',
  calNamespace = 'tarot-booking'
}: CalEmbedProps) {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*=\"embed.cal.com\"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://embed.cal.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const initCal = () => {
      if ((window as any).Cal) {
        (window as any).Cal.ns[calNamespace]?.();
        (window as any).Cal.init({
          origin: 'https://cal.com'
        });

        (window as any).Cal.ns[calNamespace]?.('ui', {
          styles: {
            body: {
              background: '#18181B'
            }
          },
          config: {
            layout: 'month_view',
            theme: 'dark'
          }
        });
      }
    };

    if ((window as any).Cal) {
      initCal();
    } else {
      script.addEventListener('load', initCal);
    }

    return () => {
      // Cleanup not needed for script loading
    };
  }, [calNamespace]);

  return (
    <div className='cal-embed-wrapper'>
      <div
        data-cal-link={calLink}
        data-cal-namespace={calNamespace}
        data-cal-config='{
          \"theme\": \"dark\",
          \"styles\": {
            \"background\": \"#18181B\",
            \"primaryColor\": \"#D4A12C\"
          },
          \"layout\": \"month_view\"
        }'
        style={{ minHeight: '650px', width: '100%' }}
      />
    </div>
  );
}