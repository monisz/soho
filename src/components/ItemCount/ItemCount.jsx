import { useState /* useEffect */ } from "react";
import "./ItemCount.css";

export const ItemCount = ({item, initial, onAdd, cartAdd, from}) => {
    const [contador, setContador] = useState(initial);

    /* useEffect ( () => {
        setContador(initial)
    }, [initial, item]); */

    function sumar() {
            setContador(parseInt(contador) + 1);
    }

    function restar() {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
        }
    }

    return (
        <div className="detalle-carrito">
            <div className="detalle-cantidad">
                <button type="button" className="detalle-boton-controles" onClick={restar}> - </button>
                <p className="detalle-contador">{contador}</p>
                <button type="button" className="detalle-boton-controles" onClick={sumar}> + </button>
            </div>
            { from === "ItemDetail" ?
                <button className="btn btn-dark detalle-boton-anadir"
                    onClick={() => {onAdd(contador)}}>AÑADIR AL CARRITO
                </button>
                : contador !== initial && cartAdd({item, contador, initial}) 
            }
        </div>
    )
}


