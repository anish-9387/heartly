import img from "next/img";
import Navigation from "../components/navigation";
import HomePage from "@/components/homepage";
import AboutUs from "@/components/aboutUs";
import Services from "@/components/services";
import Manual from "@/components/manual";


export default function Home() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <AboutUs />
      <Services />
      <Manual />
    </div>
  );
}
