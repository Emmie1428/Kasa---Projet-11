import "./Accueil.scss"
import Banner from "../../Components/Banner/Banner"
import bannerAcc from "../../Assests/bannerAcc.png"

function Accueil () {
    return (<div className="accueil">
        <Banner backgroundImage={bannerAcc}
        slogan="Chez vous, partout et ailleurs"/>

    </div>)
}

export default Accueil