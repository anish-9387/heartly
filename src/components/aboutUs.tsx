export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden" id="about">
      <div className="mt-20">
        <p className="text-[5rem] sm:text-[5.6rem] font-bold ml-6 sm:ml-[6rem] -mb-2 sm:-mb-6">
          About <br />Us
        </p>
      </div>

      <div className="relative w-full mt-20 sm:mt-[-14rem]">
        <img
          src="/assets/aboutUsCurve.png"
          alt="curve shadow"
          className="w-full relative -translate-y-4 sm:-translate-y-10"
        />

        <img
          src="/assets/aboutUsLine.svg"
          alt="curve line"
          className="absolute top-0 left-0 w-full"
        />
      </div>

      {/* text block */}
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