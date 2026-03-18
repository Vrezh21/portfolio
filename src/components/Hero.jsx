import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiGithub, FiArrowDownRight } from "react-icons/fi";

function Hero() {
  const { t } = useTranslation();

  const stack = [
    "React.js",
    "Vite",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "WordPress",
    "AI Tools",
    "Vibe Coding",
    "Ads Developer",
    "Google Ad Manager",
    "AdSense",
    "Yandex / Adfox",
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-badge">{t("hero.badge")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              {t("hero.projects")}
              <FiArrowDownRight />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
              <FiGithub />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card card"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>

          <div className="hero-mini-label">{t("hero.stackLabel")}</div>

          <motion.ul
            className="hero-stack"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25, // интервал между элементами
                },
              },
            }}
          >
            {stack.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;