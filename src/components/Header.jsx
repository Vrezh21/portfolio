import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="logo">
          Vrezh 's<span> Portfolio</span>
        </a>

        <nav className="nav">
          <a href="#hero">{t("nav.home")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#ai">{t("nav.ai")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;