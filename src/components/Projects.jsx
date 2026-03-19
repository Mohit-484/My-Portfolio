import { motion } from "framer-motion";

const projects = [
  {
    title: "Employee Task Management",
    description:
      "Built a React-based task management application that allows an admin to assign, track, and manage tasks for employees.",
    image: "/images/ems.png", 
    live: "https://employee-task-management-ten.vercel.app/",
    github: "https://github.com/Mohit-484/Employee-Management-Dashboard",
  },
  {
    title: "Media Search Gallery",
    description:
      "Built a Media Search Gallery project using React and Redux Toolkit that allows users to search and explore photos and videos using third-party API.",
    image: "/images/media-gallery.jpg",
    live: "https://media-search-gallery-project.vercel.app/",
    github: "https://github.com/Mohit-484/Media-Search-Project",
  },
  {
    title: "Beginner-level Projects",
    description:
      "Lots of other frontend beginner-level projects available in my github repositories.",
    image: "/images/gitlogo.png",
    live: "https://github.com/Mohit-484?tab=repositories",
    github: "https://github.com/Mohit-484?tab=repositories",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24 "
    >
      {/* Premium Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-semibold mb-10 -mt-5 tracking-tight"
      >
        <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative bg-white/5 backdrop-blur-xl
                      border border-white/10 rounded-2xl 
                      shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                      transition-all duration-500
                      hover:bg-white/10
                      hover:border-white/20
                      hover:shadow-[0_8px_40px_rgba(101,148,177,0.25)]
                      hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-2xl object-cover transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 text-sm rounded-full 
                            bg-white text-black font-medium 
                            hover:scale-105 transition"
                >
                  Live Project
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 text-sm rounded-full 
                            border border-white/30 
                            hover:bg-white hover:text-black 
                            transition"
                >
                  Check on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
