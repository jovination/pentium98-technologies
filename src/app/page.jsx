import Image from "next/image";
import   "./page.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";

export default function Home() {
  return (
   <div className="wrapper">
   <Navbar />
   <Herosection />

   </div>
  );
}
