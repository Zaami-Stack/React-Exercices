import './Page.css'
export function Page({titre, children}){
    return (
        <div className="page">
            <header className="page-haut">
                {titre}
            </header>
            <main className="page-milieu">
                {children}
            </main>
            <footer className="page-bas">
                <p>&copy; Formation React</p>
            </footer>
        </div>
    )
}

export function Article({ titre, texte }) {
  return (
    <div className="article">
      <h3>{titre}</h3>
      <p>{texte}</p>
    </div>
  );
}