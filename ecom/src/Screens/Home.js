import react, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getProducts } from "../APIClient/ecom-api";
import ProductCard from "../Components/ProductCard";
import { Grid, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  //Array Destructuring
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //componentDidMount
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const { data } = response;
      setProducts(data);
    } catch (e) {}
  };

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="homescreen__products">
        {products.map((item) => {
          return <ProductCard isVisibleViewButton={true} {...item} />;
        })}
      </div>
    </>
  );
};

export default Home;
