import axios from "axios"
import { useState, useEffect } from "react"
import Citie from "./Citie"

const API = process.env.REACT_APP_API_URL


export default function Cities(){

    const [cities, setCities] = useState([])

    useEffect(()=>{
        axios
        .get(`${API}/cities`)
        .then((response) => {
            setCities(response.data)
        })
        .catch((error) => console.warn("catch", error))
    },[])
    console.log(cities)


    return (
        <div className="cities">
            {cities.map((citie) => {
                return <Citie key={citie.id} citie={citie}/>
            })}
        </div>
    )

}