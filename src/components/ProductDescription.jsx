import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const ProductDescription = () => {
    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }} >
            <h3>Description</h3>
            <ListGroup>
                <ListGroup.Item>100% cotton material</ListGroup.Item>
                <ListGroup.Item>Available in various sizes and colors</ListGroup.Item>
                <ListGroup.Item>Machine washable</ListGroup.Item>
                <ListGroup.Item>Soft and comfortable to wear</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default ProductDescription;
