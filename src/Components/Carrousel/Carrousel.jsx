import "./Carrousel.scss"
import flecheRetour from "../../Assests/retour.png"
import flecheSuivant from "../../Assests/suivant.png"
import {useState} from "react"

function Carrousel ({pictures}) {
    const [index, setIndex] = useState(0);

    const retour = () => {
        setIndex(index === 0 ? pictures.length - 1 : index - 1)
    }
    const suivant = () => {
        setIndex(index === pictures.length - 1 ? 0 : index + 1)
    }

    return ( <div className="carrousel">
                <img src={pictures[index]} alt="Photo du logement" className="carrousel_picture" />
                    <img src={flecheRetour} alt="Image précédente" onClick={retour} className="carrousel_fleche"/>
                    <p className="carrousel_index">{`${index + 1}/${pictures.length}`}</p>
                    <img src={flecheSuivant} alt="Image suivante" onClick={suivant} className="carrousel_fleche"/>
               
        </div>
    )
}

export default Carrousel