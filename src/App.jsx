import { useState } from 'react'
import './App.css'
import Salutation from './components/Salutation'
import CarteVisite from './components/CarteVisite'
import Badge from './components/Badge'
import Encadre from './components/Encadre'
import Produit from './components/Produit'
import Page from './components/Page'
import Article from './components/Article'
import BoutonJaime from './components/BoutonJaime'
import ProduitAchat from './components/ProduitAchat'
import Total from './components/Total'
import ProfilCard from './components/ProfilCard'
import Detail from './components/Detail'
import Equipe from './components/Equipe'
import Membre from './components/Membre'

function App() {
  const [likes, setLikes] = useState(0)
  const [total, setTotal] = useState(0)
  const [nombre, setNombre] = useState(0)
  const [selection, setSelection] = useState('')
  const [dernierContact, setDernierContact] = useState('Personne')

  function ajouterLike() {
    setLikes(likes + 1)
  }

  function ajouterProduit(prix) {
    setTotal(total + prix)
    setNombre(nombre + 1)
  }

  return (
    <main>
      <section className="exercice">
        <h2>1. Dire bonjour avec une prop</h2>
        <Salutation nom="Sofia" />
        <Salutation nom="Karim" />
        <Salutation nom="Lina" />
      </section>

      <section className="exercice">
        <h2>2. La carte de visite</h2>
        <div className="rangee">
          <CarteVisite nom="Sofia Martin" metier="Développeuse" ville="Casablanca" />
          <CarteVisite nom="Karim Idrissi" metier="Designer" ville="Rabat" />
        </div>
      </section>

      <section className="exercice">
        <h2>3. Des badges avec valeur par défaut</h2>
        <div className="rangee">
          <Badge texte="Nouveau" couleur="vert" />
          <Badge texte="Promo" couleur="rouge" />
          <Badge texte="Stock limité" couleur="orange" />
          <Badge texte="Standard" />
        </div>
      </section>

      <section className="exercice">
        <h2>4. Un encadré qui contient autre chose</h2>
        <Encadre titre="Astuce">
          <p>Réutilisez vos composants en leur passant des props différentes.</p>
        </Encadre>
        <Encadre titre="À retenir">
          <ul>
            <li>Les props transmettent des données du parent à l’enfant.</li>
            <li>Les composants peuvent être réutilisés.</li>
            <li>La prop children transporte le contenu entre les balises.</li>
          </ul>
        </Encadre>
      </section>

      <section className="exercice">
        <h2>5. Fiche produit avec nombre et tableau</h2>
        <Produit nom="Clavier" prix={49.9} tags={['bureau', 'usb']} />
        <Produit nom="Souris" prix={19.9} tags={['bureau', 'sans-fil']} />
        <Produit nom="Écran" prix={189} tags={['bureau', 'hd']} />
      </section>

      <section className="exercice">
        <h2>6. Une page avec en-tête et pied de page</h2>
        <Page titre="Mon blog">
          <Article titre="Découvrir React" texte="React permet de construire une interface avec des composants réutilisables." />
          <Article titre="Comprendre les props" texte="Les props permettent de transmettre des données aux composants enfants." />
        </Page>
      </section>

      <section className="exercice">
        <h2>7. Le bouton « J'aime » qui parle à son parent</h2>
        <div className="rangee">
          <p className="compteur" aria-live="polite">J’aime : {likes}</p>
          <BoutonJaime onJaime={ajouterLike} />
        </div>
      </section>

      <section className="exercice">
        <h2>8. Le mini-panier</h2>
        <ProduitAchat nom="Clavier" prix={49.9} onAjouter={ajouterProduit} />
        <ProduitAchat nom="Souris" prix={19.9} onAjouter={ajouterProduit} />
        <div aria-live="polite"><Total total={total} nombre={nombre} /></div>
      </section>

      <section className="exercice">
        <h2>9. Sélectionner un profil</h2>
        <div className="rangee">
          <ProfilCard nom="Sofia" role="Front-end" actif={selection === 'Sofia'} onChoisir={setSelection} />
          <ProfilCard nom="Karim" role="Back-end" actif={selection === 'Karim'} onChoisir={setSelection} />
          <ProfilCard nom="Lina" role="Design" actif={selection === 'Lina'} onChoisir={setSelection} />
        </div>
        <div aria-live="polite"><Detail nom={selection} /></div>
      </section>

      <section className="exercice">
        <h2>10. Mini-projet : la fiche d’équipe</h2>
        <Equipe titre="Notre équipe">
          <Membre nom="Sofia" role="Front-end" competences={['React', 'CSS']} onContact={setDernierContact}>
            Sofia crée des interfaces accessibles et agréables à utiliser.
          </Membre>
          <Membre nom="Karim" role="Back-end" competences={['Node', 'SQL']} onContact={setDernierContact}>
            Karim développe les serveurs et organise les bases de données.
          </Membre>
        </Equipe>
        <p className="dernier" aria-live="polite">Dernier contact : {dernierContact}</p>
      </section>

    </main>
  )
}

export default App
