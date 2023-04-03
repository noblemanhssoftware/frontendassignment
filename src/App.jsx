import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import DisplayProducts from "./screens/DisplayProducts";
import NavbarComponent from "./components/NavbarComponent";



function App() {
  return (

    <Container fluid>
      <NavbarComponent />

      <CarouselComponent />

      <DisplayProducts />
    </Container>

  );
}

export default App;
