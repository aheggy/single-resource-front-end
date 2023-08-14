
import { Link } from "react-router-dom"
export default function Citie({ citie }) {
    return (
        <div className="citie">
            <img src={citie.url} alt={citie.name} />
            <p className="label"><span className="bold">Favorit:</span> {citie.is_favorite ? (
                <span>⭐</span>
            ) : (
                <span>✩</span>
            )}</p>
            <p className="label"><span className="bold">City:</span> {citie.name}</p>
            <p className="label"><span className="bold">County:</span> {citie.country}</p>
        </div>
    )
}
