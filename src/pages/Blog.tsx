import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-blog.jpg";
import preparationImage from "@/assets/blog-preparation.jpg";
import conciergeImage from "@/assets/blog-concierge.jpg";

const Blog = () => {
  const articles = [
    {
      id: "preparer-bien-location-saisonniere",
      title: "Préparer son bien à la location saisonnière",
      excerpt: "Découvrez toutes les étapes essentielles pour optimiser votre propriété et maximiser vos revenus locatifs. De l'aménagement aux photos, nos experts vous livrent leurs secrets.",
      author: "Équipe JasminElite",
      date: "15 Mars 2024",
      readTime: "5 min de lecture",
      image: preparationImage,
      category: "Conseils"
    },
    {
      id: "pourquoi-conciergerie-haut-gamme",
      title: "Pourquoi passer par une conciergerie haut de gamme ?",
      excerpt: "Les avantages concrets d'une conciergerie professionnelle pour vos locations saisonnières. ROI, tranquillité d'esprit et optimisation : découvrez pourquoi c'est un investissement rentable.",
      author: "Équipe JasminElite", 
      date: "8 Mars 2024",
      readTime: "7 min de lecture",
      image: conciergeImage,
      category: "Business"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        <div className="relative container-custom">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-alice font-bold text-white leading-tight">
                Nos conseils & actualités
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Retrouvez tous nos conseils d'experts pour optimiser votre location saisonnière 
                et maximiser vos revenus en Algérie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {articles.map((article) => (
              <article key={article.id} className="card-elegant group hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="space-y-6">
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-alice font-bold text-primary leading-tight">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground/70 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground/60">{article.author}</span>
                      </div>
                      
                      <Link to={`/blog/${article.id}`}>
                        <Button variant="ghost" className="text-accent hover:text-white hover:bg-accent group/btn">
                          Lire l'article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elegant bg-gradient-beige">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                  Restez informé de nos derniers conseils
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Recevez régulièrement nos conseils d'experts pour optimiser vos revenus locatifs 
                  et rester au fait des dernières tendances du marché algérien.
                </p>
                <Link to="/contact">
                  <Button className="btn-golden text-lg px-8 py-4">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;