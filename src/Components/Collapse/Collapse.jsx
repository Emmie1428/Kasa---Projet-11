import {useState} from "react"
import "./Collapse.scss"
import flechehaut from "../../Assests/flecheHaut.png"
import flechebas from "../../Assests/flechebas.png"

function Collapse ({titre, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen? (
        <div className="collapse">
            <h2 onClick={()=> 
                setIsOpen(false)} className="collapse_titre">
                    {titre}<img src={flechebas} alt="Fermer" className="collapse_fleche"/>
            </h2>
            <div className="collapse_contenu">{children}</div>
        </div>
    ) :(
        <div className="collapse">
            <h2 onClick={()=> 
                setIsOpen(true)} className="collapse_titre">
                    {titre}<img src={flechehaut} alt="Ouvrir" className="collapse_fleche"/>
            </h2>
        </div>
    )
}

export default Collapse