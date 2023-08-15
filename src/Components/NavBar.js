import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/bookmarks">TOP CITIES</Link>
      </h1>
      <button>
        <Link to="/bookmarks/new">New Citie</Link>
      </button>
    </nav>
  );
}
