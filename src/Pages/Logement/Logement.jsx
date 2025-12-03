import Carrousel  from "../../Components/Carrousel/Carrousel"
import {listeLogement} from "../../Assests/Annonces.json"
import {useParams, useNavigate} from "react-router-dom"
import "./Logement.scss"
import InfoLogement from "../../Components/InfosLogement/InfosLogement"
import Evaluation from "../../Components/Evaluation/Evaluation"

function Logement () {
   const {id} = useParams()
   const redirection = useNavigate()

   const logementActuel = listeLogement.find(logement => 
        logement.id === id)
        if(!logementActuel) {
            redirection("*")
            return null
        }

    return (<div className="logement">
                <Carrousel 
                    key={logementActuel.id}
                    pictures={logementActuel.pictures}/>
                <InfoLogement 
                    key={logementActuel.title}
                    title={logementActuel.title}
                    location={logementActuel.location}
                    host={logementActuel.host}
                    tags={logementActuel.tags}
                />
                <Evaluation
                    key={logementActuel.rating}
                    rating={logementActuel.rating}
                />
                
            </div>
    
    )
}

export default Logement