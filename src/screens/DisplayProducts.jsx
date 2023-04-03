import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import products from "../data/products";

const DisplayProducts = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <Container className="mt-5">
      <animated.div style={fadeIn}>
        <Row>
          {products.map((product, index) => {
            if (index % 2 === 0) {
              return (
                <React.Fragment key={product.id}>
                  <ProductCard product={product} />
                  {/* Render the next product card in the same row */}
                  {products[index + 1] && (
                    <ProductCard product={products[index + 1]} />
                  )}
                </React.Fragment>
              );
            }
            return null;
          })}
        </Row>
      </animated.div>
    </Container>
  );
};



export const ProductCard = ({ product }) => {


  return (
    <Col xs={6} sm={6} md={6} lg={6}>
      <Card className="mb-4">
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={product.image} style={{ height: '12rem', width: '100%', objectFit: 'cover', overflow: 'hidden' }} />
          <Card.Body>
            <div className="row">
              <div className="col-md-8">
                <Card.Title>{product.title}</Card.Title>
                <div className="d-flex align-items-center">
                  <BsStarFill className="me-1 text-warning" />
                  <span>{product.rating}</span>
                  <span className="ms-2">| {product.numReviews} </span>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end align-items-center">
                <Card.Text>{product.price}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  )
}


export default DisplayProducts;
