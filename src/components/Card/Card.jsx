import "../style/Card.css";

export function Card({ image, brand, price, title }) {
  return (
    <div className="all-card">
      <img className="image" src={image} alt="montre" />
      <div className="marque-prix">
        <div className="titre">
          <h3>{brand}</h3>
          <h1>{title}</h1>
        </div>
        <div className="prix">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
