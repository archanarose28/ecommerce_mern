import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { getProduct } from "../APIClient/ecom-api";
import ProductCard from "../Components/ProductCard";

const ProductDetails = (props) => {
  const params = useParams();
  console.log({ params });
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const response = await getProduct(params.id);
    const { data } = response;
    setProduct(data);
  };

  if (product === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <ProductCard isVisibleViewButton={false} {...product}>
      <Card.Text>Stock: {product.countInStock}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </ProductCard>
  );
};

export default ProductDetails;
