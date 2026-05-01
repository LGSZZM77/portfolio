"use client";

import { useRef, useState, useEffect } from "react";
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
  const [showControls, setShowControls] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = Object.entries(STACK_DATA) as [
    CategoryKey,
    CategoryValue,
  ][];
  const activeItems = STACK_DATA[active].items;

  const checkScrollable = () => {
    const container = scrollRef.current;
    if (container) {
      setShowControls(container.scrollWidth > container.clientWidth);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [active, activeItems]);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    const firstItem = container.querySelector(".stack-card") as HTMLElement;
    const itemWidth = firstItem?.offsetWidth || clientWidth;
    const gap = 24;
    const moveDistance = itemWidth + gap;

    const GAP_OFFSET = 20;
    const isRight = direction === "right";

    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - GAP_OFFSET;
    const isAtStart = scrollLeft <= GAP_OFFSET;

    if (isRight && isAtEnd) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (!isRight && isAtStart) {
      container.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      const scrollStep =
        Math.round(clientWidth / moveDistance) * moveDistance || moveDistance;
      container.scrollBy({
        left: isRight ? scrollStep : -scrollStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="skill" className="section">
      <h2 className="section_title">해당 기술과 도구로 개발해요</h2>

      <div className="flex justify-center">
        <div className="inline-flex rounded-2xl border border-white/10 bg-stone-900/50 p-1.5 backdrop-blur-xl">
          <div className="flex items-center gap-1.5">
            {categories.map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex cursor-pointer items-center justify-center rounded-xl px-6 py-2.5 text-xs font-medium transition-all md:text-sm ${
                  active === key
                    ? "bg-white font-bold text-stone-950 shadow-lg"
                    : "text-stone-500 hover:text-stone-200"
                }`}
              >
                <span className="whitespace-nowrap">{value.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-20 md:px-0">
        <div
          className="no-scrollbar w-full snap-x snap-mandatory overflow-x-hidden scroll-smooth"
          ref={scrollRef}
        >
          <div className="flex gap-6">
            {activeItems.map((item: StackItem) => (
              <div
                key={item.stack}
                className="stack-card flex w-full shrink-0 snap-start flex-col items-start rounded-[2rem] border border-white/10 bg-white/3 p-8 shadow-2xl transition-all md:w-[calc(50%-12px)] lg:max-w-[calc(25%-18px)] lg:min-w-[calc(25%-18px)]"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 p-3">
                    <Image
                      src={item.img}
                      alt={item.stack}
                      width={40}
                      height={40}
                      className="object-contain"
                      priority={active === "frontend"}
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-200">
                    {item.stack.toUpperCase()}
                  </h3>
                </div>

                <div className="mb-6 w-full flex-1">
                  <p className="text-[0.92rem] leading-relaxed font-normal text-stone-400">
                    {item.description || "아직 설명이 준비되지 않았어요."}
                  </p>
                </div>

                <div className="flex w-full flex-wrap gap-2 border-t border-white/10 pt-6">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-widest text-stone-500 uppercase transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <>
            <button
              onClick={() => handleScroll("left")}
              className="absolute top-1/2 left-0 z-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-stone-900/90 p-3 text-white shadow-xl transition-colors hover:bg-stone-800"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="absolute top-1/2 right-0 z-3 translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-stone-900/90 p-3 text-white shadow-xl transition-colors hover:bg-stone-800"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
