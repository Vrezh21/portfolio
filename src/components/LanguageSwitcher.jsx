import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-switcher">
      <button onClick={() => changeLanguage("ru")} type="button">
        RU
      </button>
      <button onClick={() => changeLanguage("en")} type="button">
        EN
      </button>
      <button onClick={() => changeLanguage("hy")} type="button">
        HY
      </button>
    </div>
  );
}

export default LanguageSwitcher;