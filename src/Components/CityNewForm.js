import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function CityNewForm() {
  let navigate = useNavigate();

  const addCity = (newCity) => {
    axios
      .post(`${API}/cities`, newCity)
      .then(
        () => {
          navigate(`/cities`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [city, setCity] = useState({
    city: "",
    population: "",
    country: "",
    url: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setCity({ ...city, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCity({ ...city, is_favorite: !city.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCity(city);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="City">City:</label>
        <input
          id="city"
          value={city.city}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of City"
          required
        />
        <label htmlFor="Country">Country:</label>
        <input
          id="country"
          value={city.country}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Country"
          required
        />
        <label htmlFor="Population">Population:</label>
        <input
          id="population"
          value={city.population}
          type="number"
          onChange={handleTextChange}
          placeholder="Population"
          required
        />
        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={city.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={city.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
