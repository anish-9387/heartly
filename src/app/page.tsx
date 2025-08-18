import Image from "next/image";
import Navigation from "../components/navigation";
import HomePage from "@/components/homepage";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}
