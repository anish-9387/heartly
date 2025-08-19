import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <div className="w-full h-[5rem] bg-transparent fixed flex justify-between items-center px-6 sm:px-[5rem] z-30">
      <div className="flex items-center">
        {/* Mobile menu */}
        <button className="sm:hidden p-2">
          <Menu className="w-7 h-7 text-white" />
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-[3rem] items-center">
          <a href="/" className="text-white">Home</a>
          <a href="/" className="text-white">About Us</a>
          <a href="/" className="text-white">Services</a>
        </div>
      </div>

      {/* Hologram Button */}
      <button className="relative inline-flex items-center justify-center w-[9rem] h-[3rem] rounded-full border border-white/25 text-white font-bold text-sm sm:text-base bg-transparent overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,.25)_inset,0_8px_30px_rgba(0,0,0,.4),0_0_40px_rgba(0,234,255,.25)] active:translate-y-px active:scale-95 isolate">

        <span
          className="absolute inset-0 w-full h-full opacity-70 z-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/hologram.svg')" }}
        />

        <span className="absolute top-[-120%] left-[-40%] w-[200%] h-[340%] rotate-[18deg] mix-blend-screen animate-glossSweep z-20 pointer-events-none [background:linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,.35)_12%,rgba(255,255,255,0)_28%)]" />

        <span className="relative z-30">Launch dApp</span>
      </button>
    </div>
  );
}
