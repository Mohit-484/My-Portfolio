import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white 
    flex flex-col lg:flex-row 
    items-center justify-center 
    px-6 sm:px-10 lg:px-16 
    py-16 gap-16">
      
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        initial="hidden"
        animate="visible"
        variants={{
            hidden: {},
            visible: {
            transition: { staggerChildren: 0.2 }
            }
        }}
        >

        <motion.h1 
         variants={{
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"

         >
          Hey!!! <br /> 
          I'm <span className="text-[#008DDA] "> Mohit,</span> <br />
          <span className="bg-linear-to-r from-white to-gray-600 bg-clip-text text-transparent">Front-End Developer</span>
        </motion.h1>

        <motion.p  
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1 }}
        className="text-gray-400 max-w-md mx-auto lg:mx-0">
          I create modern, responsive, and user-friendly web interfaces 
          using React.js and latest frontend technologies.
        </motion.p>


        {/* Social Links */}
        <motion.div 
         variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1 }}
        className="flex gap-6 text-2xl pt-4">
          <a
            href="https://www.linkedin.com/in/mohit-selokar-046a9b318/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Mohit-484"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/mohit_selokar11/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>

    {/* RIGHT SIDE */}
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">


  {/* Soft Glow Background */}
  <div className="absolute w-[250px] sm:w-[350px] lg:w-[420px] 
    h-[250px] sm:h-[350px] lg:h-[420px] 
    bg-white/5 blur-3xl rounded-full"></div>


  <motion.img
    src="public/code.png"
    alt="code icon"
    className="w-[220px] sm:w-[300px] lg:w-[380px] relative z-10 cursor-pointer"

    
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}

    whileHover={{
      y: -10,
      scale: 1.04,
      transition: { duration: 0.3 }
    }}
  />

</div>


    </section>
  );
}
