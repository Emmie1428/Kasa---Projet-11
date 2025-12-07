import Collapse from "../Collapse/Collapse"
import {aPropos} from "../../Assests/APropos.json"
import "./DescriptionValeurs.scss"


function DescriptionValeurs () {
    return (<div>
                <ul className="containerValeurs">
                    {aPropos.map((valeur) => (
                    <Collapse 
                        key={valeur.titre}
                        titre={valeur.titre}>
                        <li>{valeur.description}</li>
                    </Collapse>))} 
                </ul>
            </div>)
}

export default DescriptionValeurs