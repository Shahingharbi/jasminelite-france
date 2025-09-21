import { Link } from "react-router-dom";
import { Heart, Award, Shield, Users, Zap, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
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
          <div className="max-w-4xl">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-white leading-tight">
                Votre partenaire de confiance pour la conciergerie haut de gamme
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Depuis notre création, nous révolutionnons la gestion locative en Haute Savoie 
                en alliant expertise locale, technologie moderne et service d'exception 
                pour maximiser vos revenus en toute sérénité.
              </p>
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button className="btn-golden text-lg px-8 py-4 w-full max-w-xs mx-auto sm:w-auto">
                  Rencontrons-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de l'entreprise */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-accent" />
                  
                <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                  Notre histoire
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                JasminElite Conciergerie est née d'une vision ambitieuse : révolutionner la gestion locative en Haute Savoie en apportant des standards d'excellence internationaux adaptés aux spécificités de notre marché local.
              </p>

              <div className="space-y-6">
                <p className="text-foreground/70 leading-relaxed">
                  Notre approche unique combine expertise technologique avancée, connaissance approfondie du marché en Haute Savoie et réseau de partenaires qualifiés sur l'ensemble du territoire. Cette synergie nous permet d'offrir à nos clients une solution complète et sur-mesure pour optimiser leurs revenus locatifs.
                </p>
                
                <p className="text-foreground/70 leading-relaxed">
                  Spécialisés dans la gestion premium de propriétés, nous maîtrisons tous les aspects du secteur : du revenue management aux dernières technologies de l'hospitalité, en passant par les réglementations locales et les tendances du marché international.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Notre mission est claire : démocratiser l'accès à la gestion locative professionnelle pour tous les propriétaires Haute Savoiens, en leur offrant les outils et l'expertise nécessaires pour transformer leurs biens en investissements performants et rentables.
                </p>
              </div>
              </div>


              <div className="grid grid-cols-3 gap-4">
  <div className="text-center p-4 bg-beige-soft rounded-xl">
    <div className="text-2xl font-alice font-bold text-accent mb-1">24/7</div>
    <div className="text-sm text-foreground/70">Support client</div>
  </div>
  <div className="text-center p-4 bg-beige-soft rounded-xl">
    <div className="text-2xl font-alice font-bold text-accent mb-1">20%</div>
    <div className="text-sm text-foreground/70">Commission unique</div>
  </div>
  <div className="text-center p-4 bg-beige-soft rounded-xl">
    <div className="text-2xl font-alice font-bold text-accent mb-1">0%</div>
    <div className="text-sm text-foreground/70">Frais cachés</div>
  </div>
</div>
            </div>

            <div className="lg:order-2">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <div className="bg-gradient-beige h-96 flex items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <Target className="w-24 h-24 text-accent mx-auto" />
                    <h3 className="text-2xl font-alice font-bold text-primary">
                      Excellence & Innovation
                    </h3>
                    <p className="text-foreground/70">
                      Notre engagement pour un service d'exception
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                    Notre vision & nos valeurs
                  </h2>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-alice font-semibold text-primary flex items-center space-x-2">
                    <Award className="w-6 h-6 text-accent" />
                    <span>Excellence</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Nous visons l'excellence dans chaque interaction, chaque service rendu, 
                    et chaque détail de la gestion de vos propriétés. Notre standard de qualité 
                    est sans compromis.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-alice font-semibold text-primary flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-accent" />
                    <span>Confiance</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    La confiance est au cœur de notre relation avec nos clients. Transparence, 
                    intégrité et communication constante sont les piliers de notre approche.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-alice font-semibold text-primary flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-accent" />
                    <span>Innovation</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Nous intégrons constamment les dernières technologies et les meilleures 
                    pratiques pour optimiser la rentabilité et simplifier la gestion.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-alice font-semibold text-primary flex items-center space-x-2">
                    <Users className="w-6 h-6 text-accent" />
                    <span>Proximité</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Notre connaissance approfondie du marché Haute Savoien et notre présence locale 
                    nous permettent d'offrir un service personnalisé et adapté à vos besoins.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                  <Link to="/services" className="inline-block w-full sm:w-auto">
                    <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full max-w-xs mx-auto sm:w-auto">
                      Découvrir nos services
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
                  Prêt à nous faire confiance ?
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Rejoignez les propriétaires visionnaires qui ont choisi l'excellence. Découvrons ensemble le potentiel de vos biens.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button className="btn-golden text-lg px-8 py-4 w-full sm:w-auto">
                      Contactez-nous
                    </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                    <Button variant="outline" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-white w-full sm:w-auto">
                      Voir nos services
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