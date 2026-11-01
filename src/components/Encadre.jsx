import './Encadre.css'
export default function Encadre({titre, children}){
    return (
        <div className="encadre">
            <div className="encadre-titre">
                {titre}
            </div>
            <div className="encadre-corps">
                {children}
            </div>
        </div>
    )
}