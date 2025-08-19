export default function Manual() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-12 text-center sm:text-left sm:ml-[-38rem]">
        The{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text text-5xl sm:text-8xl">
          Heartly
        </span>{" "}
        manual
      </h2>

      {/* Steps container */}
      <div className="w-full max-w-7xl bg-[#0a0a0f] border border-purple-600/40 rounded-2xl shadow-lg p-6 sm:p-14 grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-8 sm:gap-x-12">
        
        {/* Step 1 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            1
          </span>
          <p className="text-base sm:text-xl">
            Click on the{" "}
            <img
              src="/assets/launch-button.png"
              alt="Launch dApp"
              className="inline-block h-6 sm:h-8 align-middle"
            />{" "}
            button
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            2
          </span>
          <p className="text-base sm:text-xl">Connect the wallet to the platform</p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            3
          </span>
          <p className="text-base sm:text-xl">
            Select an option between “Chat / Voice / Video Call”
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            4
          </span>
          <p className="text-base sm:text-xl">Lock in your budget for the talk</p>
        </div>

        {/* Step 5 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            5
          </span>
          <p className="text-base sm:text-xl">
            Hit the “Start Connecting” button to get matched
          </p>
        </div>

        {/* Step 6 */}
        <div className="flex items-center gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-pink-500 text-pink-400 font-bold text-xl">
            6
          </span>
          <p className="text-base sm:text-xl">Dive in and enjoy the conversation!</p>
        </div>
      </div>
    </section>
  );
}
