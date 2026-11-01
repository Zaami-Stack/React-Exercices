import './Badge.css'

function Badge({ texte, couleur = 'gris' }) {
  return <span className={'badge badge-' + couleur}>{texte}</span>
}

export default Badge
