import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-bold text-foreground text-base" style={{ fontFamily: 'var(--font-heading)' }}>
          Oh Curio!
        </p>
        <p>{t("footer_rights")}</p>
        <div className="flex gap-6">
          <a href="mailto:hello@ohcurio.com" className="hover:text-foreground transition-colors">hello@ohcurio.com</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
