"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DotGrid from "../ui/dotGrid";
import RotatingText from "../ui/rotatingText";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1 },
    });

    gsap.from("#intro_text", {
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
    });
    tl.from("h2", {
      y: 60,
      opacity: 0,
      delay: 0.5,
    }).from(
      "h1",
      {
        y: 40,
        opacity: 0,
      },
      "-=0.7",
    );

    gsap
      .timeline({ repeat: -1, defaults: { ease: "power2.out" } })
      .fromTo(
        "#wheel",
        { y: "-70%", opacity: 0 },
        { y: "200%", opacity: 1, duration: 1.2 },
      )
      .to("#wheel", {
        y: "300%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });

    gsap.to("#mouse", {
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      id="intro"
      className="relative flex h-dvh w-full items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#21262d]"
    >
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          // baseColor="#2F293A"
          baseColor="#2D262E"
          // activeColor="#5227FF"
          activeColor="#B163A3"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div
        id="intro_text"
        className="relative z-10 flex flex-col gap-2 select-none"
      >
        <h2 className="flex gap-4 text-3xl font-bold text-white">
          안녕하세요
          <RotatingText
            texts={[
              "기록하며 성장하는",
              "사용자 경험을 고민하는",
              "기초가 탄탄한",
              "개발의 즐거움을 느끼는",
            ]}
            staggerFrom="first"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
            splitBy="characters"
            auto
            loop
            className="text-[#B163A3]"
          />
        </h2>
        <h1 className="text-5xl font-bold text-white">
          프론트엔드 개발자 <b className="text-[#7e6c79]">이규성</b>입니다
        </h1>
      </div>
      <div id="mouse" className="absolute bottom-24 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-3 border-gray-400">
          <div id="wheel" className="mt-2 h-2 w-1 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
