"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DotGrid from "../ui/dotGrid";
import RotatingText from "../ui/rotatingText";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { STACK_DATA } from "../../data/stackData";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);

  const mainStacks = useMemo(() => {
    const priority = [
      "nextjs",
      "react",
      "tailwindcss",
      "gsap",
      "typescript",
      "vscode",
    ];

    const filtered = Object.values(STACK_DATA)
      .flatMap((category) => category.items)
      .filter((item) => item.isMain === true)
      .sort((a, b) => priority.indexOf(a.stack) - priority.indexOf(b.stack)); // 빨간 줄 없음!

    const positions = [
      { left: "25%", top: "10%", scale: 1.5 },
      { left: "10%", top: "45%", scale: 2 },
      { left: "15%", top: "82%", scale: 1 },
      { left: "70%", top: "12%", scale: 1.5 },
      { left: "80%", top: "40%", scale: 2 },
      { left: "75%", top: "85%", scale: 1 },
    ];

    return filtered.slice(0, 6).map((item, i) => {
      const pos = positions[i] || { left: "50%", top: "50%", scale: 1 };
      return { ...item, ...pos };
    });
  }, []);

  useGSAP(
    () => {
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

      gsap.to(".floating-card", {
        // X축 이동
        x: () => gsap.utils.random(-25, 25),
        // Y축 이동
        y: () => gsap.utils.random(-45, 45),
        // 회전
        rotation: () => gsap.utils.random(-2, 2),

        // 핵심: 각 요소마다 다른 duration과 delay를 부여하여 엇박자 생성
        duration: () => gsap.utils.random(4, 8),
        delay: () => gsap.utils.random(0, 2),

        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",

        // stagger를 함수로 사용하면 각 요소가 시작될 때 위 random 값들을 개별 계산함
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      // 아이콘 breathing 효과
      gsap.fromTo(
        ".floating-card",
        {
          filter: "drop-shadow(0 0 3px rgba(177,99,163,0.3))",
          opacity: 0.5,
        },
        {
          filter: "drop-shadow(0 0 10px rgba(177,99,163,0.7))",
          opacity: 0.8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    },
    { scope: introRef },
  );

  return (
    <div
      id="intro"
      ref={introRef}
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

      <div className="pointer-events-none absolute inset-0 z-5">
        {mainStacks.map((item) => (
          <div
            key={item.stack}
            className="floating-card absolute flex h-20 w-20 rotate-0 items-center justify-center"
            style={{
              top: item.top,
              left: item.left,
              transform: `scale(${item.scale})`,
            }}
          >
            <Image
              src={item.img}
              alt={item.stack}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <div
        id="intro_text"
        className="relative z-10 flex flex-col gap-2 select-none"
      >
        <h2 className="flex gap-2 text-2xl font-medium text-white">
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
        <h1 className="text-6xl leading-tight font-black tracking-tight text-white">
          프론트엔드 개발자 <br className="block md:hidden" />{" "}
          <b
            className="text-[#B163A3]"
            style={{
              // 이름에만 강한 임팩트를 줌
              textShadow:
                "0 0 25px rgba(177,99,163,0.8), 0 0 50px rgba(177,99,163,0.4)",
            }}
          >
            이규성
          </b>
          입니다
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
