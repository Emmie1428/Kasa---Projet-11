import {useState} from "react"
import "./Collapse.scss"
import flechehaut from "../../Assests/flecheHaut.png"
import flechebas from "../../Assests/flechebas.png"

function Collapse ({titre, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen? (
        <div className="valeurs">
            <h2 onClick={()=> 
                setIsOpen(false)} className="valeurs_titre">
                    {titre}<img src={flechebas} alt="Fermer" className="valeurs_fleche"/>
            </h2>
            <p className="valeurs_description">{children}</p>
        </div>
    ) :(
        <div className="valeurs">
            <h2 onClick={()=> 
                setIsOpen(true)} className="valeurs_titre">
                    {titre}<img src={flechehaut} alt="Ouvrir" className="valeurs_fleche"/>
            </h2>
        </div>
    )
}

export default Collapse