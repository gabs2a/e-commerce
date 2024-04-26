import BoutonFiltre from "../BoutonFiltre/BoutonFiltre";
import "../style/ProductsPage.css";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export function ProductsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );

        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="headline">
        <p>Produits</p>
      </div>
      <div className="bouton-card">
        <div className="bouton-filtre">
          {data.map((categorie) => (
            <BoutonFiltre
              key={categorie}
              categorie={categorie}
              className="bouton"
            />
          ))}
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
