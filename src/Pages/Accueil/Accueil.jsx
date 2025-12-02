import "./Accueil.scss"
import Banner from "../../Components/Banner/Banner"
import bannerAcc from "../../Assests/bannerAcc.png"
import {listeLogement} from "../../Assests/Annonces.json"
import SingleCard from "../../Components/Card/Card"
import {NavLink} from "react-router-dom"

function Accueil () {
    return (<main className="accueil">
        <Banner backgroundImage={bannerAcc}
        slogan="Chez vous, partout et ailleurs"/>
        <div className="cards">
            {listeLogement.map((logement) => (
                <NavLink to={`/logement/${logement.id}`} key={logement.id} >
                    <SingleCard 
                        title={logement.title}
                        cover={logement.cover}
                    />
               </NavLink>
            ))}
        </div>
    </main>)
}

export default Accueil