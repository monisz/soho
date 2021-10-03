import React from 'react';
import { Form, Offcanvas } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import './Checkout.css';

const Checkout = () => {
  const realizarPedidoText = (
    <>
      <img src='../../imagenes/wpp.svg' alt='Pedido al wpp'/>
      &nbsp;
      Realizar pedido
    </>
  )

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Completa tu pedido</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group controlId="pago" className='mb-5'>
            <Form.Label className='mb-3'>Método de pago</Form.Label>
              <Form.Check
                type="radio"
                label="Efectivo"
                name="metodoPago"
                id="efectivo"
              />
              <hr />
              <Form.Check
                type="radio"
                label="Mercado Pago"
                name="metodoPago"
                id="mercadoPago"
              />
              <hr />
              <Form.Check
                type="radio"
                label="Transferencia"
                name="metodoPago"
                id="transferencia"
              />
          </Form.Group>
          <Form.Group controlId="envio">
            <Form.Label className='mb-3'>Envío</Form.Label>
              <Form.Check
                type="radio"
                label="Retiro en local"
                name="envio"
                id="local"
              />
              <hr />
              <Form.Check
                type="radio"
                label="Flete"
                name="envio"
                id="flete"
              />
          </Form.Group>
        </Form>
        <CustomButton className='my-4' text={realizarPedidoText} />
      </Offcanvas.Body>
    </>
  )
};

export default Checkout;
