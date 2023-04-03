import React from "react";
import { Container, Image } from "react-bootstrap";

const ProductImage = ({ imageLink }) => {
  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Image
        src={imageLink}
        alt="Product Image"
        fluid
        style={{ height: '25rem', width: '100%', objectFit: 'contain'}}
      />
    </Container>
  );
};

export default ProductImage;
