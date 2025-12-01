import {NavLink} from "react-router-dom"
import logo from "../../Assests/logo.png"
import "./Header.scss"

function Header () {
    return (<nav className="header">
                <img src={logo} alt="Logo Kasa"/>
                <div>
                    <NavLink to="/" className={({ isActive }) => isActive ? "header_link header_link--active" : "header_link"}
                    end>Accueil</NavLink>
                    <NavLink to="/a-propos" className={({ isActive }) => isActive ? "header_link header_link--active" : "header_link"}
                    >À propos</NavLink>
                </div>
            </nav>)
}

export default Header