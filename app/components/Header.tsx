'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const pathname = usePathname();
  const isRoot = pathname === '/';

  useGSAP(() => {
    if (isRoot) {
      gsap.fromTo(
        '#header',
        { opacity: 0, y: 2 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: 'html',
            start: 'top top',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }
  }, [isRoot]);

  return (
    <header
      id="header"
      className={`fixed bg-gray-300/50 top-2 left-1/2 -translate-x-1/2 z-50 rounded-full ${
        isRoot ? 'opacity-0' : 'opacity-100'
      }`}>
      <div className=" rounded-md">
        <nav className="py-2 px-3 text-sm text-gray-600 font-semibold">
          <button className="px-4 py-2 cursor-pointer">Home</button>
          <button className="px-4 py-2 cursor-pointer">Skill</button>
          <button className="px-4 py-2 cursor-pointer">Project</button>
          <button className="px-4 py-2 cursor-pointer">About</button>
        </nav>
      </div>
    </header>
  );
}
