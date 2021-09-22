import React, { useState } from 'react';
import { Nav, Modal, Alert } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        <img src='/imagenes/cart_nav.svg' alt="cart_nav" />
      </Nav.Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tu pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="warning">
            Tu carrito esta vacio. 
          </Alert> 
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Cart;
