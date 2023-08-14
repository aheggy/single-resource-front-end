import { Link } from "react-router-dom"

export default function Citie({citie}){
    return (
        <div className="citie">
            <img src={citie.url}></img>
            <p>Favorit: {citie.is_favorite ? (
            <span>⭐</span>
            ) : (
            <span>✩</span>
            )}</p>
            <p>City: {citie.name}</p>
            <p>County: {citie.country}</p> 
        </div>
    )
}