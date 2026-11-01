import './Equipe.css'

function Equipe({ titre, children }) {
  return (
    <div className="equipe">
      <div className="equipe-haut">{titre}</div>
      <div className="equipe-corps">{children}</div>
    </div>
  )
}

export default Equipe
