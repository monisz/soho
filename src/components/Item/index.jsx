import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ producto }) => {
    if (producto.title && producto.price) {
        return (
            <div className="item" >
                <h6 className="">{producto.title}</h6>
                <img className="item-imagen" src={producto.images[0]} alt="rack Soho" />
                <h6>ARS $ {producto.price}</h6>
                <p className="item-detalle">Especificaciones... 
                    <Link className="item-link" 
                        to={`/detalle/${producto.title}`}>Leer más
                    </Link>
                </p>  
            </div>
        )
    }
}
