"use client";

import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    const path = document.querySelector<SVGPathElement>("#aboutCurvePath");
    const bubble = document.querySelector<SVGCircleElement>("#aboutMovingBubble");

    if (!path || !bubble) return;

    const p = path;
    const c = bubble;

    const pathLength = p.getTotalLength();
    let startTime: number | null = null;

    function animate(time: number) {
      if (!startTime) startTime = time;
      const progress = ((time - startTime) / 10000) % 1; // 10s loop
      const point = p.getPointAtLength((1 - progress) * pathLength);
      c.setAttribute("cx", point.x.toString());
      c.setAttribute("cy", point.y.toString());
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
      id="about"
    >
      {/* Heading */}
      <div className="mt-20">
        <p className="text-[5rem] sm:text-[5.6rem] font-bold ml-6 sm:ml-[6rem] -mb-2 sm:-mb-6">
          About <br />Us
        </p>
      </div>

      {/* Curve + Animated Bubble */}
      <div className="relative w-full mt-20 sm:mt-[-14rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 926"
          fill="none"
          className="w-full relative"
        >
          {/* Curve Path from aboutUsSvg */}
          <path
            id="aboutCurvePath"
            d="M-42.5 924.5C244 99.5 1782 260 1962 2"
            stroke="url(#aboutLineGradient)"
            strokeWidth="7"
          />

          {/* Bubble moving along path */}
          <circle
            id="aboutMovingBubble"
            r="28"
            fill="url(#aboutBubbleGradient)"
            fillOpacity="0.3"
            stroke="#9333ea"
            strokeWidth="2"
            strokeOpacity="0.9"
            filter="url(#aboutBubbleGlow)"
          />

          <defs>
            {/* Gradient for line */}
            <linearGradient
              id="aboutLineGradient"
              x1="83"
              y1="115.5"
              x2="1976.5"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1942B2" />
              <stop offset="1" stopColor="#BC189B" />
            </linearGradient>

            {/* Bubble gradient */}
            <radialGradient id="aboutBubbleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
            </radialGradient>

            {/* Bubble glow */}
            <filter id="aboutBubbleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Text Block */}
      <div className="absolute inset-0 w-full flex items-center justify-start sm:justify-end z-10 pt-10 sm:pt-0">
        <div className="text-base sm:text-2xl max-w-full sm:max-w-[50rem] px-6 sm:px-10 mt-[16rem] sm:mt-0">
          <p className="tracking-wide sm:tracking-widest leading-relaxed font-light text-right -mb-30">
            Heartly is a privacy-first platform for real human connection.
            We enable anonymous, encrypted 1:1 voice and chat support—no accounts,
            no tracking, no borders. Built on blockchain, trust and safety are
            woven into every conversation.
          </p>
        </div>
      </div>
    </section>
  );
}