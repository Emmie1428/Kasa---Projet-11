import "./Card.scss"

function SingleCard ({title, cover}) {
    return(<div className="card">
                <img src={cover} alt={title} className="card_cover"/>
                <h3 className="card_title">{title}</h3>
            </div>)
            }

export default SingleCard