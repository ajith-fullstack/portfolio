import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
      });
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Let's build something amazing together.</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect 👋</h3>
            <p className="contact-text">
              I'm actively looking for Full Stack Developer opportunities. If
              you're hiring for React, Angular, Node.js, MERN Stack, or Shopify
              development roles, feel free to reach out. I'd be excited to
              discuss how I can contribute to your team.
            </p>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:ajithkumar31.p@gmail.com">
                  ajithkumar31.p@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+919789325903">+91 9789325903</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span>Location</span>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/ajith-fullstack"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ajith-kumar-87817b248"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Write your message..."
              required
            ></textarea>
            <button type="submit">
              <FaPaperPlane />
              Send
            </button>
          </form>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}
