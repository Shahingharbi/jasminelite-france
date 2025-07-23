import { useState } from "react";
import { X, MapPin, Home } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import estimationImage from "@/assets/estimation-modal.jpg";

// EmailJS configuration - À remplir avec vos propres identifiants
const EMAILJS_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  templateID: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID  
  publicKey: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
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

    try {
      // Ici, la logique EmailJS sera intégrée plus tard
      // avec les vrais identifiants
      console.log('Estimation form data:', formData);
      
      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons rapidement pour votre estimation.",
      });
      
      onClose();
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
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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
          <div className="p-8 bg-background">
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
              {/* Section Personnelle */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Ex : 01 23 45 67 89"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Section Bien */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-alice font-semibold text-primary mb-4 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-accent" />
                  Parlons de votre bien
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="surface">Superficie (m²)</Label>
                      <Input
                        id="surface"
                        type="number"
                        value={formData.surface}
                        onChange={(e) => handleInputChange('surface', e.target.value)}
                        placeholder="Ex : 75"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="typologie">Typologie</Label>
                      <Select onValueChange={(value) => handleInputChange('typologie', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1-chambre">1 chambre</SelectItem>
                          <SelectItem value="2-chambres">2 chambres</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description (optionnel)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="mt-1 min-h-[80px]"
                      placeholder="Décrivez votre bien..."
                    />
                  </div>
                </div>
              </div>

              <div className="text-sm text-foreground/60 italic">
                Tous les champs ne sont pas obligatoires :)
              </div>

              <Button 
                type="submit" 
                className="btn-golden w-full text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Recevoir mon estimation"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};