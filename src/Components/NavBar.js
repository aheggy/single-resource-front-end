import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/bookmarks">Cities</Link>
      </h1>
      <button>
        <Link to="/bookmarks/new">New Citie</Link>
      </button>
    </nav>
  );
}
