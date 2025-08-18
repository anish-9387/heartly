import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <div className="w-full h-[5rem] bg-transparent fixed flex justify-between items-center px-6 sm:px-[5rem] z-10">
      <div className="flex items-center">
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

      <div className="w-[9rem] h-[3rem] bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 rounded-full flex items-center justify-center mr-[1rem]">
        <span className="font-bold text-sm sm:text-base text-white">Launch dApp</span>
      </div>
    </div>
  );
}
