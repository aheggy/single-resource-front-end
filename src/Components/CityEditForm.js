import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function CityEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [city, setCity] = useState({
    city: "",
    population: "",
    country: "",
    url: "",
    is_favorite: false,
  });

  const updateCity = (updatedCity) => {
    axios
      .put(`${API}/cities/${id}`, updatedCity)
      .then(
        () => {
          navigate(`/cities/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setCity({ ...city, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCity({ ...city, is_favorite: !city.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/cities/${id}`).then(
      (response) => setCity(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCity(city, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
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
      <Link to={`/cities/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

