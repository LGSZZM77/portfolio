"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useGSAP(() => {
    gsap
      .timeline({ repeat: -1, repeatDelay: 0 })
      .fromTo(
        "#wheel",
        { y: -8, opacity: 0 },
        { y: 6, opacity: 1, duration: 1.5, ease: "power2.out" },
      )
      .to("#wheel", {
        y: 10,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });

    gsap.to("#mouse", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      id="intro"
      className="relative flex h-dvh w-full items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#21262d]"
    >
      <div id="mouse" className="absolute bottom-24 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-3 border-gray-400">
          <div id="wheel" className="mt-2 h-2 w-1 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
