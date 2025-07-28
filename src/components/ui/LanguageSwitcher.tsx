import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-card/50 rounded-lg p-1 border border-border">
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-sm font-medium transition-all ${
          language === 'fr' 
            ? 'bg-accent text-white' 
            : 'text-foreground hover:text-accent'
        }`}
      >
        FR
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-sm font-medium transition-all ${
          language === 'ar' 
            ? 'bg-accent text-white' 
            : 'text-foreground hover:text-accent'
        }`}
      >
        عـ
      </Button>
    </div>
  );
};

export default LanguageSwitcher;