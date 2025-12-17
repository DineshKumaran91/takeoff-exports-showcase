import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'fil', name: 'Filipino', flag: '🇵🇭' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(
    languages.find(l => l.code === i18n.language) || languages[0]
  );

  const handleSelect = (lang: Language) => {
    setSelected(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang.code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-colors duration-200"
      >
        <span className="text-lg">{selected.flag}</span>
        <span className="text-sm font-medium text-foreground hidden sm:block">{selected.name}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 z-50 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[180px] max-h-[300px] overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-primary/10 transition-colors duration-150 ${
                  selected.code === lang.code ? 'bg-primary/10' : ''
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-foreground">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
