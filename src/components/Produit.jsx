import './Produit.css'

function Produit({ nom, prix, tags }) {
  return (
    <div className="produit">
      <h3>{nom}</h3>
      <p className="prix">{prix.toFixed(2)} €</p>
      <p className="tags">Tags : {tags.join(' · ')}</p>
    </div>
  )
}

export default Produit
