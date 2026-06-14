import "./Hero.css";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">👋 Hello, I'm</p>
        <h1>Ajithkumar</h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I'm a Full Stack Developer specializing in React, Angular, Node.js,
          Express.js, MongoDB, and Shopify development. I'm currently open to
          Full Stack Developer opportunities where I can build scalable,
          high-performance web applications and contribute to innovative teams.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">
            Hire Me
          </a>
          <a href="/ajithkumar_resume.pdf" className="btn secondary" download>
            <FaDownload />
            Resume
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/ajith-fullstack"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ajithkumar-p-87817b248"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ajithkumar31.p@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-box">
          <img src={profile} alt="Ajith Kumar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
