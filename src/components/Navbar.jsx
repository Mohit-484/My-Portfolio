import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // 👇 Detect scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = ["about", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`w-full text-white px-6 md:px-10 py-3
      sticky top-0 z-50 
      transition-all duration-500
      ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl shadow-lg"
          : "bg-black"
      }`}
    >
      <div className="flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          <span className="text-[#6594B1]">My</span>Portfolio
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative cursor-pointer transition-colors duration-300
                ${
                  active === item
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-full after:bg-[#6594B1]
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                ${
                  active === item
                    ? "after:scale-x-100"
                    : "hover:after:scale-x-100"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <a
          href="/Mohit Resume 2.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block border border-white px-5 py-2 cursor-pointer rounded-lg hover:bg-white hover:text-black transition duration-300 "
          >
            My Resume
          </motion.button>
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-full left-0 w-full 
              bg-black/90 backdrop-blur-xl
              flex flex-col items-center gap-6 py-8 md:hidden
              border-b border-white/10"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-lg transition ${
                  active === item
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                My Resume
              </motion.button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}