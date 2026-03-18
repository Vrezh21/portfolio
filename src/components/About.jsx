import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="card about-split"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-visual-wrap">
            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="scene-glow scene-glow-1"></div>
              <div className="scene-glow scene-glow-2"></div>

              <div className="coder">
                <div className="coder-head">
                  <div className="coder-hood"></div>
                </div>

                <div className="coder-body"></div>

                <motion.div
                  className="laptop"
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="laptop-screen">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h2>{t("about.title")}</h2>
            <p>{t("about.text")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;