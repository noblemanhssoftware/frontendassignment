import React from 'react';
import { Navbar, Nav, Form, FormControl, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaEnvelope } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="d-flex align-items-center justify-content-between px-3">
      <div className="d-flex align-items-center mr-auto ml-1">
        <Form inline="true">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </div>
      <Nav className="d-flex flex-row">
        <Nav.Link className="px-2"><FaShoppingCart /><Badge variant="danger" style={{ fontSize: '10px', borderRadius: '50%', marginLeft: '-4px' }}>2</Badge></Nav.Link>
        <Nav.Link className="px-2"><FaEnvelope /><Badge variant="warning" style={{ fontSize: '10px', borderRadius: '50%', marginLeft: '-4px' }}>1</Badge></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
