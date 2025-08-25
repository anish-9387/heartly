export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen bg-[linear-gradient(180deg,#240F4C_0%,#020424_20%,#000000_80%)] text-white flex flex-col justify-center overflow-hidden" id="home">
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

      {/* Bottom Wave - It's as svg for now. Convert to code and then add rolling wheel on it also. */}
      <div className="absolute left-0 w-full bottom-8 sm:bottom-4 md:bottom-0">
        <img
          src="/assets/optimized/curveline_1.svg"
          alt="wave decoration"
          className="w-full h-auto backdrop-blur-3xl"
        />
      </div>

      <footer className="z-30 fixed bottom-0 left-0 right-0 w-[calc(100%-40px)] mx-auto mb-6 border border-white/30 rounded-md backdrop-blur-sm text-white justify-between items-center px-6 py-3 hidden sm:flex">
        <img src="/assets/optimized/twitter.svg" alt="twitter" className="h-6 w-6" />

        {/* Right side - Email */}
        <div className="flex items-center gap-2">
          <img src="/assets/email.png" alt="email" className="h-6 w-6" />
          <p className="text-sm sm:text-base font-extralight">heartly.design2025@gmail.com</p>
        </div>
      </footer>

    </section>

  );
}