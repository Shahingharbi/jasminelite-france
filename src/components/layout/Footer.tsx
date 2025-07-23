import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <img 
              src="/src/assets/logo-jasminelite.png" 
              alt="JasminElite" 
              className="h-10 w-auto"
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
                Accueil
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                À propos
              </Link>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-alice text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+213555123456" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+213 555 123 456</span>
              </a>
              <a 
                href="mailto:contact@jasminelite.com" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contact@jasminelite.com</span>
              </a>
              <div className="flex items-start space-x-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Alger, Algérie</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 JasminElite. Tous droits réservés.</p>
            <p className="mt-2 md:mt-0">Conçu avec passion en Algérie</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;