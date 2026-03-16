'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Mouse } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useGSAP(() => {
    gsap.fromTo('#졸리다', { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    gsap.fromTo(
      '#mouse',
      { y: 40 },
      {
        y: 0,
        repeat: -1,
        scrub: true,
        duration: 1,
        yoyo: true,
        ease: 'power1.inOut',
      },
    );
    gsap.to('#mouse', {
      opacity: 0,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="relative w-full h-dvh flex justify-center items-center">
      <h1 id="졸리다" className="text-6xl">
        &lt; 뭘넣을까 /&gt;
      </h1>
      <div id="mouse" className="absolute bottom-40 left-1/2 -translate-x-1/2">
        <Mouse size={32} />
      </div>
    </div>
  );
}
