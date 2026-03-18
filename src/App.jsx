import AboutSection from "./components/AboutPage";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <>
     <Navbar />
     <AnimatePresence mode="wait">
        <HeroSection />
        <AboutSection />
        <Projects />
        <Contact />
      </AnimatePresence>
    </>
  );
}
