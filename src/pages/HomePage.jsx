// src/pages/HomePage.jsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoDesa from "../components/InfoDesa";
import Agenda from "../components/Agenda";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection /> 
      <InfoDesa />
      <Agenda />
      <Footer />
    </div>
  );
}