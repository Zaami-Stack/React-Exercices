import './SelectProfil.css'
export function ProfilCard({ nom, role, actif, onChoisir }) {
  return (
    <div
      className={actif ? "profil actif" : "profil"}
      onClick={() => onChoisir(nom)}
    >
      <strong>{nom}</strong>
      <span>{role}</span>
    </div>
  );
}

export function Detail({ nom }) {
  return (
    <div className="detail">
      {nom === ""
        ? "Aucun profil sélectionné"
        : "Profil choisi : " + nom}
    </div>
  );
}