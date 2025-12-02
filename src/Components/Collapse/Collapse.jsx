import {useState} from "react"
import "./Collapse.scss"
import flechehaut from "../../Assests/flecheHaut.png"
import flechebas from "../../Assests/flechebas.png"

function Collapse ({titre, children}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen? (
        <div className="sectionValeur">
            <h3 onClick={()=> setIsOpen(false)} className="button">{titre}<img src={flechehaut} alt="Ouvrir" className="fleche"/></h3>
            <p>{children}</p>
        </div>
    ) :(
        <div>
            <h3 onClick={()=> setIsOpen(true)} className="button">{titre}<img src={flechebas} alt="Fermer" className="fleche"/></h3>
            </div>
    )
}

export default Collapse