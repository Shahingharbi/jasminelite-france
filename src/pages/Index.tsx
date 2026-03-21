import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Users, Shield, Sparkles, Camera, Calendar, Zap, Home, Brush, Shirt, MapPin, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { EstimationModal } from "@/components/ui/EstimationModal";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-home.jpg";
import stepAuditImage from "@/assets/step-audit.jpg";
import stepListingImage from "@/assets/step-listing.jpg";
import stepManagementImage from "@/assets/step-management.jpg";
import appart1 from "@/assets/appart-1.jpg";
import appart2 from "@/assets/appart-2.jpg";
import appart3 from "@/assets/appart-3.jpg";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jasmineliteconcierge.fr/#business",
      "name": "JasminElite Conciergerie",
      "image": "https://www.jasmineliteconcierge.fr/assets/logo-jasminelite-XDjmUPu7.png",
      "url": "https://jasmineliteconcierge.fr/",
      "telephone": "+33746281014",
      "email": "contact@jasmineliteconcierge.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Annemasse",
        "addressLocality": "Annemasse",
        "postalCode": "74100",
        "addressRegion": "Haute-Savoie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 46.1952,
        "longitude": 6.2344
      },
      "areaServed": [
        { "@type": "City", "name": "Annemasse" },
        { "@type": "City", "name": "La Roche-sur-Foron" },
        { "@type": "City", "name": "Collonges-sous-Salève" },
        { "@type": "City", "name": "Saint-Jean-de-Sixt" },
        { "@type": "AdministrativeArea", "name": "Haute-Savoie" }
      ],
      "priceRange": "$$",
      "description": "Conciergerie haut de gamme à Annemasse spécialisée dans la gestion locative saisonnière. Services Airbnb, Booking.com, check-in/out, ménage, photographie professionnelle.",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte la conciergerie JasminElite à Annemasse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JasminElite applique une commission unique de 20% HT sur chaque réservation confirmée. Aucun frais fixe, aucun abonnement mensuel. Vous ne payez que lorsque vous percevez des revenus."
          }
        },
        {
          "@type": "Question",
          "name": "Quels services propose la conciergerie JasminElite à Annemasse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JasminElite propose la gestion complète de vos locations saisonnières : création et optimisation d'annonces Airbnb et Booking.com, photographie professionnelle, gestion du calendrier, communication voyageurs 24/7, check-in et check-out personnalisés, ménage professionnel, blanchisserie et maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Dans quelles zones intervenez-vous autour d'Annemasse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JasminElite intervient dans toute la Haute-Savoie : Annemasse, La Roche-sur-Foron, Collonges-sous-Salève, Saint-Jean-de-Sixt, et les zones frontalières avec Genève (canton de Vaud). Contactez-nous pour vérifier la disponibilité dans votre commune."
          }
        },
        {
          "@type": "Question",
          "name": "Combien puis-je gagner avec la location saisonnière à Annemasse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos clients constatent en moyenne une augmentation de 40% de leurs revenus locatifs grâce à notre optimisation tarifaire dynamique et notre gestion professionnelle. Demandez votre estimation gratuite pour connaître le potentiel exact de votre bien."
          }
        },
        {
          "@type": "Question",
          "name": "La conciergerie JasminElite gère-t-elle les annonces Airbnb à Annemasse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, JasminElite est spécialisée dans la gestion Airbnb à Annemasse. Nous créons et optimisons vos annonces, gérons les réservations, répondons aux voyageurs et assurons tous les services opérationnels pour maximiser votre taux d'occupation."
          }
        }
      ]
    }
  ]
};

