import Image from "next/image";
import   "./page.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import SectionOne from "./components/Section-01/SectionOne";
import SectionTwo from "./components/Section-02/SectionTwo";
    

export default function Home() {
  return (
   <div className="wrapper">
   <Navbar />
   <Herosection />
   <SectionOne />
   <SectionTwo />
   </div>
  );
}
