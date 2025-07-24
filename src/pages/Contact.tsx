import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/emailjs";
import heroImage from "@/assets/hero-contact.jpg";

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
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Prêt à optimiser vos revenus locatifs ? Parlons de votre projet !
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
                  Découvrez le potentiel de votre propriété avec notre analyse personnalisée et gratuite.
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
                      placeholder="Parlez-nous de votre projet de location saisonnière..."
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
                      src="/src/assets/logo-jasminelite.png" 
                      alt="JasminElite" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-foreground/70 mb-6">Votre conciergerie haut de gamme en Algérie</p>
                  </div>
                  
                  <div className="space-y-4">
                    <a href="mailto:contact@jasminelite.com" className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>contact@jasminelite.com</span>
                    </a>
                    <a href="tel:+213555123456" className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>+213 555 123 456</span>
                    </a>
                    <div className="flex items-center space-x-3 text-foreground/80">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>Alger, Algérie</span>
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