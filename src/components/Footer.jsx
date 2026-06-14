import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Ajithkumar</h2>
      <p>Full Stack Developer | React | Angular | Node.js | Shopify</p>
      <div className="socials">
        <a
          href="https://github.com/ajith-fullstack"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ajithkumar-p-87817b248"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:ajithkumar31.p@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">© 2026 Ajithkumar. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
