import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="px-6 py-12 border-t border-border mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 text-sm text-muted-foreground">
        
        <p className="text-center">{t("footer_rights")}</p>

        <a 
          href="mailto:hello@ohcurioapp.com" 
          className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span className="font-medium">hello@ohcurioapp.com</span>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
