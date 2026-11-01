import './App.css'
import {useState} from 'react'
import Salutation from './components/bonjour'
import Cartevisite from './components/CarteVisite'
import Badge from './components/Badge'
import Encadre from './components/Encadre'
import Produit from './components/Produit'
import {Page, Article} from './components/Page'
import BoutonJaime from './components/BoutonJaime'
import {ProduitAchat, Total} from './components/MiniPanier'
import {ProfilCard, Detail} from './components/SelectProfil'
import {Equipe, Membre} from './components/MiniProjet'

export default function App() {
  const [likes, setLikes] = useState(0);
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState(0);
  function ajouterProduit(prix) {
    setTotal(total + prix);
    setNombre(nombre + 1);
  }
  const [selection, setSelection] = useState("");
   const [dernierContact, setDernierContact] =
    useState("Personne");

  return (
    <main className='app'>
      <div>
        <Salutation nom="Sofia" />
        <Salutation nom="Karim" />
        <Salutation nom="Lina" />
      </div>
      <div>
        <Cartevisite nom="Lasfar Rayane" 
        metier="Developpeur"
        ville="Casablanca"
        />
        <Cartevisite nom="Zaami Anass" 
        metier="Developpeur"
        ville="Casablanca"
        />
      </div>
      <div>
        <Badge texte="Nouveau" couleur='green'/>
        <Badge texte="Promo" couleur='red'/>
        <Badge texte="Stock limite" couleur='orange'/>
        <Badge texte="Standard" />
      </div>
      <div>
        <Encadre titre="Astuce">
          <p>
            Utilisez les composants React pour organiser
            votre code et le rendre reutilisable
          </p>
        </Encadre>
        <Encadre titre="A retenir">
          <ul>
            <li>Les composants sont reutilisable.</li>
            <li>Les props transmettent des donnees.</li>
            <li>Children permet d'integrer du contenu</li>
          </ul>
        </Encadre>
      </div>
      <div>
        <Produit 
          nom="Clavier Magnetique MAG68 HE"
          prix={470}
          tags={['bureau', 'usb', 'rgb', 'gaming', 'magnetic']}
        />
        <Produit 
          nom="MCHOSE A7 V2 Blanc 8k Hz"
          prix={649}
          tags={['bureau', 'wireless', 'gaming', '8k Hz']}
        />
        <Produit 
          nom="HyperX Cloud III"
          prix={1200}
          tags={['bureau', 'usb', 'gaming']}
        />
      </div>
      <div>
        <Page titre="Ma première page React">
          <Article
              titre="Premier article"
              texte="Bienvenue dans ma première page React."
          />

          <Article
              titre="Deuxième article"
              texte="Les composants React permettent de réutiliser le code."
          />
        </Page>
      </div>
      <div className="container">
        <p className="compteur">
          J'aime : {likes}
        </p>

        <BoutonJaime
          onJaime={() => setLikes(likes + 1)}
        />
      </div>
      <div className="panier">
        <ProduitAchat
          nom="Clavier"
          prix={49.9}
          onAjouter={ajouterProduit}
        />

        <ProduitAchat
          nom="Souris"
          prix={19.9}
          onAjouter={ajouterProduit}
        />

        <Total total={total} nombre={nombre} />
      </div>
      <div>
        <div className="rangee">
          <ProfilCard
            nom="Sofia"
            role="Front-end"
            actif={selection === "Sofia"}
            onChoisir={setSelection}
          />

          <ProfilCard
            nom="Karim"
            role="Back-end"
            actif={selection === "Karim"}
            onChoisir={setSelection}
          />

          <ProfilCard
            nom="Lina"
            role="Design"
            actif={selection === "Lina"}
            onChoisir={setSelection}
          />
        </div>

        <Detail nom={selection} />
      </div>
      <div>
        <Equipe titre="Notre équipe">
          <Membre
            nom="Sofia"
            role="Front-end"
            competences={["React", "CSS"]}
            onContact={setDernierContact}
          >
            Passionnée par la création d'interfaces web
            modernes et dynamiques.
          </Membre>

          <Membre
            nom="Karim"
            role="Back-end"
            competences={["Node", "SQL"]}
            onContact={setDernierContact}
          >
            Spécialisé dans le développement serveur
            et les bases de données.
          </Membre>
        </Equipe>

        <p className="dernier">
          Dernier contact : {dernierContact}
        </p>
      </div>
    </main>
  )
}