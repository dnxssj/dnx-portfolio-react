import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const projects = [
  {
    title: "Bee Management System",
    description: "Fullstack application for managing beekeeping operations.",
    highlights: [
      "QR-based hive tracking",
      "Secure authentication",
      "Centralized data management"
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "QR Code"
    ],
    github: "#",
    demo: "#",
    image: "/images/beeweb.png"
  },
  {
    title: "Task Manager App",
    description: "Manage tasks with deadlines, reminders and calendar sync.",
    highlights: [
      "Never miss deadlines",
      "Calendar integration",
      "Clear task overview"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Google Calendar API"],
    github: "https://github.com/dnxssj/todo-app",
    demo: "https://dnx-app-todo.ct.ws/views/login.php",
    image: "/images/image2.png"
  },
  {
    title: "DNX Portfolio",
    description: "Modern developer portfolio with animations and responsive design.",
    highlights: [
      "Clean UI/UX",
      "Smooth animations",
      "Fully responsive"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/dnxssj/portfolio",
    demo: "dnx-portfolio-react.vercel.app",
    image: "/images/image4.png"
  },
  {
    title: "Anime List App",
    description: "Search and track anime using the Jikan API.",
    technologies: ["React", "Axios", "Jikan API"],
    github: "https://github.com/dnxssj/anime-app",
    demo: "#"
  },
  {
    title: "Server Discord Bot",
    description: "Custom Discord bot with roles, music and moderation.",
    technologies: ["Node.js", "Discord.js", "Glitch"],
    github: "https://github.com/dnxssj/discord-bot",
    demo: "#"
  },
  {
    title: "Portfolio for Illustrator",
    description: "Minimal link hub for a digital illustrator.",
    technologies: ["HTML", "Tailwind CSS", "Vite"],
    github: "https://github.com/dnxssj/portfolio-illustrator",
    demo: "https://portfolio-illustrator-lerka.vercel.app/",
    image: "/images/image3.png"
  },
  {
    title: "Toplist RubyServer",
    description: "Community ranking system with user profiles.",
    technologies: ["Express", "MongoDB", "Node.js"],
    github: "https://github.com/dnxssj/ruby-server",
    demo: "https://www.rubyserver.org/",
    image: "/images/image1.png"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="min-h-screen max-w-6xl mx-auto px-4 pt-16 pb-32 text-center scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-crema mb-16">
        Projekte
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* IMAGE */}
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* CONTENT */}
            <div className="relative z-10 p-6 backdrop-blur-md bg-black/30 rounded-xl text-left">

              {/* TITLE + BADGE */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-crema group-hover:text-turquesa transition">
                  {proj.title}
                </h3>

                {proj.title === "Bee Management System" && (
                  <span className="text-[10px] text-turquesa bg-turquesa/10 px-1 py-[1px] rounded-full">
                    In Progress
                  </span>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="text-crema/80 mb-3">
                {proj.description}
              </p>

              {/* HIGHLIGHTS */}
              {proj.highlights && (
                <ul className="text-xs text-crema/70 mb-3 space-y-1">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-turquesa">✔</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-turquesa text-fondo px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-turquesa hover:underline"
                >
                  Source Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  className="text-turquesa hover:underline"
                >
                  Live Demo
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* GITHUB */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-crema mb-6 text-center">
          Development Activity
        </h3>
        <div className="flex justify-center overflow-x-auto">
          <GitHubCalendar
            username="dnxssj"
            blockSize={15}
            blockMargin={5}
            color="#2ee9a4"
            fontSize={14}
          />
        </div>
      </div>
    </motion.section>
  );
}