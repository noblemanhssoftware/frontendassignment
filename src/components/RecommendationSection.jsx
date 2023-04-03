import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import products from '../data/products'
import { ProductCard } from "../screens/DisplayProducts";

const RecommendationSection = ({ pId }) => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        let randomIndex1 = Math.floor(Math.random() * products.length);

        while (randomIndex1 === parseInt(pId)) {
            randomIndex1 = Math.floor(Math.random() * products.length);
        }

        let randomIndex2 = Math.floor(Math.random() * products.length);
        while (randomIndex2 === randomIndex1 || randomIndex2 === parseInt(pId)) {
            randomIndex2 = Math.floor(Math.random() * products.length);
        }
        setRandomProducts([products[randomIndex1], products[randomIndex2]]);
    }, [pId]);

    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }} >
            <h3>Recommended Products</h3>
            <Row>
                {randomProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </Row>
        </Container>
    );
};

export default RecommendationSection;
