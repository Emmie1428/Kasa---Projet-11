import "./InfosLogement.scss"
import pinkStar from "../../Assests/pinkStar.png"
import whiteStar from "../../Assests/whiteStar.png"

function InfosLogement ({title, host, location, tags, rating, index}) {
    const note = Number(rating)
    return (
        <div className="info">
            <div className="info_contenant">
                <h1 className="info_contenant_titre">{title}</h1>
                <h3 className="info_contenant_localisation">{location}</h3>
            </div>
            <div className="info_hote">
                <h3 className="info_hote_nom">{host.name}</h3>
                <img src={host.picture} alt={host.name} className="info_hote_avatar"/>
            </div>
            <ul className="info_tags">
                {tags.map(tag => (
                    <li key={`${tag}-${index}`} className="info_tags_individuel">{tag}</li>
                ))}
            </ul>
            <div className="info_evaluation">
                {[...Array(5)].map((_,i) => (
                    <img key={rating + i} src={ i< note ? (pinkStar) : (whiteStar)} alt={`Évaluation: ${note}/5`} className="info_evaluation_star" />
                ))}        
            </div>
        </div>
    )
}

export default InfosLogement