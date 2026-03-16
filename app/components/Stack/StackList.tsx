'use client';

import Image from 'next/image';
import { STACK_DATA } from '../../data/stackData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function StackList() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    const stacks = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);

    stacks.forEach((stack) => {
      gsap.fromTo(
        stack,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: stack,
            start: 'top, 90%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <h1 className="text-3xl font-bold">기술 스택 및 보유 역량</h1>
      <div className="flex flex-col gap-5" ref={scrollRef}>
        {Object.entries(STACK_DATA).map(([key, { label, items }]) => (
          <section key={key} className="flex flex-col items-start gap-1">
            <h2 className="text-lg font-semibold">{label}</h2>
            <div className="flex flex-wrap gap-3">
              {items.map((s) => (
                <div
                  key={s.stack}
                  className="relative group/skill cursor-pointer">
                  <Image
                    className="hover:scale-125"
                    src={s.img}
                    alt={s.stack}
                    width={48}
                    height={48}
                  />
                  <p className="absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-gray-200/80 rounded text-sm text-center invisible z-10 group-hover/skill:visible">
                    {s.stack}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
