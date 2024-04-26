import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Category } from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

export function HomePage() {
  const [data, setData] = useState([]);
  const [dataPhone, setDataPhone] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/mens-watches?limit=3"
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchDataPhone() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/smartphones?limit=3"
        );
        setDataPhone(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }
    fetchDataPhone();
  }, []);

  console.log(data);
  console.log(dataPhone);

  return (
    <Layout>
      <Header />
      <Category title="MENS WATCHES">
        <div className="card">
          {data.map((product) => (
            <Card
              key={product.id}
              image={product.thumbnail}
              brand={product.brand}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Category>
      <Category title="SMARTPHONES">
        <div className="card">
          {dataPhone.map((product) => (
            <Card
              key={product.id}
              image={product.thumbnail}
              brand={product.brand}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Category>
    </Layout>
  );
}
