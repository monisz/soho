import React, { useState } from 'react';
import { Badge, Nav, Offcanvas } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './OffCanvas.css';

const OffCanvas = () => {
  const cart = [1];
  const quantityProducts = cart.length
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        <img src='/imagenes/cart_nav.svg' alt="cart_nav" />
        <Badge pill bg="dark">{quantityProducts > 0 && quantityProducts}</Badge>
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Cart />
      </Offcanvas>
    </>
  )
};

export default OffCanvas;
