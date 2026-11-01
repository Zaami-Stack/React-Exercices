import './ProfilCard.css'

function ProfilCard({ nom, role, actif, onChoisir }) {
  let classe = 'profil'

  if (actif) {
    classe = 'profil actif'
  }

  return (
    <button className={classe} aria-pressed={actif} onClick={() => onChoisir(nom)}>
      <strong>{nom}</strong>
      <span>{role}</span>
    </button>
  )
}

export default ProfilCard