const Index = () => {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollingItems = [
    "Toute l'Haute Savoie",
    "Revenus complémentaires",
    "Taux d'occupation élevé",
    "Zéro tracas, 100% sérénité"
  ];

  const services = [
    {
      icon: Home,
      title: "Création d'annonce",
      description: "Rédigeons et optimisons vos annonces Airbnb & Booking pour maximiser votre visibilité"
    },
    {
      icon: Camera,
      title: "Photographie professionnelle",
      description: "Photos haute qualité qui mettent en valeur votre propriété"
    },
    {
      icon: Zap,
      title: "Optimisation tarifaire",
      description: "Pricing dynamique pour optimiser vos revenus locatifs"
    },
    {
      icon: Calendar,
      title: "Gestion de calendrier",
      description: "Synchronisation multi-plateformes et gestion des disponibilités"
    },
    {
      icon: Users,
      title: "Suivi des voyageurs",
      description: "Communication professionnelle et assistance 24/7"
    },
    {
      icon: Shield,
      title: "Check-in/out",
      description: "Accueil personnalisé et remise des clés sécurisée"
    },
    {
      icon: Brush,
      title: "Nettoyage",
      description: "Service de ménage professionnel après chaque séjour"
    },
    {
      icon: Shirt,
      title: "Blanchisserie",
      description: "Nettoyage et repassage du linge de maison"
    },
    {
      icon: Sparkles,
      title: "Maintenance",
      description: "Entretien préventif et réparations d'urgence"
    }
  ];

  const faqs = [
    {
      question: "Combien coûte la conciergerie à Annemasse ?",
      answer: "JasminElite applique une commission unique de 20% HT sur chaque réservation confirmée. Aucun frais fixe, aucun abonnement. Vous ne payez que lorsque vous gagnez."
    },
    {
      question: "Quels services propose votre conciergerie à Annemasse ?",
      answer: "Nous prenons en charge la gestion complète : création d'annonce Airbnb optimisée, photographie professionnelle, gestion du calendrier multi-plateformes, communication voyageurs 24/7, check-in/out personnalisé, ménage, blanchisserie et maintenance."
    },
    {
      question: "Dans quelles zones de Haute-Savoie intervenez-vous ?",
      answer: "JasminElite intervient à Annemasse et dans toute la Haute-Savoie : La Roche-sur-Foron, Collonges-sous-Salève, Saint-Jean-de-Sixt, et les zones frontalières avec Genève. Contactez-nous pour vérifier la disponibilité dans votre commune."
    },
    {
      question: "Combien puis-je gagner avec la location saisonnière à Annemasse ?",
      answer: "Nos clients constatent en moyenne une augmentation de 40% de leurs revenus grâce à notre pricing dynamique et notre gestion professionnelle. Demandez votre estimation gratuite pour connaître le potentiel exact de votre bien."
    },
    {
      question: "Gérez-vous les annonces Airbnb à Annemasse ?",
      answer: "Oui, nous sommes spécialisés dans la gestion Airbnb à Annemasse. Nous créons et optimisons vos annonces, gérons les réservations et assurons tous les services pour maximiser votre taux d'occupation."
    }
  ];

  const zones = [
    "Annemasse", "La Roche-sur-Foron", "Collonges-sous-Salève",
    "Saint-Jean-de-Sixt", "Haute-Savoie", "Genève"
  ];

  return (
    <Layout>
      <SEO
        title="Conciergerie Annemasse | JasminElite — Gestion Locative Haute-Savoie"
        description="Conciergerie haut de gamme à Annemasse. JasminElite gère vos locations saisonnières Airbnb : annonce, ménage, check-in/out, photographie. +40% de revenus. Devis gratuit."
        canonical="/"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="relative container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-primary leading-tight">
                  Votre conciergerie de confiance à Annemasse
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Maximisez vos revenus locatifs avec notre service de gestion locative d'excellence en Haute-Savoie.
                  Nous gérons tout de A à Z — Airbnb, Booking.com et plus — pour que vous profitez de vos investissements en toute sérénité.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  onClick={() => setIsEstimationModalOpen(true)}
                  className="btn-golden text-lg px-8 py-4 w-full sm:w-auto"
                >
                  Estimez vos revenus
                </Button>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full sm:w-auto">
                    Découvrez nos services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <section className="bg-card py-6 border-y border-border">
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                {scrollingItems.map((item, index) => (
                  <div key={`${setIndex}-${index}`} className="flex items-center mx-8">
                    <Star className="w-5 h-5 text-accent mr-3" />
                    <span className="text-lg font-medium whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary mb-4">
              Conciergerie à Annemasse : Comment ça marche ?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Un processus simple et efficace pour optimiser vos revenus locatifs en Haute-Savoie
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    Audit gratuit de votre bien
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Nous analysons votre propriété, le marché locatif local et définissons ensemble
                  la stratégie optimale pour maximiser vos revenus. Notre expertise de la
                  gestion locative en Haute-Savoie nous permet de vous proposer les meilleures solutions.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Évaluation du potentiel locatif Airbnb</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Analyse de la concurrence à Annemasse</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Recommandations d'amélioration</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img
                    src={stepAuditImage}
                    alt="Audit professionnel de propriété Annemasse"
                    width="500"
                    height="320"
                    className="w-full h-full object-cover rounded-xl min-h-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    Mise en ligne optimisée
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Nous créons des annonces attractives avec des photos professionnelles
                  et un descriptif optimisé. Votre bien est mis en ligne sur Airbnb,
                  Booking.com et toutes les plateformes principales pour maximiser la visibilité.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-accent" />
                    <span>Séance photo professionnelle</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>Gestion multi-plateformes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Optimisation SEO des annonces</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img
                    src={stepListingImage}
                    alt="Optimisation d'annonces Airbnb Annemasse"
                    width="500"
                    height="320"
                    className="w-full h-full object-cover rounded-xl min-h-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    Gestion locative complète et sérénité
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Relaxez-vous ! Nous nous occupons de tout : accueil des voyageurs,
                  nettoyage, maintenance, communication. Vous recevez vos revenus
                  directement, sans aucun tracas.
                </p>
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button className="btn-golden text-lg px-8 py-4 mt-6 w-full max-w-xs mx-auto sm:w-auto">
                    Commencer maintenant
                  </Button>
                </Link>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img
                    src={stepManagementImage}
                    alt="Gestion locative complète Haute-Savoie"
                    width="500"
                    height="320"
                    className="w-full h-full object-cover rounded-xl min-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                Nos services de conciergerie
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Une gamme complète de services pour optimiser votre gestion locative à Annemasse et en Haute-Savoie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="card-elegant group hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-alice font-semibold text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-block w-full sm:w-auto">
              <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full max-w-xs mx-auto sm:w-auto">
                Découvrez tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                Nos biens en gestion
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Des logements soigneusement entretenus pour offrir une expérience haut de gamme à chaque voyageur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
              <img
                src={appart1}
                alt="Appartement en gestion JasminElite Annemasse"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
              <img
                src={appart2}
                alt="Location saisonnière gérée par JasminElite"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
              <img
                src={appart3}
                alt="Appartement Airbnb Annemasse géré par JasminElite"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                Zones d'intervention
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Conciergerie et gestion locative dans toute la Haute-Savoie et région frontalière
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {zones.map((zone) => (
              <div key={zone} className="flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-sm border border-border">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-medium text-primary">{zone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary mb-4">
                Questions fréquentes sur notre conciergerie à Annemasse
              </h2>
              <p className="text-lg text-foreground/70">
                Tout ce que vous devez savoir sur notre service de gestion locative
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="card-elegant">
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-alice font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-foreground/70 leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button className="btn-golden text-lg px-8 py-4 w-full max-w-xs mx-auto sm:w-auto">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - hidden for now */}
      <section className="section-spacing hidden">
        <div className="container-custom"></div>
      </section>

      {/* Estimation Modal */}
      <EstimationModal
        isOpen={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
      />
    </Layout>
  );
};

export default Index;
