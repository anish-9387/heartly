"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const path = document.querySelector<SVGPathElement>("#curvePath");
    const circle = document.querySelector<SVGCircleElement>("#movingBubble");

    if (!path || !circle) return;

    const p = path;
    const c = circle;

    const pathLength = p.getTotalLength();
    let startTime: number | null = null;

    function animate(time: number) {
      if (!startTime) startTime = time;
      const progress = ((time - startTime) / 10000) % 1; // 10s per loop
      const point = p.getPointAtLength(progress * pathLength);
      c.setAttribute("cx", point.x.toString());
      c.setAttribute("cy", point.y.toString());
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-[linear-gradient(180deg,#240F4C_0%,#020424_20%,#000000_80%)] text-white flex flex-col justify-center overflow-hidden"
      id="home"
    >
      {/* Heart Logo */}
      <div className="z-20 w-[12rem] sm:w-[14rem] md:w-[22rem] lg:w-[26rem] mx-auto -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-75 flex justify-center lg:-mb-14">
        <img
          src="/assets/optimized/heartlyicon.svg"
          alt="logo"
          className="w-full h-auto"
        />
      </div>

      <div className="z-10 text-center flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">
        <p className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold leading-[1.1] -mb-4 sm:-mb-6 md:-mb-8">
          Cut the <br className="md:hidden" /> Noise.
        </p>
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-light">
          Connections that actually feel like you
        </p>
        <div className="rounded-full bg-[#5008A736] px-6 py-3 border-x-[0.5px] border-amber-100/30 backdrop-blur-sm text-lg sm:text-lg md:text-xl font-medium">
          Get Started
        </div>
      </div>

      {/* Bottom Wave with rolling bubble */}
      <div className="absolute left-0 w-full bottom-8 sm:bottom-4 md:bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1920 631"
          className="w-full h-auto backdrop-blur-3xl"
        >
          <g filter="url(#a)">
            <path
              id="curvePath"
              stroke="url(#b)"
              strokeWidth="9"
              d="M-178 68c588.5 941 1655-190.5 2141.5 495"
            />
          </g>
          <path
            stroke="url(#c)"
            strokeWidth="7"
            d="M-178 68c588.5 941 1655-190.5 2141.5 495"
          />

            <circle
            id="movingBubble"
            r="28"
            fill="url(#bubbleGradient)"
            fillOpacity="0.3"
            stroke="#9333ea"
            strokeWidth="2"
            strokeOpacity="0.9"
            filter="url(#bubbleGlow)"
            />

          <defs>
            <linearGradient
              id="b"
              x1="956.499"
              x2="815.499"
              y1="-635"
              y2="289"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff1eca" />
              <stop offset="1" stopColor="#4027dd" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="70"
              x2="1963.5"
              y1="361.5"
              y2="315.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1942b2" />
              <stop offset="1" stopColor="#bc189b" />
            </linearGradient>

            {/* Bubble gradient */}
            <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
            </radialGradient>

            {/* Bubble glow */}
            <filter id="bubbleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="a"
              width="2278.58"
              height="629.591"
              x="-246.616"
              y=".814"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="15" />
              <feGaussianBlur stdDeviation="12.45" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.79579 0 0 0 0 0.124812 0 0 0 0 1 0 0 0 1 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_145_261"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-21" />
              <feGaussianBlur stdDeviation="15.15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.15094 0 0 0 0 0.0387996 0 0 0 0 1 0 0 0 1 0" />
              <feBlend
                in2="effect1_dropShadow_145_261"
                result="effect2_dropShadow_145_261"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect2_dropShadow_145_261"
                result="shape"
              />
              <feGaussianBlur
                result="effect3_foregroundBlur_145_261"
                stdDeviation="32.4"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Footer */}
      <footer className="z-30 fixed bottom-0 left-0 right-0 w-[calc(100%-40px)] mx-auto mb-6 border border-white/30 rounded-md backdrop-blur-sm text-white justify-between items-center px-6 py-3 hidden sm:flex">
        <img
          src="/assets/optimized/twitter.svg"
          alt="twitter"
          className="h-6 w-6"
        />
        {/* Right side - Email */}
        <div className="flex items-center gap-2">
          <img src="/assets/email.png" alt="email" className="h-6 w-6" />
          <p className="text-sm sm:text-base font-extralight">
            heartly.design2025@gmail.com
          </p>
        </div>
      </footer>
    </section>
  );
}