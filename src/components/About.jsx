import "./About.css";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Ajith Kumar" />
          <div className="experience-card">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Full Stack Developer</h3>
          <p>
            I'm a passionate Full Stack Developer with experience in React,
            Angular, Node.js, Express.js, MongoDB, Shopify App Development,
            GraphQL, REST APIs, Authentication Systems, and Payment Integration.
          </p>
          <p>
            I enjoy solving real-world problems and creating modern, responsive,
            and scalable web applications. My goal is to build software that
            provides a great user experience while maintaining clean and
            maintainable code.
          </p>

          <div className="about-cards">
            <div className="card">
              <FaBriefcase className="icon" />
              <h4>Experience</h4>
              <span>3+ Years</span>
            </div>

            <div className="card">
              <FaLaptopCode className="icon" />
              <h4>Projects</h4>
              <span>5+</span>
            </div>

            <div className="card">
              <FaUserGraduate className="icon" />
              <h4>Technologies</h4>
              <span>20+</span>
            </div>
          </div>
          <a href="/resume.pdf" className="download-btn" download="ajithkumar_resume.pdf">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
