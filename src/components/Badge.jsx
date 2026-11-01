import './Badge.css'
export default function Badge({texte, couleur="grey"}){
    return (
        <span className={"badge badge-" + couleur}>{texte} </span>
    )
}