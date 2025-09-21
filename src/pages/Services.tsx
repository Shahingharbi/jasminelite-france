import { Link } from "react-router-dom";
import { CheckCircle, Camera, Calendar, Users, Home, Zap, Shield, Brush } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-services.jpg";
import serviceListingImage from "@/assets/service-listing.jpg";
import servicePhotoImage from "@/assets/service-photo.jpg";
import serviceCommunicationImage from "@/assets/service-communication.jpg";
import serviceMaintenanceImage from "@/assets/service-maintenance.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container-custom">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-white leading-tight">
                Nos services de conciergerie haut de gamme
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Une gamme complète de services pour maximiser vos revenus locatifs 
                et vous offrir une tranquillité d'esprit totale.
              </p>
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button className="btn-golden text-lg px-8 py-4 w-full max-w-xs mx-auto sm:w-auto">
                  Demander un devis 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details - 4 Blocs Alternés */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="space-y-24">
            
            {/* Bloc 1: Création d'annonce */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-golden rounded-xl flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    Création d'annonce optimisée
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Nous créons des annonces attractives et optimisées pour maximiser votre visibilité 
                  sur toutes les plateformes de location saisonnière. Notre expertise du marché 
                  en Haute Savoie nous permet de cibler les bons mots-clés et d'attirer les voyageurs idéaux.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Rédaction optimisée SEO pour chaque plateforme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Mise en valeur des points forts de votre propriété</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Traduction professionnelle en plusieurs langues</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Diffusion sur Airbnb, Booking.com, et autres plateformes</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={serviceListingImage} 
                    alt="Création d'annonce professionnelle" 
                    width="500"
                    height="320"
                    className="w-full h-80 object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* Bloc 2: Photographie professionnelle */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-golden rounded-xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    Photographie professionnelle
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Des photos de qualité exceptionnelle qui subliment votre propriété et attirent 
                  plus de réservations. Nos photographes experts savent mettre en valeur chaque 
                  espace pour créer l'émotion et le désir chez vos futurs invités.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Séance photo complète intérieure et extérieure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Retouche professionnelle et mise en valeur</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Photos haute résolution optimisées web</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Mise à jour saisonnière si nécessaire</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={servicePhotoImage} 
                    alt="Photographie professionnelle d'intérieur" 
                    width="500"
                    height="320"
                    className="w-full h-80 object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* Bloc 3: Communication voyageurs / calendrier / check-in */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-golden rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    Gestion voyageurs & accueil
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Nous prenons en charge toute la communication avec vos invités, de la réservation 
                  au départ. Notre équipe professionnelle assure un accueil chaleureux et un 
                  service client d'exception 24h/24 et 7j/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Gestion calendrier multi-plateformes synchronisé</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Communication pré-arrivée et instructions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Check-in et check-out personnalisés</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Support client 24/7 pendant le séjour</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Gestion des urgences et problèmes techniques</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={serviceCommunicationImage} 
                    alt="Service clientèle et accueil des voyageurs" 
                    width="500"
                    height="320"
                    className="w-full h-80 object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* Bloc 4: Entretien, nettoyage, maintenance */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-golden rounded-xl flex items-center justify-center">
                    <Brush className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    Entretien & maintenance complète
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Votre propriété reste impeccable et fonctionnelle en permanence. Notre équipe 
                  de professionnels qualifiés s'occupe de tout : du nettoyage approfondi à la 
                  maintenance préventive, en passant par les réparations d'urgence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Nettoyage professionnel après chaque départ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Blanchisserie et repassage du linge</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Maintenance préventive et réparations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Gestion des stocks et réapprovisionnement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Intervention d'urgence 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={serviceMaintenanceImage} 
                    alt="Services de nettoyage et maintenance" 
                    width="500"
                    height="320"
                    className="w-full h-80 object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elegant bg-card">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-golden rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                  Tarification simple et transparente
                </h2>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                    <strong className="text-accent">Commission unique : 20% HT</strong> sur chaque réservation confirmée
                  </p>
                  <p className="text-lg text-foreground/70">
                    Aucun frais caché, aucun abonnement mensuel. Vous ne payez que quand vous gagnez !
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-primary mb-1">Zéro risque</h3>
                    <p className="text-sm text-foreground/60">Pas de revenus = pas de frais</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-primary mb-1">Paiement simple</h3>
                    <p className="text-sm text-foreground/60">Commission prélevée automatiquement</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-primary mb-1">ROI garanti</h3>
                    <p className="text-sm text-foreground/60">Rentabilité optimisée</p>
                  </div>
                </div>
                <div className="pt-6">
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button className="btn-golden text-base px-6 py-3 w-full max-w-sm mx-auto sm:w-auto sm:text-lg">
                      Contactez-nous
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;