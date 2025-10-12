const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Éditeur du site</h2>
          <p className="text-gray-700 mb-2">
            <strong>Raison sociale :</strong> Yasmina AYARI
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Forme juridique :</strong> Auto-entrepreneur
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Siège social :</strong> 82 Route des Vallées 74100 Annemasse FRANCE
          </p>
          <p className="text-gray-700 mb-2">
            <strong>SIRET :</strong> 99207108400014
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone :</strong> 06 63 06 79 09
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email :</strong> contact@jasmineliteconcierge.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Directeur de la publication :</strong> AYARI Yasmina
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Hébergement</h2>
          <p className="text-gray-700 mb-2">
            <strong>Nom de l'hébergeur :</strong> IONOS
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong>  7, place de la Gare                                                                                     
                                        BP 70109                                                                                            
                                        57200 Sarreguemines Cedex
                                        France
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone :</strong> 0970 808 911
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de {' '}
            Jasmineliteconcierge ou de ses partenaires. Toute reproduction, distribution, modification ou 
            exploitation non autorisée est strictement interdite et peut faire l'objet de poursuites judiciaires.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation de responsabilité</h2>
          <p className="text-gray-700 mb-4">
             Jasmineliteconcierge s'efforce d'assurer l'exactitude des informations diffusées sur ce site, 
            mais ne peut être tenue responsable des erreurs, omissions ou résultats obtenus par l'utilisation 
            de ces informations. L'éditeur se réserve le droit de modifier le contenu du site à tout moment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Liens hypertextes</h2>
          <p className="text-gray-700 mb-4">
            Le site peut contenir des liens vers d'autres sites internet. Jasmineliteconcierge n'exerce 
            aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Droit applicable</h2>
          <p className="text-gray-700 mb-4">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;