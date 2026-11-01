import './Membre.css'

function Membre({ nom, role, competences, onContact, children }) {
  return (
    <div className="membre">
      <h3>{nom}<small>{role}</small></h3>
      <p className="comp">Compétences : {competences.join(' , ')}</p>
      <div className="bio">{children}</div>
      <button className="btn" onClick={() => onContact(nom)}>Contacter</button>
    </div>
  )
}

export default Membre
