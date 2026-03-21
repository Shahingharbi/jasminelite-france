import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/emailjs";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-contact.jpg";
import logoImage from "@/assets/logo-jasminelite.png";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact JasminElite Conciergerie Annemasse",
  "url": "https://jasmineliteconcierge.fr/contact",
  "description": "Contactez JasminElite pour un audit gratuit de votre bien et une estimation de vos revenus locatifs à Annemasse.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "JasminElite Conciergerie",
    "telephone": "+33746281014",
    "email": "contact@jasmineliteconcierge.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Annemasse",
      "addressRegion": "Haute-Savoie",
      "postalCode": "74100",
      "addressCountry": "FR"
    }
  }
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = await sendContactEmail(contactData);

    if (result.success) {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      toast({
        title: "Erreur",
        description: result.message,
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEO
        title="Contact | Conciergerie Annemasse JasminElite — Audit Gratuit Gestion Locative"
        description="Contactez JasminElite, votre conciergerie à Annemasse. Demandez votre audit gratuit et estimez vos revenus locatifs en Haute-Savoie. Réponse rapide garantie."
        canonical="/contact"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-alice font-bold text-white leading-tight mb-6">
              Contactez votre conciergerie à Annemasse
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Prêt à optimiser vos revenus locatifs en Haute-Savoie ? Parlons de votre projet !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-elegant">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-golden rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-alice font-bold text-primary">
                    Demandez votre audit gratuit
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Découvrez le potentiel de votre propriété à Annemasse avec notre analyse personnalisée et gratuite.
                </p>
                <form className="space-y-6" id="contact-form" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" name="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" name="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="votre.email@exemple.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Parlez-nous de votre projet de location saisonnière à Annemasse ou en Haute-Savoie..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-golden w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-elegant">
                <div className="text-center space-y-6">
                  <div className="h-28 bg-card rounded-full flex items-center justify-center mx-auto p-2 shadow-sm">
                    <img
                      src={logoImage}
                      alt="JasminElite Conciergerie Annemasse"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-foreground/70 mb-6">Votre conciergerie haut de gamme à Annemasse, Haute-Savoie</p>
                  </div>

                  <div className="space-y-4">
                    <a href="mailto:contact@jasmineliteconcierge.com" className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>contact@jasmineliteconcierge.com</span>
                    </a>
                    <a href="tel:+33746281014" className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>07 46 28 10 14</span>
                    </a>
                    <div className="flex items-center space-x-3 text-foreground/80">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>Annemasse, Haute-Savoie (74)</span>
                    </div>
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

export default Contact;
