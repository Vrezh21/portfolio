import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiGithub, FiMail, FiSend } from "react-icons/fi";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="card contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.text")}</p>

          <div className="contact-actions">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
              <FiGithub />
            </a>

            <a
              href="mailto:vrezhgyulnazaryan@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Email
              <FiMail />
            </a>

            <a
              href="https://t.me/vrezhcoder"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Telegram
              <FiSend />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;