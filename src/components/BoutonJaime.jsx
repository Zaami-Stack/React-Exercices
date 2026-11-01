import './BoutonJaime.css'

function BoutonJaime({ onJaime }) {
  return <button className="bouton-jaime" onClick={onJaime}>J’aime</button>
}

export default BoutonJaime
