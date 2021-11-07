import React, { useState } from 'react';
import { Badge, Nav, Offcanvas } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './OffCanvas.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const OffCanvas = () => {
  const context = useContext(CartContext);
  const quantityProducts = context.cartWidget;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  console.log(context.carrito.length)
  console.log(context.cartWidget) 

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
