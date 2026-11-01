import './Page.css'

function Page({ titre, children }) {
  return (
    <div className="page">
      <header className="page-haut">{titre}</header>
      <div className="page-milieu">{children}</div>
      <footer className="page-bas">© Formation React</footer>
    </div>
  )
}

export default Page
