"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { STACK_DATA } from "../../data/stackData";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type CategoryKey = keyof typeof STACK_DATA;
type FilterKey = CategoryKey | "all";

type FlatStackItem = {
  stack: string;
  img: string;
  category: CategoryKey;
};

gsap.registerPlugin(ScrollTrigger);

export default function StackList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<FilterKey>("all");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from("#stack-title", { opacity: 0, y: 30, duration: 0.5 })
        .from("#stack-tabs", { opacity: 0, y: 20, duration: 0.5 })
        .from(".stack-item", {
          opacity: 0,
          duration: 0.4,
        });
    },

    { scope: containerRef },
  );

  const flatStack: FlatStackItem[] = useMemo(() => {
    return Object.entries(STACK_DATA).flatMap(([category, value]) =>
      value.items.map((item) => ({
        stack: item.stack,
        img: item.img,
        category: category as CategoryKey,
      })),
    );
  }, []);

  const categories = Object.entries(STACK_DATA) as [
    CategoryKey,
    (typeof STACK_DATA)[CategoryKey],
  ][];

  return (
    <div
      id="skill"
      ref={containerRef}
      className="flex w-full flex-col items-center gap-12 px-4 py-16"
    >
      <h2 id="stack-title" className="text-4xl font-black tracking-tight">
        기술 스택 및 도구
      </h2>

      <div
        id="stack-tabs"
        className="flex flex-wrap justify-center gap-2 rounded-xl bg-slate-100 p-1.5"
      >
        <button
          onClick={() => setActive("all")}
          className={`rounded-xl px-6 py-2.5 text-sm font-bold transition ${
            active === "all"
              ? "bg-white font-black text-black shadow-sm"
              : "text-slate-400"
          }`}
        >
          전체
        </button>

        {categories.map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`rounded-xl px-6 py-2.5 text-sm font-bold transition ${
              active === key
                ? "bg-white font-black text-black shadow-sm"
                : "text-slate-400"
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {flatStack.map((item) => {
          const isActive = active === "all" || active === item.category;

          return (
            <div
              key={item.stack}
              className={`group/skill relative flex items-center justify-center transition-all duration-300 hover:z-40 ${
                isActive ? "scale-100 opacity-100" : "scale-90 opacity-20"
              }`}
            >
              <div className="stack-item relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-white p-1 shadow-sm transition-transform hover:scale-110">
                <Image src={item.img} alt={item.stack} width={44} height={44} />
                <p className="invisible absolute -bottom-1 left-1/2 z-50 -translate-x-1/2 translate-y-full rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white shadow-xl group-hover/skill:visible">
                  {item.stack}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
