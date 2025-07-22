import { Link } from "react-router-dom";
import { Star, Users, Shield, Sparkles, Camera, Calendar, Zap, Home, Brush, Shirt } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const scrollingItems = [
    "Toute l'Algérie",
    "Revenus complémentaires", 
    "Taux d'occupation élevé",
    "Zéro tracas, 100% sérénité"
  ];

  const services = [
    {
      icon: Home,
      title: "Création d'annonce",
      description: "Rédigeons et optimisons vos annonces pour maximiser votre visibilité"
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

  const testimonials = [
    {
      name: "Amina B.",
      location: "Alger",
      text: "Grâce à JasminElite, mes revenus locatifs ont augmenté de 40% ! Leur service est impeccable et je n'ai plus aucun souci de gestion.",
      rating: 5
    },
    {
      name: "Karim M.",
      location: "Oran",
      text: "Une équipe professionnelle et réactive. Mes invités sont toujours satisfaits de l'accueil et du service. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sarah L.",
      location: "Constantine",
      text: "Enfin une conciergerie qui comprend le marché algérien ! Service haut de gamme et tarifs transparents. Parfait pour mes appartements.",
      rating: 5
    }
  ];

  return (
    <Layout>
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
                  Votre conciergerie haut de gamme en Algérie
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Maximisez vos revenus locatifs avec notre service d'excellence. 
                  Nous gérons tout, de A à Z, pour que vous puissiez profiter 
                  de vos investissements en toute sérénité.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-golden text-lg px-8 py-4">
                    Contactez-nous
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white">
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
              Comment ça marche ?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Un processus simple et efficace pour optimiser vos revenus locatifs
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
                  Nous analysons votre propriété, le marché local et définissons ensemble 
                  la stratégie optimale pour maximiser vos revenus. Notre expertise du 
                  marché algérien nous permet de vous proposer les meilleures solutions.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Évaluation du potentiel locatif</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Analyse de la concurrence</span>
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
                    src="/src/assets/step-audit.jpg" 
                    alt="Audit professionnel de propriété"
                    className="w-full h-full object-cover rounded-xl"
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
                  et un descriptif optimisé. Votre bien est mis en ligne sur toutes les 
                  plateformes principales pour maximiser la visibilité.
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
                    src="/src/assets/step-listing.jpg" 
                    alt="Optimisation d'annonces immobilières"
                    className="w-full h-full object-cover rounded-xl"
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
                    Gestion complète et sérénité
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Relaxez-vous ! Nous nous occupons de tout : accueil des voyageurs, 
                  nettoyage, maintenance, communication. Vous recevez vos revenus 
                  directement, sans aucun tracas.
                </p>
                <Link to="/contact">
                  <Button className="btn-golden text-lg px-8 py-4 mt-6">
                    Commencer maintenant
                  </Button>
                </Link>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img 
                    src="/src/assets/step-management.jpg" 
                    alt="Gestion complète et service premium"
                    className="w-full h-full object-cover rounded-xl"
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
                Nos services
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Une gamme complète de services pour optimiser votre location saisonnière
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
            <Link to="/services">
              <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white">
                Découvrez tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
