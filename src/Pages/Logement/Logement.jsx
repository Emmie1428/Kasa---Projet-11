import Carrousel  from "../../Components/Carrousel/Carrousel"
import {listeLogement} from "../../Assests/Annonces.json"
import {useParams, Navigate} from "react-router-dom"
import "./Logement.scss"
import InfoLogement from "../../Components/InfosLogement/InfosLogement"
import Evaluation from "../../Components/Evaluation/Evaluation"
import Collapse from "../../Components/Collapse/Collapse"

function Logement () {
   const {id} = useParams()
   

   const logementActuel = listeLogement.find(logement => 
        logement.id === id)
        if(!logementActuel) {
            return (<Navigate to="*" />
           
        )}

    return (<div className="logement">
                <Carrousel 
                    key={logementActuel.id}
                    pictures={logementActuel.pictures}
                />
                <InfoLogement 
                    key={logementActuel.title}
                    title={logementActuel.title}
                    location={logementActuel.location}
                    host={logementActuel.host}
                    tags={logementActuel.tags}
                    equipement={logementActuel.equipements}
                />
                <Evaluation
                    key={logementActuel.rating}
                    rating={logementActuel.rating}
                />
               <div className="logement_collapses">
                    <Collapse 
                        key={logementActuel.description}
                        titre="Description">
                        <div>{logementActuel.description}</div>
                    </Collapse>
                    <Collapse 
                        key="equipement"
                        titre="Équipements">
                        <ul className="logement_collapses_list">
                            {logementActuel.equipments.map((equipement, index) => (
                                <li key={`${equipement}-${index}`}>{equipement}</li>))}
                        </ul>
                    </Collapse>
                </div> 
            </div>
    )
}

export default Logement