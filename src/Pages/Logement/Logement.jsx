import Carrousel  from "../../Components/Carrousel/Carrousel"
import {listeLogement} from "../../Assests/Annonces.json"
import {useParams, useNavigate} from "react-router-dom"
import "./Logement.scss"

function Logement () {
   const {id} = useParams()
   const redirection = useNavigate()

   const logementActuel = listeLogement.find(logement => 
        logement.id === id)
        if(!logementActuel) {
            redirection("*")
            return null
        }

    return ( <div className="logement">
        <Carrousel 
            key={logementActuel.id}
            pictures={logementActuel.pictures}/>
    </div>
    
    )
}

export default Logement