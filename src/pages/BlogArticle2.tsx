import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, TrendingUp, Shield, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import conciergeImage from "@/assets/blog-concierge.jpg";

const BlogArticle2 = () => {
  return (
    <Layout>
      {/* Article Header */}
      <section className="relative py-16 bg-beige-soft">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block w-full sm:w-auto mb-8">
              <Link to="/blog" className="inline-flex items-center text-accent hover:text-golden-hover transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tous les articles
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-foreground/60">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                  Business
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>8 Mars 2025</span>
                </div>
                <span>•</span>
                <span>3 min de lecture</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-alice font-bold text-primary leading-tight">
                Pourquoi passer par une conciergerie haut de gamme ?
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed">
                Les avantages concrets d'une conciergerie professionnelle pour vos locations saisonnières. ROI, tranquillité d'esprit et optimisation : découvrez pourquoi c'est un investissement rentable.
              </p>
              
              <div className="flex items-center space-x-2 text-foreground/60">
                <User className="w-4 h-4" />
                <span>Par l'équipe JasminElite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={conciergeImage} 
                alt="Service de conciergerie haut de gamme"
                width="800"
                height="384"
                className="w-full h-96 object-cover min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  De plus en plus de propriétaires Haut-Savoyards découvrent les avantages de la location saisonnière. Cependant, gérer soi-même ses locations peut rapidement devenir chronophage et stressant. C'est là qu'une conciergerie haut de gamme comme JasminElite fait toute la différence. Voici pourquoi c'est un investissement intelligent.
                </p>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">Un ROI largement supérieur</h2>
                  <p>
                    L'argument principal ? <strong>La rentabilité</strong>. Nos clients constatent en moyenne une augmentation de 35% de leurs revenus locatifs grâce à notre expertise. Comment ? Par une optimisation tarifaire intelligente, une présence sur toutes les plateformes de réservation, et un taux d'occupation optimisé.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="card-elegant text-center">
                      <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-alice font-bold text-primary mb-2">+35%</h3>
                      <p className="text-sm text-foreground/70">de revenus en moyenne</p>
                    </div>
                    <div className="card-elegant text-center">
                      <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-alice font-bold text-primary mb-2">98%</h3>
                      <p className="text-sm text-foreground/70">de satisfaction client</p>
                    </div>
                    <div className="card-elegant text-center">
                      <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-alice font-bold text-primary mb-2">24/7</h3>
                      <p className="text-sm text-foreground/70">support disponible</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">La tranquillité d'esprit : un luxe inestimable</h2>
                  <p>
                    Imaginez ne plus jamais vous soucier de la gestion de vos locations. Plus de réveil en pleine nuit pour un problème d'invité, plus de stress pour le ménage entre deux séjours, plus d'angoisse face aux annulations de dernière minute.
                  </p>
                  <p>
                    Avec JasminElite, vous dormez tranquille pendant que nos équipes s'occupent de tout. Vos invités sont accueillis comme des rois, votre propriété est entretenue avec le plus grand soin, et vos revenus optimisés automatiquement.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">Une expertise locale irremplaçable</h2>
                  <p>
                    Le marché Haute Savoien de la location saisonnière a ses spécificités. Nous connaissons les attentes des voyageurs locaux et internationaux, les périodes de forte demande, les réglementations en vigueur, et les meilleures pratiques pour se démarquer de la concurrence.
                  </p>
                  <p>
                    Cette connaissance approfondie du terrain nous permet d'optimiser votre positionnement, vos tarifs, et votre communication pour maximiser vos réservations.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">Un service "clé en main" complet</h2>
                  <p>
                    Contrairement à une gestion individuelle qui vous oblige à jongler entre plusieurs prestataires (photographe, femme de ménage, réparateur, etc.), JasminElite vous propose un service intégré et coordonné.
                  </p>
                  <p>
                    Un seul interlocuteur, une seule facturation, une qualité de service homogène sur tous les aspects de la gestion. C'est la différence entre bricoler et investir professionnellement.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">Le modèle économique gagnant-gagnant</h2>
                  <p>
                    Notre commission de 20% HT peut sembler élevée au premier regard. Pourtant, c'est exactement l'inverse ! Cette commission n'est prélevée que sur les revenus que nous générons pour vous. Pas de revenus = pas de commission.
                  </p>
                  <p>
                    Quand on sait que nos clients gagnent en moyenne 35% de plus qu'en gestion autonome, le calcul est vite fait : même après notre commission, vos revenus nets sont largement supérieurs !
                  </p>
                </div>

                <div className="card-elegant bg-gradient-beige mt-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-alice font-bold text-primary">
                      Prêt à optimiser vos revenus ?
                    </h3>
                    <p className="text-foreground/80">
                      Découvrez concrètement ce que JasminElite peut faire pour votre propriété avec un audit gratuit et personnalisé.
                    </p>
                    <Link to="/contact" className="inline-block w-full sm:w-auto">
                      <Button className="btn-golden w-full max-w-xs mx-auto sm:w-auto">
                        Demander un audit gratuit
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle2;