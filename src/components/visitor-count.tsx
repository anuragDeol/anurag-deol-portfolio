'use client';

import { useEffect } from 'react';

export default function VisitorCounter() {
  useEffect(() => {
    const incrementCount = async () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const now = new Date().toDateString();

      if (lastVisit !== now) {
        try {
          const response = await fetch('/api/visitor-count', { 
            method: 'POST',
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('visitorCount', data.count.toString());
            localStorage.setItem('lastVisit', now);
          }
        } catch (error) {
          console.error('Error incrementing visitor count:', error);
        }
      }
    };

    incrementCount();

    // Cleanup function to prevent double counting in development
    return () => {
      localStorage.removeItem('lastVisit');
    };
  }, []);

  return null;
}