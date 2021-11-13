import React from 'react';
import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./styles.css";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetailComponent = ({item}) => {
    const context = useContext(CartContext);

    const history = useHistory();

    function onAdd (contador) {
        const cantidad = Number(contador);
        context.addItem({item, cantidad});
    }

    return (
        <div className="detalle">
            <button className="detalle-volver">
                <div className="detalle-volver-flecha">
                    <img src='/imagenes/back_id.svg' alt="volver" onClick={() => history.goBack()} />
                </div>
            </button>
            <div className="detalle-izquierda">
                <img className="detalle-img" src={item.images[0]} alt={item.title} />
                <ItemCount item={item} initial={1} onAdd={onAdd} from={"ItemDetail"} />
                <Nav.Link className="detalle-chatea" href='https://wa.me/message/OCTVKP3KIITBI1' target="_blank">
                    <p className="detalle-chatea-contenido">Chateá con nosotros
                        <img src="/imagenes/wpp_id.svg" alt="chat_wpp" className='style-chat' />
                    </p>
                </Nav.Link>
            </div>
            <div className="detalle-derecha">
                <h2 className="detalle-titulo">{item.title}</h2>
                <h3>ARS $ {item.price}</h3>
                <p className="detalle-especificaciones">{item.measures}</p>
                <p className="detalle-opcionales">{item.cares}</p>
            </div>
        </div>
    )
}