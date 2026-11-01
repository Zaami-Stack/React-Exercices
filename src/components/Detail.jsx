import './Detail.css'

function Detail({ nom }) {
  return <p className="detail">{nom ? `Profil choisi : ${nom}` : 'Aucun profil sélectionné'}</p>
}

export default Detail
