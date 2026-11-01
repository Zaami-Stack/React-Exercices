import './Article.css'

function Article({ titre, texte }) {
  return (
    <article className="article">
      <h3>{titre}</h3>
      <p>{texte}</p>
    </article>
  )
}

export default Article
