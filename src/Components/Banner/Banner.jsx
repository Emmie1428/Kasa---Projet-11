import "./Banner.scss"

function Banner ({backgroundImage, slogan, imageOpacity=0.4}) {
    return (
        <div className="banner">
        <img src={backgroundImage} alt="Bannière" className="banner_image" style={{ opacity: imageOpacity }}/>
        {slogan && <h1 className="banner_slogan">{slogan}</h1>}
        </div>
    )
}

export default Banner