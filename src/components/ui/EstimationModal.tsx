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
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
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
          title: t.common.success,
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
          title: t.common.error,
          description: "Impossible d'envoyer votre estimation.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      toast({
        title: t.common.error,
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
        <div className={`grid lg:grid-cols-2 gap-0 -m-6 ${isRTL ? 'lg:grid-cols-2' : ''}`}>
          {/* Image Section */}
          <div className={`relative ${isRTL ? 'lg:order-2' : ''}`}>
            <img 
              src={estimationImage} 
              alt="Estimation immobilière"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
          </div>

          {/* Form Section */}
          <div className={`p-8 bg-background ${isRTL ? 'lg:order-1 text-right' : ''}`}>
            <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-alice font-bold text-primary">
                  {t.estimationModal.title}
                </DialogTitle>
              </DialogHeader>
              <button
                onClick={onClose}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">{t.estimationModal.closeButton}</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Infos personnelles */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t.estimationModal.fields.firstName}</Label>
                    <Input 
                      id="firstName" 
                      className="bg-background" 
                      value={formData.firstName} 
                      onChange={(e) => handleInputChange('firstName', e.target.value)} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t.estimationModal.fields.lastName}</Label>
                    <Input 
                      id="lastName" 
                      className="bg-background" 
                      value={formData.lastName} 
                      onChange={(e) => handleInputChange('lastName', e.target.value)} 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">{t.estimationModal.fields.email}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-background" 
                    value={formData.email} 
                    onChange={(e) => handleInputChange('email', e.target.value)} 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.estimationModal.fields.phone}</Label>
                  <Input 
                    id="phone" 
                    className="bg-background" 
                    value={formData.phone} 
                    onChange={(e) => handleInputChange('phone', e.target.value)} 
                    placeholder={t.estimationModal.fields.phonePlaceholder} 
                  />
                </div>
              </div>

              {/* Infos sur le bien */}
              <div className="border-t border-border pt-6">
                <h3 className={`text-lg font-alice font-semibold text-primary mb-4 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Home className={`w-5 h-5 text-accent ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.estimationModal.aboutProperty}
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">{t.estimationModal.fields.address}</Label>
                    <Input 
                      id="address" 
                      className="bg-background" 
                      value={formData.address} 
                      onChange={(e) => handleInputChange('address', e.target.value)} 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="surface">{t.estimationModal.fields.area}</Label>
                      <Input 
                        id="surface" 
                        className="bg-background" 
                        type="number" 
                        value={formData.surface} 
                        onChange={(e) => handleInputChange('surface', e.target.value)} 
                        placeholder={t.estimationModal.fields.areaPlaceholder} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="typologie">{t.estimationModal.fields.type}</Label>
                      <Select onValueChange={(value) => handleInputChange('typologie', value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {t.estimationModal.fields.typeOptions.map((option, index) => (
                            <SelectItem key={index} value={option.toLowerCase()}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">{t.estimationModal.fields.description}</Label>
                    <Textarea 
                      id="description" 
                      className="bg-background" 
                      value={formData.description} 
                      onChange={(e) => handleInputChange('description', e.target.value)} 
                      placeholder={t.estimationModal.fields.descriptionPlaceholder} 
                    />
                  </div>
                </div>
              </div>

              <div className="text-sm text-foreground/60 italic">
                {t.estimationModal.note}
              </div>

              <Button type="submit" className="btn-golden w-full text-lg py-3" disabled={isSubmitting}>
                {isSubmitting ? t.common.loading : t.estimationModal.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};