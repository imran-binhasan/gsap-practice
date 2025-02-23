/* eslint-disable @next/next/no-img-element */
'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.logo',
        start: 'top center',
        end: 'bottom top',
        scrub: true, // Smooth animation based on scroll
        markers: true, // Show markers (remove in production)
      },
    });

    // Scale from 1 → 5
    tl.to('.logo', { scale: 5, duration:3, ease: 'none' });

    // Scale from 5 → 0
    tl.to('.logo', { scale: 0, duration: 0.1, ease: 'none' });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="h-[200vh] flex flex-col items-center justify-center gap-20">
      <img className="logo w-40 h-40" src="/pg.png" alt="logo" />
      <img className="logo w-40 h-40" src="/pg.png" alt="logo" />
      <img className="logo w-40 h-40" src="/pg.png" alt="logo" />
      <img className="logo w-40 h-40" src="/pg.png" alt="logo" />
    </div>
  );
}
