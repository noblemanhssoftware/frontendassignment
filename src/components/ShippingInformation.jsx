import React from "react";
import { Container, Table } from "react-bootstrap";

const ShippingInformation = () => {
    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }} >
            <h3>Shipping Information</h3>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Shipping Method</td>
                        <td>Standard Shipping</td>
                    </tr>
                    <tr>
                        <td>Delivery Time</td>
                        <td>3-5 business days</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost</td>
                        <td>$5.99</td>
                    </tr>
                    <tr>
                        <td>Free Shipping</td>
                        <td>Orders over $50</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default ShippingInformation;
