import emailjs from '@emailjs/browser';

// Configuration EmailJS - À remplir avec vos propres identifiants
const EMAILJS_CONFIG = {
  serviceID: 'service_2wrmsdv', // Remplacez par votre Service ID
  templateID: 'template_nxx3gxa', // Remplacez par votre Template ID  
  publicKey: '_X-hiqRvUJ_XxmN3s', // Remplacez par votre Public Key
};

export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      to_name: 'JasminElite Conciergerie',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return { success: true, message: 'Email envoyé avec succès!' };
    } else {
      return { success: false, message: 'Erreur lors de l\'envoi de l\'email.' };
    }
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return { 
      success: false, 
      message: 'Erreur technique. Veuillez réessayer plus tard.' 
    };
  }
};