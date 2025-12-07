import {useState} from "react"
import "./Collapse.scss"
import flechehaut from "../../Assests/flecheHaut.png"


function Collapse ({titre, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <h2 onClick={()=> setIsOpen(!isOpen)} className="collapse_titre">
                    {titre}
            
            <img src={flechehaut} alt={ isOpen ? "Ouvrir" : "Fermer"} className={`collapse_fleche ${isOpen ? "rotate" : ""}`}/>
            </h2>
            <div className={`collapse_contenu ${isOpen ? "down" : "up"}`}>{children}</div>
        </div>
    )}

export default Collapse