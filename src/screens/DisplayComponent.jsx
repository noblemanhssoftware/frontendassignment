import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductNavbar from "../components/ProductNavbar";
import ProductImage from "../components/ProductImage";
import ProductDescription from "../components/ProductDescription";
import ShippingInformation from "../components/ShippingInformation";
import SellerInformation from "../components/SellerInformation";
import RatingAndReview from "../components/RatingAndReview";
import RecommendationSection from "../components/RecommendationSection";
import Review from "../components/Review";
import products from '../data/products'
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ProductDetailScreen = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
    window.scrollTo(0, 0)
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <animated.div style={fadeIn}>
        <ProductNavbar />
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col md={6}>
              <ProductImage imageLink={product.image} />
            </Col>
            <Col md={6}>
              <h2>{product.name}</h2>
              <ProductDescription />
              <ShippingInformation />
              <SellerInformation />
              <RatingAndReview rating={product.rating} numReviews={product.numReviews} />
              <Review />
            </Col>
          </Row>
          <Row>
            <Col>
              <RecommendationSection pId={id} />
            </Col>
          </Row>
        </Container>
      </animated.div>
    </Container>
  );
};

export default ProductDetailScreen;
