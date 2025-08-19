export default function Members() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-12 text-center">
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
          Companies our team <br /> members are from
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-3xl">
        <img
          src="/assets/circle.png"
          alt="Circle 1"
          className="w-16 sm:w-20 md:w-24"
        />
        <img
          src="/assets/circle.png"
          alt="Circle 2"
          className="w-16 sm:w-20 md:w-24"
        />
        <img
          src="/assets/circle.png"
          alt="Circle 3"
          className="w-16 sm:w-20 md:w-24"
        />
      </div>
    </section>
  );
}
