import { useLanguage } from '@/contexts/LanguageContext';
import { fr } from '@/translations/fr';
import { ar } from '@/translations/ar';

const translations = {
  fr,
  ar
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = translations[language];
  
  return { t, language };
};