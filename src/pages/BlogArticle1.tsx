import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import preparationImage from "@/assets/blog-preparation.jpg";

const BlogArticle1 = () => {
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
                  Conseils
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>15 Mars 2024</span>
                </div>
                <span>•</span>
                <span>5 min de lecture</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-alice font-bold text-primary leading-tight">
                Préparer son bien à la location saisonnière
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed">
                Découvrez toutes les étapes essentielles pour optimiser votre propriété et maximiser vos revenus locatifs. De l'aménagement aux photos, nos experts vous livrent leurs secrets.
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
                src={preparationImage} 
                alt="Préparation d'un bien pour la location saisonnière"
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
                  La location saisonnière représente une opportunité exceptionnelle de générer des revenus complémentaires substantiels. Cependant, le succès de votre investissement dépend largement de la préparation minutieuse de votre bien. Voici notre guide complet pour transformer votre propriété en un logement irrésistible pour les voyageurs.
                </p>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">1. L'aménagement et la décoration</h2>
                  <p>
                    L'aménagement de votre logement est crucial pour créer une expérience mémorable. Optez pour un style épuré, moderne et chaleureux qui plaira au plus grand nombre. Investissez dans du mobilier de qualité et des équipements fonctionnels.
                  </p>
                  
                  <div className="bg-beige-soft p-6 rounded-xl">
                    <h3 className="text-xl font-alice font-semibold text-primary mb-4">Les essentiels à ne pas oublier :</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Literie de qualité supérieure et linge de maison</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Cuisine entièrement équipée avec électroménager moderne</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>WiFi haut débit et télévision avec chaînes internationales</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Climatisation et chauffage pour le confort toute l'année</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">2. La photographie professionnelle</h2>
                  <p>
                    Les photos sont votre premier contact avec les futurs locataires. Elles doivent être parfaites ! Une séance photo professionnelle peut augmenter vos réservations de 30 à 50%. Chaque pièce doit être mise en valeur avec un éclairage optimal et une composition soignée.
                  </p>
                  <p>
                    Chez JasminElite, nos photographes experts connaissent parfaitement les attentes des voyageurs et savent capturer l'essence de votre propriété pour créer l'émotion et le désir de réserver.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">3. L'optimisation juridique et fiscale</h2>
                  <p>
                    En Algérie, la location saisonnière est soumise à des réglementations spécifiques. Il est essentiel de s'informer sur vos obligations légales et fiscales pour éviter tout problème. Assurez-vous d'avoir une assurance adaptée qui couvre la location courte durée.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-alice font-bold text-primary">4. La fixation du prix optimal</h2>
                  <p>
                    Le pricing est un art qui nécessite une connaissance approfondie du marché local. Trop cher, et vous n'aurez pas de réservations. Trop bon marché, et vous perdez de l'argent. Notre équipe analyse en permanence le marché algérien pour vous proposer des tarifs optimisés selon la saisonnalité et les événements locaux.
                  </p>
                </div>

                <div className="card-elegant bg-gradient-beige mt-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-alice font-bold text-primary">
                      Besoin d'aide pour préparer votre bien ?
                    </h3>
                    <p className="text-foreground/80">
                      Nos experts vous accompagnent dans chaque étape de la préparation de votre propriété pour maximiser vos revenus.
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

export default BlogArticle1;