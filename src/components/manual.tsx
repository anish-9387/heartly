export default function Manual() {
  return (
    <div className="relative w-full text-white overflow-hidden">

      <div className="absolute w-full mt-40 sm:mt-8">
        <img
          src="/assets/manualCurve2.png"
          alt="curve shadow"
          className="w-full relative translate-y-4 sm:translate-y-10 translate-x-[1rem] sm:translate-x-[2rem]"
        />
        <img
          src="/assets/manualCurve1.png"
          alt="curve line"
          className="absolute top-0 left-0 w-full"
        />
      </div>

      {/* Manual Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-6xl font-bold mb-8 sm:mb-12 text-center sm:text-left sm:ml-[-38rem]">
          The{" "}
          <span className="text-white text-4xl sm:text-9xl">
            <img
              src="/assets/optimized/heartlyText.svg"
              alt="Heartly Logo"
              className="inline-block h-14 sm:h-28 align-middle translate-y-3 sm:translate-y-6"
            />
          </span>{" "}
          manual
        </h2>

        {/* Steps container */}
        <div className="w-full max-w-4xl sm:max-w-7xl backdrop-blur-md border border-purple-600/40 rounded-2xl shadow-lg p-4 sm:p-14 grid grid-cols-1 md:grid-cols-3 gap-y-6 sm:gap-y-12 gap-x-6 sm:gap-x-12 relative z-10">
          {/* Step 1 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/1.svg" alt="Step 1" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">
              Click on the “{" "}
              <img
                src="/assets/launch-button.png"
                alt="Launch dApp"
                className="inline-block h-5 sm:h-8 align-middle"
              />{" "}
              ” button
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/2.svg" alt="Step 2" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">Connect the wallet to the platform</p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/3.svg" alt="Step 3" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">
              Select an option between “Chat / Voice / Video Call”
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/4.svg" alt="Step 4" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">Lock in your budget for the talk</p>
          </div>

          {/* Step 5 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/5.svg" alt="Step 5" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">
              Hit the “Start Connecting” button to get matched
            </p>
          </div>

          {/* Step 6 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <img src="/assets/optimized/6.svg" alt="Step 6" className="w-12 h-12 sm:w-20 sm:h-20" />
            <p className="text-sm sm:text-xl">Dive in and enjoy the conversation!</p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12 text-center relative z-10">
          <p className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Companies our team <br /> members are from
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-2xl sm:max-w-3xl relative z-10">
          <img src="/assets/circle.png" alt="Circle 1" className="w-14 sm:w-20 md:w-24" />
          <img src="/assets/circle.png" alt="Circle 2" className="w-14 sm:w-20 md:w-24" />
          <img src="/assets/circle.png" alt="Circle 3" className="w-14 sm:w-20 md:w-24" />
        </div>
      </section>
    </div>
  );
}