"use client";

import { useState } from "react";

export default function Header() {
  const buttons = [
    { label: "Home", id: "home" },
    { label: "Stack", id: "stack" },
    { label: "Project", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  const [activeId, setActiveId] = useState(buttons[0].id);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <header className="fixed top-6 z-50 flex h-10 w-full items-center justify-center sm:h-12">
      <div className="flex h-full items-center rounded-full bg-white/80 px-3 shadow-lg shadow-black/5 backdrop-blur-sm">
        <div className="flex h-3/4 items-center justify-between text-[0.9rem] font-medium text-gray-500 sm:gap-5">
          {buttons.map((button) => {
            const isActive = activeId === button.id;

            return (
              <button
                className={`h-full cursor-pointer rounded-full px-3 transition-colors ${isActive ? "bg-gray-100 text-gray-950" : "hover:bg-gray-50 hover:text-gray-950"} `}
                key={button.id}
                onClick={() => handleScroll(button.id)}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
