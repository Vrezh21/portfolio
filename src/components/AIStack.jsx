import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiCpu, FiZap, FiCode, FiLayers } from "react-icons/fi";

function AIStack() {
  const { t } = useTranslation();

  const aiCards = [
    {
      icon: <FiCpu />,
      title: t("ai.card1Title"),
      text: t("ai.card1Text"),
    },
    {
      icon: <FiZap />,
      title: t("ai.card2Title"),
      text: t("ai.card2Text"),
    },
    {
      icon: <FiCode />,
      title: t("ai.card3Title"),
      text: t("ai.card3Text"),
    },
    {
      icon: <FiLayers />,
      title: t("ai.card4Title"),
      text: t("ai.card4Text"),
    },
  ];

  return (
    <section id="ai">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t("ai.title")}</h2>
          <p className="section-subtitle">{t("ai.subtitle")}</p>
        </div>

        <div className="ai-grid">
          {aiCards.map((card, index) => (
            <motion.div
              key={index}
              className="card ai-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="ai-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIStack;