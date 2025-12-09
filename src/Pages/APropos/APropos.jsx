import Banner from "../../Components/Banner/Banner"
import bannerAPropos from "../../Assests/bannerAPropos.png"
import DescriptionValeurs from "../../Components/DescriptionValeurs/DescriptionValeurs"
import "./APropos.scss"

function APropos () {
    return (<div className="a-propos">
                <Banner backgroundImage={bannerAPropos}
                    slogan="" 
                    imageOpacity={0.7}/>
                <DescriptionValeurs />
            </div>
    )
}

export default APropos