import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Vite" },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      title: "CMS",
      items: [
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Elementor" },
        { name: "Gutenberg" },
        { name: "Theme Setup" },
      ],
    },
    {
      title: "AI Tools",
      items: [
        { name: "ChatGPT" },
        { name: "Gemini" },
        { name: "AI Automation" },
        { name: "Prompting" },
      ],
    },
    {
      title: "Deployment & Hosting",
      items: [
        { name: "Domains" },
        { name: "Hosting" },
        { name: "Server Deploy" },
        { name: "Project Launch" },
      ],
    },
    {
      title: "AI Backend",
      items: [
        { name: "AI-assisted Backend" },
        { name: "API Integration" },
        { name: "Automation Logic" },
        { name: "Admin Panels" },
      ],
    },
    {
      title: "Ad Tech / Monetization",
      items: [
        { name: "Google Ad Manager" },
        { name: "AdSense" },
        { name: "Yandex Ads" },
        { name: "Adfox" },
        { name: "GPT Tags" },
        { name: "Ad Integration" },
        { name: "Header Bidding" },
      ],
    },
    {
      title: "Approach",
      items: [{ name: "Vibe Coding" }],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">{t("skills.title")}</h2>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="card skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{cat.title}</h3>

              <div className="skill-items">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="icon">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;