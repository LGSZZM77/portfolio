"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>(".project-box");
      const texts = gsap.utils.toArray<HTMLElement>(".project-text");

      gsap.set(boxes, { autoAlpha: 0 });
      gsap.set(boxes[0], { autoAlpha: 1 });

      gsap.set(texts, { color: "#606060" });
      gsap.set(texts[0], { color: "#ffffff" });

      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { scale: 0.7 },
          {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(boxes.length - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: 1 / (boxes.length - 1),
          invalidateOnRefresh: true,
        },
      });

      tl.addLabel("start").to({}, { duration: 1 });

      tl.addLabel("step1")
        .to(boxes[0], { autoAlpha: 0, duration: 0.2 }, "step1")
        .to(texts[0], { color: "#606060", duration: 0.2 }, "step1")
        .to(boxes[1], { autoAlpha: 1, duration: 0.2 }, "step1")
        .to(texts[1], { color: "#ffffff", duration: 0.2 }, "step1")
        .to({}, { duration: 1 });

      tl.addLabel("step2")
        .to(boxes[1], { autoAlpha: 0, duration: 0.2 }, "step2")
        .to(texts[1], { color: "#606060", duration: 0.2 }, "step2")
        .to(boxes[2], { autoAlpha: 1, duration: 0.2 }, "step2")
        .to(texts[2], { color: "#ffffff", duration: 0.2 }, "step2")
        .to({}, { duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="project" className="section">
      <div className="flex flex-col items-center gap-10">
        <h1 className="section_title text-4xl font-bold text-white">
          제가 진행한 프로젝트를 소개합니다
        </h1>

        <div className="flex w-7xl items-center justify-between">
          <div className="relative h-112.5 w-150 overflow-hidden rounded-lg">
            <div className="project-box absolute inset-0 bg-white"></div>
            <div className="project-box absolute inset-0 bg-red-500 opacity-0"></div>
            <div className="project-box absolute inset-0 bg-blue-500 opacity-0"></div>
          </div>

          <div>
            <ul className="text-8xl leading-snug font-black text-[#606060]">
              <li className="project-text text-white">Project 1</li>
              <li className="project-text">Project 2</li>
              <li className="project-text">Project 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
