import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPaypal,
} from "react-icons/fa";

import {
  SiAngular,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiShopify,
  SiBigcommerce,
  SiDart,
  SiFlutter,
  SiPostman,
  SiGooglecloud,
  SiGoogle,
} from "react-icons/si";

import { TbBrandOauth } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

const skills = [
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <SiDart />, name: "Dart", color: "#0175C2" },
  { icon: <TbBrandOauth />, name: "Liquid", color: "#4A90E2" },
  { icon: <FaReact />, name: "React.js", color: "#61DBFB" },
  { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
  { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
  { icon: <SiExpress />, name: "Express.js", color: "#444444" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#13AA52" },
  { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
  { icon: <SiShopify />, name: "Shopify", color: "#95BF47" },
  { icon: <SiBigcommerce />, name: "BigCommerce", color: "#121118" },
  { icon: <SiGoogle />, name: "Gemini API", color: "#4285F4" },
  { icon: <FaPaypal />, name: "PayPal API", color: "#003087" },
  { icon: <RiSecurePaymentFill />, name: "Razorpay API", color: "#0C63E7" },
  { icon: <TbBrandOauth />, name: "JWT", color: "#F59E0B" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <FaGithub />, name: "GitHub", color: "#181717" },
  { icon: <SiGooglecloud />, name: "Google Cloud", color: "#4285F4" },
];
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
