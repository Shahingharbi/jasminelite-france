import { Link } from "react-router-dom";
import { Heart, Award, Shield, Users, Zap, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-about.jpg";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>
        
        <div className="relative container-custom">
          <div className={`max-w-4xl ${isRTL ? 'text-right' : ''}`}>
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-white leading-tight">
                {t.about.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {t.about.hero.subtitle}
              </p>
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button className="btn-golden text-lg px-8 py-4 w-full max-w-xs mx-auto sm:w-auto">
                  {t.about.hero.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de l'entreprise */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'text-right' : ''}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <Heart className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    {t.about.story.title}
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t.about.story.intro}
                </p>

                <div className="space-y-6">
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.story.approach}
                  </p>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.story.expertise}
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.story.mission}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className={`text-center p-4 bg-beige-soft rounded-xl ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-2xl font-alice font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-foreground/70">{t.about.stats.support}</div>
                </div>
                <div className={`text-center p-4 bg-beige-soft rounded-xl ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-2xl font-alice font-bold text-accent mb-1">20%</div>
                  <div className="text-sm text-foreground/70">{t.about.stats.commission}</div>
                </div>
                <div className={`text-center p-4 bg-beige-soft rounded-xl ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-2xl font-alice font-bold text-accent mb-1">0%</div>
                  <div className="text-sm text-foreground/70">{t.about.stats.fees}</div>
                </div>
              </div>
            </div>

            <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={teamImage} 
                  alt="Équipe JasminElite Conciergerie" 
                  width="500"
                  height="384"
                  className="w-full h-96 object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision et Valeurs */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'text-right' : ''}`}>
            <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <div className="bg-gradient-beige h-96 flex items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <Target className="w-24 h-24 text-accent mx-auto" />
                    <h3 className="text-2xl font-alice font-bold text-primary">
                      {t.about.vision.excellenceTitle}
                    </h3>
                    <p className="text-foreground/70">
                      {t.about.vision.excellenceSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-8 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="space-y-4">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <Target className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    {t.about.vision.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className={`text-xl font-alice font-semibold text-primary flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Award className="w-6 h-6 text-accent" />
                    <span>{t.about.values.excellence.title}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.values.excellence.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-alice font-semibold text-primary flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Shield className="w-6 h-6 text-accent" />
                    <span>{t.about.values.trust.title}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.values.trust.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-alice font-semibold text-primary flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Zap className="w-6 h-6 text-accent" />
                    <span>{t.about.values.innovation.title}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.values.innovation.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-alice font-semibold text-primary flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Users className="w-6 h-6 text-accent" />
                    <span>{t.about.values.proximity.title}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {t.about.values.proximity.description}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/services" className="inline-block w-full sm:w-auto">
                  <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full max-w-xs mx-auto sm:w-auto">
                    {t.about.servicesButton}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elegant bg-gradient-beige">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                  {t.about.cta.title}
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  {t.about.cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button className="btn-golden text-lg px-8 py-4 w-full sm:w-auto">
                      {t.nav.contact}
                    </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                    <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full sm:w-auto">
                      {t.about.servicesButton}
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

export default About;