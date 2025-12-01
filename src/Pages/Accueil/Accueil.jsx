import "./Accueil.scss"
import Banner from "../../Components/Banner/Banner"
import bannerAcc from "../../Assests/bannerAcc.png"
import {listeLogement} from "../../Assests/Annonces.json"
import SingleCard from "../../Components/Card/Card"

function Accueil () {
    return (<main className="accueil">
        <Banner backgroundImage={bannerAcc}
        slogan="Chez vous, partout et ailleurs"/>
        <div className="cards">
            {listeLogement.map((logement) => (
            <SingleCard 
                key={logement.id}
                title={logement.title}
                cover={logement.cover} />
            ))}
        </div> 
    </main>)
}

export default Accueil