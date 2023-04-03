import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const RatingAndReview = ({ rating, numReviews }) => {
    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }} >
            <h3>Rating and Review</h3>
            <Row>
                <Col md={3}>
                    <h4>{rating}/5</h4>
                    <p>Based on {numReviews} reviews</p>
                </Col>
                <Col md={9}>
                    <Button variant="primary">Write a Review</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default RatingAndReview;
