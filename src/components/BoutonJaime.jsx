import './BoutonJaime.css'
export default function BoutonJaime({ onJaime }) {
  return (
    <button className="btn" onClick={onJaime}>
      J'aime
    </button>
  );
}