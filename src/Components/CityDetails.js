import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function CityDetails() {
  const [city, setCity] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/cities/${id}`).then((response) => {
      setCity(response.data);
    });
  }, [id, navigate, API]);

  const deleteCity = () => {
    axios
      .delete(`${API}/cities/${id}`)
      .then(() => {
        navigate(`/cities`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteCity();
  };

  return (
    <>
      <div className="show">
        <img src={city.url} alt={city.name} />
        <p className="label">
          <span className="bold">Favorit:</span>{" "}
          {city.is_favorite ? <span>⭐</span> : <span>✩</span>}
        </p>

        <p className="label">
          <span className="bold">City:</span> {city.city}
        </p>
        <p className="label">
          <span className="bold">Population:</span> {city.population}
        </p>
        <p className="label">
          <span className="bold">County:</span> {city.country}
        </p>

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/cities`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/cities/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityDetails;
