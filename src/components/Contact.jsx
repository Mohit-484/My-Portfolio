import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen bg-black text-white px-6 md:px-20 py-28"
    >
      {/* Premium Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-semibold text-center tracking-tight"
      >
        <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Contact Me
        </span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-gray-400 text-center max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. If you're looking for a
        passionate frontend developer who cares about performance and design —
        let's connect.
      </motion.p>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
        
        {/* Email */}
        <MagneticButton
          icon={<HiOutlineMail size={22} />}
          text="Email"
          link="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRspxZzxLBZcgtCCtLTKZwGwckWJJnrbJRjxDDHZMbbFvxrksFLDkrNCzPpQsQXSJvdvMml"
        />

        {/* LinkedIn */}
        <MagneticButton 
          icon={<FaLinkedin size={22} />}
          text="LinkedIn"
          link="https://www.linkedin.com/in/mohit-selokar-046a9b318/"
        />

        {/* GitHub */}
        <MagneticButton
          icon={<FaGithub size={22} />}
          text="GitHub"
          link="https://github.com/Mohit-484"
        />

        {/* Instagram */}
        <MagneticButton
          icon={<FaInstagram size={22} />}
          text="Instagram"
          link="https://www.instagram.com/mohit_selokar11/?hl=en"
        />
      </div>
    </motion.section>
  );
}

/* -------- Magnetic Glass Button -------- */

function MagneticButton({ icon, text, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        group
        flex items-center justify-center gap-3
        bg-white/5 backdrop-blur-xl
        border border-white/10
        text-white
        py-5 rounded-2xl
        text-lg font-medium
        transition-all duration-500
        hover:border-white/30
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
      "
    >
      <span className="text-gray-300 group-hover:text-white transition duration-300">
        {icon}
      </span>

      <span className="text-gray-300 group-hover:text-white transition duration-300">
        {text}
      </span>
    </motion.a>
  );
}
