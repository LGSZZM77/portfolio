"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { STACK_DATA, type StackItem } from "../../data/stackData";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryKey = keyof typeof STACK_DATA;
type CategoryValue = {
  label: string;
  items: StackItem[];
};

export default function StackList() {
  const [active, setActive] = useState<CategoryKey>("frontend");
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = Object.entries(STACK_DATA) as [
    CategoryKey,
    CategoryValue,
  ][];
  const activeItems = STACK_DATA[active].items;

  const showControls = activeItems.length >= 5;

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount =
      direction === "left" ? -container.clientWidth : container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div id="skill" className="section">
      <h2 className="section_title">해당 기술과 도구로 개발해요</h2>

      <div className="flex w-full max-w-135 grid-cols-4 justify-center gap-2 rounded-full bg-white/5 px-2 py-1.5 whitespace-nowrap backdrop-blur-md">
        {categories.map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex flex-1 cursor-pointer justify-center rounded-full px-2 py-2.5 text-xs transition-all md:px-8 md:text-sm ${
              active === key
                ? "bg-white font-bold text-black"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="text-center whitespace-nowrap">{value.label}</span>
          </button>
        ))}
      </div>

      <div className="group relative w-7xl">
        <div className="w-full overflow-x-hidden" ref={scrollRef}>
          <div className="flex gap-6 py-4">
            {activeItems.map((item: StackItem) => (
              <div
                key={item.stack}
                className="stack-card flex min-w-[calc(25%-18px)] flex-col items-center rounded-3xl bg-[#1a1f26] p-8 shadow-2xl transition-all hover:bg-[#222831]"
              >
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/5 p-4">
                  <Image
                    src={item.img}
                    alt={item.stack}
                    width={64}
                    height={64}
                    className="object-contain"
                    priority={active === "frontend"}
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-white">
                  {item.stack.toUpperCase()}
                </h3>

                <div className="w-full flex-1 border-t border-white/10 pt-4">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.description ||
                      "이 기술에 대한 설명이 아직 준비되지 않았어요."}
                  </p>
                </div>

                <div className="mt-4 flex cursor-pointer flex-wrap gap-1.5 border-white/5">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 컨트롤러 */}
          {showControls && (
            <>
              <button
                onClick={() => handleScroll("left")}
                className="absolute top-1/2 -left-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="absolute top-1/2 -right-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
