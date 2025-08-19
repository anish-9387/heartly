export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="mt-20">
        <p className="text-[5rem] sm:text-[5.6rem] font-bold ml-6 sm:ml-[6rem] -mb-2 sm:-mb-6">
          About <br />Us
        </p>
      </div>

      <div>
        <img
          src="/assets/aboutUsLine.svg"
          alt=""
          className="w-full mt-20 sm:mt-[-14rem]"
        />
      </div>

      <div className="text-base sm:text-2xl max-w-full sm:max-w-[40rem] mt-10 sm:mt-[-24rem] ml-6 sm:ml-[42rem]">
        <p className="tracking-wide sm:tracking-widest leading-relaxed">
          Heartly is a privacy-first platform for real human connection. We
          enable anonymous, encrypted 1:1 voice and chat support—no accounts, no
          tracking, no borders. Built on blockchain, trust and safety are woven
          into every conversation.
        </p>
      </div>
    </section>
  );
}
