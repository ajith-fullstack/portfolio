import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecommerce from "../assets/ecommerce.png";
import ai_seo from "../assets/AI-seo.png";
import jwt_auth from "../assets/jwt_auth.png";
const projects = [
  {
    title: "Ecommerce Site",
    image: ecommerce,
    description:
      "Built a responsive e-commerce Website with React.js featuring product listing, search, cart management, user authentication, Razorpay integration, protected routes, and reusable components.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Razorpay API",
    ],
    github: "https://github.com/ajith-fullstack/react-ecommerce-frontend",
    live: "https://ecommerce.ajithfullstackdev.in",
  },
  {
    title: "AI SEO Metadata Generator",
    image: ai_seo,
    description:
      "Built an AI-powered SEO metadata generator using Express.js, Node.js, and Google Gemini API to generate optimized titles, meta descriptions, and keywords for improved search engine visibility.",
    tech: ["Node.js", "Express.js", "Google Gemini API"],
    github: "https://github.com/ajith-fullstack/ai-seo-metadata-generator",
    live: "https://seo.ajithfullstackdev.in/",
  },
  {
    title: "JWT Authentication System",
    image: jwt_auth,
    description:
      "Built a secure JWT authentication system with user registration, login, protected routes, role-based access control (RBAC), bcrypt password hashing, and refresh token authentication using HTTP-only cookies.",
    tech: ["Express.js", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/ajith-fullstack/jwt-auth-example",
    live: "https://github.com/ajith-fullstack/jwt-auth-example",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Some things I've built</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
