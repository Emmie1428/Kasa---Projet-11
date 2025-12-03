import "./InfosLogement.scss"

function InfosLogement ({title, host, location, tags, index}) {
    return (<div className="info">
        <div>
        <h1 className="info_titre">{title}</h1>
        <h3 className="info_localisation">{location}</h3>
        </div>
        <div className="info_hote">
            <h3 className="info_hote_nom">{host.name}</h3>
            <img src={host.picture} alt={host.name} className="info_hote_avatar"/>
        </div>
        <ul className="info_tags">
            {tags.map(tag => (
                <li key={`${tag}-${index}`} className="info_tags_individuel">{tag}</li>))}
        </ul>
    </div>)
}

export default InfosLogement