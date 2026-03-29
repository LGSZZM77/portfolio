"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Header() {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const handleScroll = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}` },
      ease: "power3.inOut",
    });
  };

  useGSAP(() => {
    if (isRoot) {
      gsap.fromTo(
        "#header",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: "html",
            start: "top top",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [isRoot]);

  return (
    <header
      id="header"
      className={`fixed top-4 right-0 z-50 -translate-x-1/2 rounded-lg ${
        isRoot ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="rounded-sm">
        <nav className="text-sm font-semibold text-gray-300">
          <button
            onClick={() => handleScroll("home")}
            className="cursor-pointer px-4 py-2"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("skill")}
            className="cursor-pointer px-4 py-2"
          >
            Skill
          </button>
          <button
            onClick={() => handleScroll("project")}
            className="cursor-pointer px-4 py-2"
          >
            Project
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="cursor-pointer px-4 py-2"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}
