import { useLanguage, Language } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-muted transition-colors text-sm font-medium focus:outline-none">
        <Globe className="w-4 h-4 text-primary" />
        <span>{languages.find((l) => l.code === language)?.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border border-border rounded-xl shadow-xl p-1">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm transition-colors ${
              language === l.code ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"
            }`}
            onClick={() => setLanguage(l.code)}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
