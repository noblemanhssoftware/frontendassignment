import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const SellerInformation = () => {
    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }} >
            <h3>Seller Information</h3>
            <ListGroup>
                <ListGroup.Item>Seller Name: John Doe</ListGroup.Item>
                <ListGroup.Item>Seller Rating: 4.5/5</ListGroup.Item>
                <ListGroup.Item>Location: New York, NY</ListGroup.Item>
                <ListGroup.Item>Contact Email: john.doe@example.com</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default SellerInformation;
