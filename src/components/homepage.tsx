export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen bg-[linear-gradient(180deg,#240F4C_0%,#020424_20%,#000000_80%)] text-white flex flex-col justify-center overflow-hidden">
      {/* Heart Logo */}
      <div className="z-2 w-[12rem] sm:w-[14rem] md:w-[22rem] lg:w-[26rem] mx-auto -mt-30 sm:-mt-28 md:-mt-40 lg:-mt-60 flex justify-center mb-10 sm:mb-10">
        <img 
          src="/assets/heartlyicon.svg" 
          alt="logo" 
          className="w-full h-auto" 
        />
      </div>

    <div className="z-10 text-center flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">
    <p className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[1.1] -mb-4 sm:-mb-6 md:-mb-8">
      Cut the <br className="md:hidden" /> Noise.
    </p>
    
    <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-extralight">
      Connections that actually feel like you
    </p>
    
    <div className="rounded-full bg-[#5008A736] px-6 py-3 border-x-[0.5px] border-amber-100/30 backdrop-blur-sm text-lg sm:text-lg md:text-xl font-medium">
      Get Started
    </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute left-0 w-full bottom-8 sm:bottom-4 md:bottom-0">
        <img
          src="/assets/curveline_1.svg"
          alt="wave decoration"
          className="w-full h-auto"
        />
      </div>

      {/* Footer Bar */}
      <div className="hidden md:flex absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[96%] sm:w-[95%] md:w-[90%] border border-gray-600 rounded-md items-center justify-between gap-4 px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
        >
          <img 
            src="/assets/twitter.svg" 
            alt="twitter" 
            className="w-4 h-4 sm:w-5 sm:h-5" 
          />
        </a>

        <span className="flex items-center gap-2 truncate text-[#83798f]">
          <img 
            src="/assets/email.png" 
            alt="" 
            className="w-4 h-4 sm:w-5 sm:h-5" 
          />
          <a href="mailto:heartly.design2025@gmail.com">
            heartly.design2025@gmail.com
          </a>
        </span>
      </div>
    </section>
  );
}