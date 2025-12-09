import logoBlanc from "../../Assests/logoBlanc.png"
import "./Footer.scss"

function Footer () {
    return (<div className="footer">
                <img src={logoBlanc} alt="Logo Kasa" />
                <h2>© 2020 Kasa. All rights reserved</h2>
            </div>
    )
}

export default Footer