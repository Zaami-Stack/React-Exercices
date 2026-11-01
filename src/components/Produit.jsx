import './Produit.css'
export default function Produit({nom, prix, tags}){
    return (
        <div className="produit">
            <h3>{nom}</h3>
            <p className="prix">
                {prix.toFixed(2)} MAD
            </p>
            <p className="tags">
                Tags : {tags.join(" . ")}
            </p>
        </div>
    )
}