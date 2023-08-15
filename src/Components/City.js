
import { Link } from "react-router-dom"

export default function City({ city }) {
    return (
        <div className="city">
            <img src={city.url} alt={city.name} />
            <p className="label"><span className="bold">Favorit:</span> {city.is_favorite ? (
                <span>⭐</span>
            ) : (
                <span>✩</span>
            )}</p>
            <Link to={`/cities/${city.id}`}><span className="bold">City:</span> {city.name}</Link>
            <p className="label"><span className="bold">County:</span> {city.country}</p>
        </div>
    )
}
