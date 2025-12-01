import Banner from "../../Components/Banner/Banner"
import bannerAPropos from "../../Assests/bannerAPropos.png"

function APropos () {
    return (<div className="a-propos">
        <Banner backgroundImage={bannerAPropos}
        slogan="" 
        imageOpacity={0.7}/>
    </div>)
}

export default APropos