import { React, useState } from 'react'; 
//TODO arreglar cuando estén definidas las categorías


export const Filtros = ({productos}) => {
    const [filtro, setFiltro] = useState("");

    return (
        <div>
            <div>
                <input type="text" value={filtro} 
                    onInput={(el) => {setFiltro(el.target.value)}} />
                <h5>Filtros</h5>
            </div>
            <div>
                <p>Categoría</p>
               
                <p>Muebles</p>
                <p>Bazar</p>
        </div>

        
        </div>
    )
}