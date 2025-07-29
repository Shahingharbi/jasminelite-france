import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const logoImage = "/lovable-uploads/ea6e764a-6e4a-43d5-a7a4-8ba7f24f1d78.png";

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? 'text-right' : ''}`}>
          {/* Logo et Description */}
          <div className="space-y-4">
            <img 
              src={logoImage}
              alt="JasminElite" 
              className="h-28 w-auto"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre conciergerie haut de gamme en Algérie. Nous maximisons vos revenus locatifs 
              avec un service d'excellence et une tranquillité d'esprit totale.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-alice text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                {t.nav.home}
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                {t.nav.services}
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                {t.nav.about}
              </Link>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                {t.nav.blog}
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-alice text-lg font-semibold">{t.nav.contact}</h3>
            <div className="space-y-3">
              <a 
                href="tel:+213555123456" 
                className={`flex items-center text-primary-foreground/80 hover:text-accent transition-colors text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Phone className="w-4 h-4" />
                <span>{t.footer.phone}</span>
              </a>
              <a 
                href="mailto:contact@jasmineliteconcierge.com" 
                className={`flex items-center text-primary-foreground/80 hover:text-accent transition-colors text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Mail className="w-4 h-4" />
                <span>contact@jasmineliteconcierge.com</span>
              </a>
              <div className={`flex items-start text-primary-foreground/80 text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Alger, Algérie</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className={`flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p>&copy; 2024 JasminElite. {t.footer.rights}</p>
            <p className="mt-2 md:mt-0">Conçu avec passion en Algérie</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;