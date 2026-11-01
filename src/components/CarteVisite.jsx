import './CarteVisite.css'
export default function Cartevisite ({nom, metier, ville}){
    return (
        <div className="carte">
            <h3>{nom}</h3>
            <p className="metier">{metier}</p>
            <p className="ville">{ville}</p>
        </div>
    )
}