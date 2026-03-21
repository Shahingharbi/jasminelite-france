import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-blog.jpg";
import preparationImage from "@/assets/blog-preparation.jpg";
import conciergeImage from "@/assets/blog-concierge.jpg";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog JasminElite — Conciergerie & Gestion Locative Annemasse",
  "url": "https://jasmineliteconcierge.fr/blog",
  "description": "Conseils d'experts pour optimiser votre location saisonnière à Annemasse et en Haute-Savoie.",
  "publisher": {
    "@type": "Organization",
    "name": "JasminElite Conciergerie",
    "url": "https://jasmineliteconcierge.fr"
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "Préparer son bien à la location saisonnière",
      "url": "https://jasmineliteconcierge.fr/blog/preparer-bien-location-saisonniere",
      "datePublished": "2024-03-15",
      "author": { "@type": "Organization", "name": "JasminElite Conciergerie" }
    },
    {
      "@type": "BlogPosting",
      "headline": "Pourquoi passer par une conciergerie haut de gamme ?",
      "url": "https://jasmineliteconcierge.fr/blog/pourquoi-conciergerie-haut-gamme",
      "datePublished": "2024-03-08",
      "author": { "@type": "Organization", "name": "JasminElite Conciergerie" }
    }
  ]
};

const Blog = () => {
  const articles = [
    {
      id: "preparer-bien-location-saisonniere",
      title: "Préparer son bien à la location saisonnière à Annemasse",
      excerpt: "Découvrez toutes les étapes essentielles pour optimiser votre propriété et maximiser vos revenus locatifs en Haute-Savoie. De l'aménagement aux photos, nos experts vous livrent leurs secrets.",
      author: "Équipe JasminElite",
      date: "15 Mars 2024",
      readTime: "5 min de lecture",
      image: preparationImage,
      category: "Conseils"
    },
    {
      id: "pourquoi-conciergerie-haut-gamme",
      title: "Pourquoi passer par une conciergerie haut de gamme à Annemasse ?",
      excerpt: "Les avantages concrets d'une conciergerie professionnelle pour vos locations saisonnières en Haute-Savoie. ROI, tranquillité d'esprit et optimisation : découvrez pourquoi c'est un investissement rentable.",
      author: "Équipe JasminElite",
      date: "8 Mars 2024",
      readTime: "7 min de lecture",
      image: conciergeImage,
      category: "Business"
    }
  ];

  return (
    <Layout>
      <SEO
        title="Blog Conciergerie & Gestion Locative Annemasse | Conseils JasminElite"
        description="Conseils d'experts pour optimiser votre location saisonnière à Annemasse et en Haute-Savoie. Maximisez vos revenus Airbnb avec les astuces JasminElite."
        canonical="/blog"
        schema={blogSchema}
      />

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
                Conseils & actualités — Gestion locative Annemasse
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Retrouvez tous nos conseils d'experts pour optimiser votre location saisonnière
                et maximiser vos revenus en Haute-Savoie.
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
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      width="400"
                      height="256"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 min-h-[200px]"
                    />
                  </div>

                  <div className="space-y-4">
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

                    <h2 className="text-2xl md:text-3xl font-alice font-bold text-primary leading-tight">
                      {article.title}
                    </h2>

                    <p className="text-foreground/70 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground/60">{article.author}</span>
                      </div>

                      <Link to={`/blog/${article.id}`} className="w-full sm:w-auto">
                        <Button variant="ghost" className="text-accent hover:text-white hover:bg-accent group/btn w-full sm:w-auto">
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

      {/* CTA */}
      <section className="section-spacing bg-beige-soft">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elegant bg-gradient-beige">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-alice font-bold text-primary">
                  Prêt à optimiser votre gestion locative à Annemasse ?
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Contactez JasminElite pour un audit gratuit de votre bien et découvrez comment maximiser vos revenus locatifs en Haute-Savoie.
                </p>
                <Link to="/contact" className="inline-block w-full sm:w-auto">
                  <Button className="btn-golden text-lg px-8 py-4 w-full max-w-xs mx-auto sm:w-auto">
                    Demander un audit gratuit
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
