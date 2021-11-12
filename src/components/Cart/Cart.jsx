import React, { useState } from 'react';
import { Alert, ListGroup, Offcanvas } from 'react-bootstrap';
import Checkout from '../Checkout/Checkout';
import CustomButton from '../CustomButton/CustomButton';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';

const Cart = () => {
  const context = useContext(CartContext);
  const quantityProducts = context.cartWidget;
  const [show, setShow] = useState(false);
  let cantidad = 0;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // console.log(context.carrito)

  function cartAdd ({item, contador, initial}) {
    contador > initial ? cantidad = contador - initial
                        : cantidad = -(initial - contador)
    context.addItem({item, cantidad})
  }

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
                    context.carrito.map((product, i) => (
                      <ListGroup.Item key={i} >
                        <img src={product.item.images[0]} alt={product.item.title} className='li-item item1 ob-li-im'/>
                        <p className='li-item item2'>{product.item.title}</p>
                        <div className='li-item item3'>
                          <ItemCount item={product.item} initial={product.cantidad} cartAdd={cartAdd} />
                        </div>
                        <div className='li-item item4' onClick={() => {context.removeItem(product.item.title)}}>
                          <img src='../../imagenes/delete_ic.svg' alt='Eliminar producto' className='ob-li-ic' />
                          &nbsp;
                          Eliminar
                        </div>   
                        <p className='li-item item5'>Subtotal: $ {product.item.price*product.cantidad}</p>
                      </ListGroup.Item>
                    ))
                  }
              </ListGroup>
              <p className='ob-total'>
                Total: $ <span className='ob-span'>{context.precioTotal}</span>
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


/* {
  quantityProducts > 0
    ? <>
      <ListGroup variant="flush">
          {
            context.carrito.map((product, i) => (
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
 */