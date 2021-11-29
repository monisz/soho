import React, { useContext } from 'react';
import { Form, Offcanvas } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import CustomButton from '../CustomButton/CustomButton';
import './Checkout.css';

const Checkout = () => {
  const { carrito, clear } = useContext(CartContext);

  const realizarPedidoText = (
    <>
      <img src='../../imagenes/wpp.svg' alt='Pedido al wpp'/>
      &nbsp;
      Realizar pedido
    </>
  )

  const getProducts = () => {
    return carrito.map(({ item: { title }, cantidad }) => (
      `\n- ${title}, cantidad: ${cantidad}`
    ))
  }

  const getMetodoPago = (form) => {
    switch (true) {
      case form[0].checked:
        return 'Efectivo';
      case form[1].checked:
        return 'Mercado Pago';      
      default:
        return 'Transferencia';
    }
  }

  const getEnvio = (form) => {
    switch (true) {
      case form[3].checked:
        return 'Retiro en Local';      
      default:
        return 'Flete';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const msgText = encodeURI(`Hola! He realizado el siguiente pedido:
      ${getProducts()}
      \nMi método de pago es: ${getMetodoPago(form)}, y mi envío es: ${getEnvio(form)}`);
    window.open(`https://api.whatsapp.com/send?phone=+5491134684228&text=${msgText}`)
    clear();
    window.location.reload();
  };

  return (
    <>
      <Offcanvas.Header closeButton title='Volver atrás'>
        <Offcanvas.Title>Completa tu pedido</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-5'>
            <Form.Label className='mb-3'>Método de pago</Form.Label>
              <Form.Check
                type="radio"
                label="Efectivo"
                name="metodoPago"
                id="efectivo"
                defaultChecked
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
          <Form.Group>
            <Form.Label className='mb-3'>Envío</Form.Label>
              <Form.Check
                type="radio"
                label="Retiro en local"
                name="envio"
                id="local"
                defaultChecked
              />
              <hr />
              <Form.Check
                type="radio"
                label="Flete"
                name="envio"
                id="flete"
              />
          </Form.Group>
          <div className="d-grid gap-2">
            <CustomButton type='submit' className='my-4' text={realizarPedidoText} />
          </div>
        </Form>
      </Offcanvas.Body>
    </>
  )
};

export default Checkout;