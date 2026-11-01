import './CarteVisite.css'

function CarteVisite({ nom, metier, ville }) {
  return (
    <div className="carte">
      <h3>{nom}</h3>
      <p className="metier">{metier}</p>
      <p className="ville">{ville}</p>
    </div>
  )
}

export default CarteVisite
