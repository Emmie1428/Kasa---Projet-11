import Collapse from "../Collapse/Collapse"
import {aPropos} from "../../Assests/APropos.json"


function DescriptionValeurs () {
    return (<div>
        <h2>À Propos</h2>
                <ul>
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