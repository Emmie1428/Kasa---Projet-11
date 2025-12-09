import {NavLink} from "react-router-dom"
import "./Error.scss"
import error404 from "../../Assests/error404.png"

function Error () {
    return (<div className="error">
                <img src={error404} alt="Erreur 404" className="error_404"/>
                <h2 className="error_texte">Oups! La page que <br className="error_texte_break"/>vous demandez n'existe pas.</h2>
                <NavLink to="/" className="error_link">Retouner sur la page d'accueil</NavLink>
            </div>
    )
}

export default Error