import { Button } from "../Button/Button";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="all-element">
        <div className="paragraphe-button">
          <p>
            LET'S <br /> EXPLORE <br /> UNIQUE <br /> ITEMS
          </p>
          <Button>DÉCOUVRIR LES PRODUITS</Button>
        </div>
        <img src="/src/assets/image/image.png" alt="image" />
      </div>
    </div>
  );
};

export default Header;
