import './MiniProjet.css'
export function Equipe({ titre, children }) {
  return (
    <div className="equipe">
      <div className="equipe-haut">
        {titre}
      </div>

      <div className="equipe-corps">
        {children}
      </div>
    </div>
  );
}

export function Membre({nom,role,competences,onContact,children}) {
  return (
    <div className="membre">
      <h3>{nom}</h3>

      <small>{role}</small>

      <p className="comp">
        Compétences : {competences.join(", ")}
      </p>

      <p className="bio">
        {children}
      </p>

      <button
        className="btn"
        onClick={() => onContact(nom)}
      >
        Contacter
      </button>
    </div>
  );
}
