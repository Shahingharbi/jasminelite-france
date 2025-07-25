import { useState } from "react";
import emailjs from '@emailjs/browser';
import { X, Home } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import estimationImage from "@/assets/estimation-modal.jpg";

// CONFIGURATION EMAILJS
const EMAILJS_CONFIG = {
  serviceID: 'service_2wrmsdv',
  templateID: 'template_xy7fwcj',
  publicKey: '_X-hiqRvUJ_XxmN3s',
};

interface EstimationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimationModal = ({ isOpen, onClose }: EstimationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    surface: '',
    typologie: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      surface: formData.surface,
      typologie: formData.typologie,
      description: formData.description,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        toast({
          title: "Demande envoyée !",
          description: "Nous vous recontacterons rapidement pour votre estimation.",
        });

        // Reset du formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          surface: '',
          typologie: '',
          description: ''
        });

        onClose(); // Fermer le modal
      } else {
        toast({
          title: "Erreur",
          description: "Impossible d’envoyer votre estimation.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      toast({
        title: "Erreur technique",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <div className="grid lg:grid-cols-2 gap-0 -m-6">
          {/* Image Section */}
          <div className="relative">
            <img 
              src={estimationImage} 
              alt="Estimation immobilière"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
          </div>

          {/* Form Section */}
          <div className="p-8 bg-muted">
            <div className="flex items-center justify-between mb-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-alice font-bold text-primary">
                  Parlons de vous
                </DialogTitle>
              </DialogHeader>
              <button
                onClick={onClose}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Infos personnelles */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" className="bg-white" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" className="bg-white" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="bg-white" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" className="bg-white" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Ex : 07 01 23 45 67" />
                </div>
              </div>

              {/* Infos sur le bien */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-alice font-semibold text-primary mb-4 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-accent" />
                  Parlons de votre bien
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" className="bg-white" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="surface">Superficie (m²)</Label>
                      <Input id="surface" className="bg-white" type="number" value={formData.surface} onChange={(e) => handleInputChange('surface', e.target.value)} placeholder="Ex : 75" />
                    </div>
                    <div>
                      <Label htmlFor="typologie" >Typologie</Label>
                      <Select onValueChange={(value) => handleInputChange('typologie', value)}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1-chambre">1 chambre</SelectItem>
                          <SelectItem value="2-chambres">2 chambres</SelectItem>
                          <SelectItem value="3-chambres">3 chambres</SelectItem>
                          <SelectItem value="4-chambres">4+ chambres</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="Immeuble">Immeuble</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description (optionnel)</Label>
                    <Textarea id="description" className="bg-white" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} placeholder="Décrivez votre bien..." />
                  </div>
                </div>
              </div>

              <div className="text-sm text-foreground/60 italic">
                Tous les champs ne sont pas obligatoires :)
              </div>

              <Button type="submit" className="btn-golden w-full text-lg py-3" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Recevoir mon estimation"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
