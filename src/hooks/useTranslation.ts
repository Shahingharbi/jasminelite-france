import { useLanguage } from '@/contexts/LanguageContext';
import { fr } from '@/translations/fr';
import { ar } from '@/translations/ar';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const translations = {
    fr,
    ar
  };
  
  return translations[language];
};