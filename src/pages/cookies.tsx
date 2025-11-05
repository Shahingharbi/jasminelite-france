import React from 'react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Cookies</h1>
        
        <p className="text-gray-700 mb-6">
          <strong>Date de dernière mise à jour :</strong> 12 octobre 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
          <p className="text-gray-700 mb-4">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, 
            tablette) lors de la visite d'un site internet. Il permet de reconnaître votre navigateur 
            et de collecter certaines informations vous concernant ou concernant vos préférences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Types de cookies utilisés</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Cookies strictement nécessaires</h3>
          <p className="text-gray-700 mb-4">
            Ces cookies sont indispensables au fonctionnement du site. Ils permettent d'utiliser 
            les fonctionnalités principales comme la navigation sécurisée. Ces cookies ne collectent 
            pas d'informations personnelles et ne nécessitent pas votre consentement.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Cookies de performance et d'analyse</h3>
          <p className="text-gray-700 mb-4">
            Ces cookies nous permettent de mesurer l'audience du site, de comprendre comment les 
            visiteurs utilisent notre site et d'améliorer nos services. Exemples : Google Analytics.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.3 Cookies de fonctionnalité</h3>
          <p className="text-gray-700 mb-4">
            Ces cookies permettent de mémoriser vos préférences (langue, région, etc.) pour vous 
            offrir une expérience personnalisée.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.4 Cookies publicitaires et de réseaux sociaux</h3>
          <p className="text-gray-700 mb-4">
            Ces cookies peuvent être déposés par nos partenaires publicitaires ou les réseaux sociaux. 
            Ils permettent de vous proposer des publicités ciblées et de partager du contenu sur les 
            réseaux sociaux.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Liste des cookies utilisés</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nom du cookie</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Finalité</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_ga</td>
                  <td className="border border-gray-300 px-4 py-2">Google Analytics - Analyse du trafic</td>
                  <td className="border border-gray-300 px-4 py-2">2 ans</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_gid</td>
                  <td className="border border-gray-300 px-4 py-2">Google Analytics - Identification des visiteurs</td>
                  <td className="border border-gray-300 px-4 py-2">24 heures</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                  <td className="border border-gray-300 px-4 py-2">Mémorisation du consentement aux cookies</td>
                  <td className="border border-gray-300 px-4 py-2">13 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Votre consentement</h2>
          <p className="text-gray-700 mb-4">
            Lors de votre première visite, un bandeau vous informe de l'utilisation de cookies et 
            vous demande votre consentement. Vous pouvez accepter ou refuser les cookies non essentiels.
          </p>
          <p className="text-gray-700 mb-4">
            Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien 
            "Gérer les cookies" en bas de page ou en nous contactant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Comment gérer les cookies ?</h2>
          <p className="text-gray-700 mb-4">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté avant 
            d'accepter un cookie. Voici comment procéder selon votre navigateur :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites</li>
            <li><strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies et données de sites</li>
            <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies et données de sites web</li>
            <li><strong>Microsoft Edge :</strong> Paramètres &gt; Confidentialité, recherche et services &gt; Cookies et autorisations de site</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Attention :</strong> La désactivation de certains cookies peut affecter le bon fonctionnement du site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies de tiers</h2>
          <p className="text-gray-700 mb-4">
            Certains cookies sont déposés par des services tiers (Google Analytics, Facebook, Instagram, etc.). 
            Nous n'avons pas de contrôle sur ces cookies. Nous vous invitons à consulter les politiques 
            de confidentialité de ces services :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Google Analytics :</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li><strong>Facebook :</strong> <a href="https://www.facebook.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy</a></li>
            <li><strong>Instagram :</strong> <a href="https://help.instagram.com/519522125107875" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Durée de conservation</h2>
          <p className="text-gray-700 mb-4">
            La durée de conservation des cookies varie selon leur type et leur finalité. Elle est 
            indiquée dans le tableau ci-dessus. Le consentement est valable 13 mois maximum et vous 
            sera redemandé à l'expiration de ce délai conformément aux recommandations de la CNIL.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email :</strong> contact@jasmineliteconcierge.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone :</strong> 07 46 28 10 14
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong> 82 Route des Vallées, 74100 Annemasse, France
          </p>
          <p className="text-gray-700 mb-2">
            <strong>SIRET :</strong> 99207108400014
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cookies;