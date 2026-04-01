"use client";

import { useState } from "react";
import Image from "next/image";
import { STACK_DATA, type StackItem } from "../../data/stackData";

type CategoryKey = keyof typeof STACK_DATA;
type CategoryValue = {
  label: string;
  items: StackItem[];
};

export default function StackList() {
  const [active, setActive] = useState<CategoryKey>("frontend");

  const categories = Object.entries(STACK_DATA) as [
    CategoryKey,
    CategoryValue,
  ][];
  const activeItems = STACK_DATA[active].items;

  return (
    <div id="skill" className="section">
      <h2 className="section_title">해당 기술과 도구로 개발해요</h2>

      <div className="flex w-135 justify-center gap-2 rounded-full bg-white/5 py-1.5 backdrop-blur-md">
        {categories.map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`rounded-full px-8 py-3 text-sm transition-all ${
              active === key
                ? "bg-white font-bold text-black"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>

      <div className="group relative w-7xl overflow-x-scroll">
        <div className="flex gap-6 px-2 py-4">
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
                />
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                {item.stack.toUpperCase()}
              </h3>

              <div className="w-full border-t border-white/10 pt-4">
                <p className="text-sm leading-relaxed text-slate-400">
                  해당 기술을 활용한 프로젝트 경험 및 숙련도에 대한 설명이
                  들어갈 자리입니다.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
