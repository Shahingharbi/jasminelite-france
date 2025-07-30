import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import logoImage from "@/assets/logo-jasminelite.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const navigationItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img 
              src={logoImage} 
              alt="JasminElite" 
              className="h-28 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors hover:text-accent ${
                  isActiveLink(item.href) 
                    ? "text-accent" 
                    : "text-foreground"
                }`}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and Phone */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSwitcher />
            <a 
              href="tel:+213555123456" 
              className={`flex items-center text-accent hover:text-golden-hover transition-colors ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{t.footer.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className={`flex items-center lg:hidden ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-accent px-4 py-2 rounded-lg ${isRTL ? 'text-right' : 'text-left'} ${
                    isActiveLink(item.href) 
                      ? "text-accent bg-accent/10" 
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`px-4 pt-4 border-t border-border ${isRTL ? 'text-right' : 'text-left'}`}>
                <a 
                  href="tel:+213555123456" 
                  className={`flex items-center text-accent hover:text-golden-hover transition-colors ${isRTL ? 'space-x-reverse space-x-2 justify-end' : 'space-x-2'}`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t.footer.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;