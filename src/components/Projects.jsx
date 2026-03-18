import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "GamePortal",
      description: t("projects.gameportalDesc"),
      stack: ["React", "Vite", "Browser Games", "Portal UI"],
      github: "https://github.com/",
      live: "https://gameportal.ink/",
    },
    {
      title: "ToolSite",
      description: t("projects.toolsiteDesc"),
      stack: ["React", "Next.js", "Tools Directory", "Calculators"],
      github: "https://github.com/",
      live: "https://www.toolsite.ink/",
    },
    {
      title: "Metrica Group",
      description: t("projects.metricaDesc"),
      stack: ["HTML", "CSS", "JavaScript", "Corporate Website"],
      github: "https://github.com/",
      live: "https://metricagroup.am/",
    },
    {
      title: "Armbucks",
      description: t("projects.armbucksDesc"),
      stack: ["WordPress", "E-commerce", "Store Setup"],
      github: "https://github.com/",
      live: "https://armbucks.com/",
    },
    {
      title: "Labbec",
      description: t("projects.labbecDesc"),
      stack: ["WordPress", "Catalog", "Product Pages"],
      github: "https://github.com/",
      live: "https://labbec.am/",
    },
    {
      title: "TrustyDriver",
      description: t("projects.trustyDesc"),
      stack: ["WordPress", "Service Website", "Booking / Contact"],
      github: "https://github.com/",
      live: "https://trustydriver.com/",
    },
    {
      title: "Win-Windows",
      description: t("projects.windowsDesc"),
      stack: ["WordPress", "Product Website", "Corporate Landing"],
      github: "https://github.com/",
      live: "https://win-windows.com/",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="card project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-stack">
                {project.stack.map((item, i) => (
                  <span key={i} className="project-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                  <FiGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Site
                  <FiExternalLink />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;