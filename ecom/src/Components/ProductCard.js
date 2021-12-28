import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image from "./imaged1.png";

const ProductCard = (props) => {
  const { id, name, description, imageUrl } = props;
  const route = `/details/${id}`;
  return (
    <div>
      <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {props.children}
          {props.isVisibleViewButton && (
            <Button href={route} variant="primary">
              View
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
