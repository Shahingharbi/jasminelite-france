import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = sessionStorage.getItem('cookieConsent');
    if (!consent) {
      // Attendre 1 seconde avant d'afficher la bannière pour une meilleure UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    sessionStorage.setItem('cookieConsent', 'accepted');
    sessionStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Ici tu peux activer Google Analytics si tu l'utilises
    // window.gtag('consent', 'update', { analytics_storage: 'granted' });
    console.log('✅ Cookies acceptés');
  };

  const handleRefuse = () => {
    sessionStorage.setItem('cookieConsent', 'refused');
    sessionStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    console.log('❌ Cookies refusés - Seuls les cookies essentiels sont actifs');
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay sombre en arrière-plan */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleRefuse}
      />
      
      {/* Bannière cookies */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-amber-500 z-50 animate-slide-up">
        <div className="max-w-6xl mx-auto p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            
            {/* Icône cookie */}
            <div className="flex-shrink-0 text-5xl">
              🍪
            </div>
            
            {/* Contenu */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nous utilisons des cookies
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Ce site utilise des cookies pour améliorer votre expérience de navigation, 
                analyser notre trafic et vous proposer du contenu personnalisé. En cliquant 
                sur "Tout accepter", vous consentez à l'utilisation de tous les cookies.
              </p>
              <Link 
                to="/cookies" 
                className="text-amber-600 hover:text-amber-700 hover:underline text-sm font-medium inline-flex items-center"
              >
                📄 En savoir plus sur notre politique de cookies
              </Link>
            </div>
            
            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleRefuse}
                className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-300 whitespace-nowrap"
              >
                Refuser
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                ✓ Tout accepter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;