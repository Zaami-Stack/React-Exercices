import './MiniPanier.css'
export function ProduitAchat({ nom, prix, onAjouter }) {
  return (
    <div className="ligne">
      <div>
        <strong>{nom}</strong>
        <p>{prix.toFixed(2)} €</p>
      </div>

      <button
        className="btn"
        onClick={() => onAjouter(prix)}
      >
        Ajouter
      </button>
    </div>
  );
}

export function Total({ total, nombre }) {
  return (
    <div className="total">
      {nombre} article(s) — Total : {total.toFixed(2)} €
    </div>
  );
}