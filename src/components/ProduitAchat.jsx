import './ProduitAchat.css'

function ProduitAchat({ nom, prix, onAjouter }) {
  return (
    <div className="ligne">
      <span><strong>{nom}</strong> — {prix.toFixed(2)} €</span>
      <button className="btn" onClick={() => onAjouter(prix)}>Ajouter</button>
    </div>
  )
}

export default ProduitAchat
