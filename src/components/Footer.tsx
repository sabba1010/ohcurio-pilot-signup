import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-sm text-muted-foreground">
        <p>{t("footer_rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
