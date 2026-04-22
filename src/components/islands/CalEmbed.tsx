'use client';

import { useEffect, useRef } from 'react';

interface CalEmbedProps {
  calLink?: string;
}

export default function CalEmbed({ calLink = 'patriciataques/leitura-de-tarot' }: CalEmbedProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadCal = () => {
      const win = window as any;
      if (win.Cal) {
        win.Cal.init({ origin: 'https://cal.com' });
      }
    };

    const win = window as any;
    if (win.Cal) {
      loadCal();
    } else {
      const s = document.createElement('script');
      s.src = 'https://embed.cal.com/embed.js';
      s.async = true;
      s.onload = loadCal;
      s.onerror = () => console.error('Failed to load Cal.com embed');
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      data-cal-link={calLink}
      data-cal-namespace='tarot-booking'
      data-cal-config='{&quot;theme&quot;:&quot;dark&quot;,&quot;layout&quot;:&quot;month_view&quot;}'
      style={{ minHeight: '600px', width: '100%' }}
    />
  );
}