import React, { useState } from 'react';
import { Alert, ListGroup, Offcanvas } from 'react-bootstrap';
import Checkout from '../Checkout/Checkout';
import CustomButton from '../CustomButton/CustomButton';
import './Cart.css';

const Cart = () => {
  const cart = [1];
  const quantityProducts = cart.length
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Pedido ({quantityProducts})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          quantityProducts > 0
            ? <>
              <ListGroup variant="flush">
                  {
                    cart.map((product, i) => (
                      <ListGroup.Item key={i}>
                        <img src='../../imagenes/rackSimetrico.png' alt={`producto${i}`} className='li-item item1 ob-li-im'/>
                        <p className='li-item item2'>Rack de TV (Simétrico)</p>
                        <div className='li-item item3'>
                          <img src='../../imagenes/remove_ic.svg' alt='Quitar cantidad' className='ob-li-ic' />
                          &nbsp;&nbsp; 1 &nbsp;&nbsp;
                          <img src='../../imagenes/add_ic.svg' alt='Agregar cantidad' className='ob-li-ic' />
                        </div>
                        <div className='li-item item4'>
                          <img src='../../imagenes/delete_ic.svg' alt='Eliminar producto' className='ob-li-ic' />
                          &nbsp;
                          Eliminar
                        </div>
                        <p className='li-item item5'>Subtotal: $7100</p>
                      </ListGroup.Item>
                    ))
                  }
              </ListGroup>
              <p className='ob-total'>
                Total: <span className='ob-span'>$7100</span>
              </p>
              <CustomButton variant='dark' text='Siguiente' className='ob-cb' handleClick={handleShow} />
              <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Checkout />
              </Offcanvas>
          </>
          : <Alert variant="warning" className='ob-aw'>
            Tu carrito esta vacío.
          </Alert>
        }
      </Offcanvas.Body>
    </>
  )
}

export default Cart;
