import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:bg-accent/10 transition-colors"
    >
      <span className="text-sm font-medium">
        {language === 'fr' ? '🇫🇷 FR' : '🇸🇦 عـ'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;