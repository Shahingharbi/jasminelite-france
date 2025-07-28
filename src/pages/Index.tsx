import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Users, Shield, Sparkles, Camera, Calendar, Zap, Home, Brush, Shirt } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { EstimationModal } from "@/components/ui/EstimationModal";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-home.jpg";
import stepAuditImage from "@/assets/step-audit.jpg";
import stepListingImage from "@/assets/step-listing.jpg";
import stepManagementImage from "@/assets/step-management.jpg";

const Index = () => {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t.services.items[0].title,
      description: t.services.items[0].description
    },
    {
      icon: Camera,
      title: t.services.items[1].title,
      description: t.services.items[1].description
    },
    {
      icon: Zap,
      title: t.services.items[2].title,
      description: t.services.items[2].description
    },
    {
      icon: Calendar,
      title: t.services.items[3].title,
      description: t.services.items[3].description
    },
    {
      icon: Users,
      title: t.services.items[4].title,
      description: t.services.items[4].description
    },
    {
      icon: Shield,
      title: t.services.items[5].title,
      description: t.services.items[5].description
    },
    {
      icon: Brush,
      title: t.services.items[6].title,
      description: t.services.items[6].description
    },
    {
      icon: Shirt,
      title: t.services.items[7].title,
      description: t.services.items[7].description
    },
    {
      icon: Sparkles,
      title: t.services.items[8].title,
      description: t.services.items[8].description
    }
  ];

  const testimonials = t.testimonials.items.map((item, index) => ({
    ...item,
    rating: 5
  }));

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
            <div className={`space-y-8 ${isRTL ? 'text-right' : ''}`}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-primary leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button 
                  onClick={() => setIsEstimationModalOpen(true)}
                  className="btn-golden text-lg px-8 py-4 w-full sm:w-auto"
                >
                  {t.hero.estimateButton}
                </Button>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full sm:w-auto">
                    {t.hero.discoverButton}
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
                {t.banner.items.map((item, index) => (
                  <div key={`${setIndex}-${index}`} className={`flex items-center mx-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Star className={`w-5 h-5 text-accent ${isRTL ? 'ml-3' : 'mr-3'}`} />
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
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${isRTL ? 'text-right lg:order-2' : ''}`}>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4 flex-row-reverse' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    {t.howItWorks.step1.title}
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t.howItWorks.step1.description}
                </p>
                <ul className="space-y-2 text-foreground/70">
                  {t.howItWorks.step1.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img 
                    src={stepAuditImage}
                    alt="Audit professionnel de propriété"
                    width="500"
                    height="320"
                    className="w-full h-full object-cover rounded-xl min-h-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${isRTL ? 'text-right lg:order-1' : 'lg:order-2'}`}>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4 flex-row-reverse' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    {t.howItWorks.step2.title}
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t.howItWorks.step2.description}
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
                    <Camera className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{t.howItWorks.step2.features[0]}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
                    <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{t.howItWorks.step2.features[1]}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
                    <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{t.howItWorks.step2.features[2]}</span>
                  </li>
                </ul>
              </div>
              <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img 
                    src={stepListingImage} 
                    alt="Optimisation d'annonces immobilières"
                    width="500"
                    height="320"
                    className="w-full h-full object-cover rounded-xl min-h-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${isRTL ? 'text-right lg:order-2' : ''}`}>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4 flex-row-reverse' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-alice font-bold text-primary">
                    {t.howItWorks.step3.title}
                  </h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t.howItWorks.step3.description}
                </p>
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button className="btn-golden text-lg px-8 py-4 mt-6 w-full max-w-xs mx-auto sm:w-auto">
                    {t.howItWorks.step3.button}
                  </Button>
                </Link>
              </div>
              <div className="lg:order-2">
                <div className="rounded-2xl p-8 h-80 overflow-hidden">
                  <img 
                    src={stepManagementImage}
                    alt="Gestion complète et service premium"
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
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center justify-center mb-4 ${isRTL ? 'space-x-reverse space-x-3 flex-row-reverse' : 'space-x-3'}`}>
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                {t.services.title}
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className={`card-elegant group hover:transform hover:scale-105 ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-center mb-4 ${isRTL ? 'space-x-reverse space-x-4 flex-row-reverse' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
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
                {t.services.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing hidden">
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

      {/* Estimation Modal */}
      <EstimationModal 
        isOpen={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
      />
    </Layout>
  );
};

export default Index;
