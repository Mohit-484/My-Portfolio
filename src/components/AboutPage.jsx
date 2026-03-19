import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHtml5, FaReact, FaGitAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SiTailwindcss, SiJavascript, SiRedux, SiFigma } from "react-icons/si";


export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen  text-white flex flex-col lg:flex-row relative bg-black overflow-hidden mt-10 "
    >
      {/* LEFT SIDE - 1/3 */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/3 bg-black border-r border-white/10 
        flex flex-col items-center  text-center p-10 space-y-4"
      >
        <img
          src="/public/mohit.png"
          alt="Mohit"
          className="w-36 h-36 rounded-full object-cover border-4 border-[#6594B1] hover:scale-140 hover:mb-10 transition-all"
        />

        <h2 className="text-2xl font-bold">Mohit Selokar</h2>

        <p className="text-gray-400 text-lg">
          Aspiring Front-End Developer
        </p>

        <p className="text-gray-500 text-lg">
          mohitselokar22@gmail.com
        </p>
        <p className="text-gray-500 text-lg">
          +91 8999323027
        </p>
        <a className="text-lg mt-3 flex items-center justify-center gap-3">
          <span> <CiLocationOn /> </span> Pune, MH, India 
        </a>
      </motion.div>

      {/* RIGHT SIDE - 2/3 */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="m-5 w-full lg:w-2/3 p-8 grid grid-cols-1 sm:grid-cols-2 gap-5  "
      >
        {/* CARD COMMON STYLE */}
        {[
          {
            title: "About Me",
            content: (
              <p className="text-gray-400 leading-relaxed">
                I am a passionate and aspiring Front-End Developer
                focused on building interactive and responsive web
                applications.My goal is to become a skilled
                software developer and contribute to impactful projects.
              </p>
            ),
          },
          {
            title: "Education",
            content: (
              <div className="text-gray-400 space-y-2">
                <p className="font-medium text-white">
                  Bachelor of Technology (Information Tech.)
                </p>
                <p>Kavikulguru Institute of Technology</p>
                <p>2021 - 2025</p>
                <p className="flex items-center gap-2 text-sm">
                  <FaMapMarkerAlt /> KITS, Ramtek
                </p>
              </div>
            ),
          },
          {
            title: "Experience",
            content: (
              <p className="text-gray-400 leading-relaxed">
                Worked on multiple frontend projects using React,
                Redux and Tailwind CSS. Built responsive websites
                with smooth animations and optimized UI performance.
                Continuously learning modern frontend tools and
                industry best practices.
              </p>
            ),
          },
          {
            title: "Skills",
            content: (
              <div className="grid grid-cols-3 gap-3 text-center">
                
                {/* HTML */}
                <div className="flex flex-col items-center group">
                  <FaHtml5 className="text-lg text-gray-300 group-hover:text-orange-500 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    HTML
                  </span>
                </div>

                {/* Tailwind */}
                <div className="flex flex-col items-center group">
                  <SiTailwindcss className="text-lg text-gray-300 group-hover:text-sky-400 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    Tailwind CSS
                  </span>
                </div>

                {/* JavaScript */}
                <div className="flex flex-col items-center group">
                  <SiJavascript className="text-lg text-gray-300 group-hover:text-yellow-400 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    JavaScript
                  </span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center group">
                  <FaReact className="text-lg text-gray-300 group-hover:text-cyan-400 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    React
                  </span>
                </div>

                {/* Redux */}
                <div className="flex flex-col items-center group">
                  <SiRedux className="text-lg text-gray-300 group-hover:text-purple-500 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    Redux
                  </span>
                </div>

                {/* GitHub */}
                <div className="flex flex-col items-center group">
                  <FaGitAlt className="text-lg text-gray-300 group-hover:text-orange-600 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    Git / GitHub
                  </span>
                </div>

                {/* Figma */}
                <div className="flex flex-col items-center group">
                  <SiFigma className="text-lg text-gray-300 group-hover:text-pink-500 transition duration-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                    Figma
                  </span>
                </div>

              </div>
            ),
          },

        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/5 backdrop-blur-xl
                      border border-white/10 rounded-2xl p-6
                      shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                      transition-all duration-500
                      hover:bg-white/10
                      hover:border-white/20
                      hover:shadow-[0_8px_40px_rgba(101,148,177,0.25)]
                      hover:-translate-y-1"
                    >
            <h3 className="text-xl font-semibold mb-4 text-[#6594B1]">
              {card.title}
            </h3>
            {card.content}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


