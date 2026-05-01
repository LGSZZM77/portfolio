"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>(".project-box");
      const texts = gsap.utils.toArray<HTMLElement>(".project-text");

      if (boxes.length === 0) return;

      gsap.set(boxes, { autoAlpha: 0 });
      gsap.set(boxes[0], { autoAlpha: 1 });
      gsap.set(texts, { color: "#606060" });
      gsap.set(texts[0], { color: "#ffffff" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${boxes.length * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (boxes.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
          },
        },
      });

      tl.to({}, { duration: 1 });

      boxes.forEach((_, i) => {
        if (i === boxes.length - 1) return;

        const label = `step${i + 1}`;

        tl.addLabel(label)
          .to(boxes[i], { autoAlpha: 0, duration: 0.5 }, label)
          .to(texts[i], { color: "#606060", duration: 0.5 }, label)
          .to(boxes[i + 1], { autoAlpha: 1, duration: 0.5 }, label)
          .to(texts[i + 1], { color: "#ffffff", duration: 0.5 }, label)

          .to({}, { duration: 1.5 });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} id="project" className="w-full overflow-hidden">
      <div className="section">
        <h1 className="section_title">제가 진행한 프로젝트를 소개합니다</h1>
        <div className="mx-auto mt-12 flex w-full max-w-7xl items-center justify-between px-4">
          <div className="relative h-112.5 w-150 overflow-hidden rounded-lg shadow-2xl">
            <div className="project-box absolute inset-0 bg-white"></div>
            <div className="project-box absolute inset-0 bg-red-500"></div>
            <div className="project-box absolute inset-0 bg-blue-500"></div>
          </div>
          <div>
            <ul className="text-8xl leading-snug font-black">
              <li className="project-text">Project 1</li>
              <li className="project-text">Project 2</li>
              <li className="project-text">Project 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
