import { Link } from "react-router-dom";
import "../style/Nav.css";

export default function Navigation() {
  return (
    <div className="container">
      <nav className="header-nav">
        <div>
          <ul>
            <li className="lien">
              <Link to="/">Accueil</Link>
              <Link to="/ProductsPage">Produits</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
