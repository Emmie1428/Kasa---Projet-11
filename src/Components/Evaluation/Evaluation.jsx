import pinkStar from "../../Assests/pinkStar.png"
import whiteStar from "../../Assests/whiteStar.png"
import "./Evaluation.scss"


function Evaluation ({rating}) {
    const note = Number(rating)

    return (
        <div className="evaluation">
            {[...Array(5)].map((_,i) => (
            <img key={rating + i} src={ i< note ? (pinkStar) : (whiteStar)} alt={`Évaluation: ${note}/5`} className="evaluation_star" />
            ))}
        </div>)
            
    
}
export default Evaluation