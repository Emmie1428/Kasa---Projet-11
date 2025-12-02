
import {listeLogement} from "../../Assests/Annonces.json"
import {useParams, useNavigate} from "react-router-dom"

function Logement () {
   const {id} = useParams()
   const redirection = useNavigate()

   const logementActuel = listeLogement.find(logement => 
        logement.id === id)
        if(!logementActuel) {
            redirection("*")
            return null
        }

    return ( <div>
        Test logement
    </div>
    
    )
}

export default Logement