import { React, useState } from 'react'; 
import "./styles.css";


export const Filtros = ({aplicarFiltros}) => {
    const [filtro, setFiltro] = useState("");

    console.log(filtro);

    return (
        <div>
            <div className="filtros-inicio">
                <div className="filtros-buscar">
                    <input className="filtros-input" type="text" value={filtro} 
                        onInput={(el) => {setFiltro(el.target.value)}} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <h6>Filtros</h6>
            </div>
            <div className="filtros-general">
                <div>
                    <p className="filtros-titulos">Categoría</p>
                    <div>
                        <button type="button" className="filtros-detalle"
                            onClick={() => {setFiltro("muebles")}}>Muebles
                        </button>
                    </div>
                    <div>
                        <button type="button" className="filtros-detalle"
                            onClick={() => {setFiltro("bazar")}}>Bazar
                        </button>
                    </div>
                </div>
                <div>
                    <p className="filtros-titulos" >Precio</p>
                    <div>
                        <button type="button" className="filtros-detalle"
                            onClick={() => {setFiltro(2000)}}>$ 0 - $ 2.000,00
                        </button>
                    </div>
                    <div>
                        <button type="button" className="filtros-detalle"
                            onClick={() => {setFiltro(4000)}}>$ 2.001 - $ 4.000,00
                        </button>
                    </div>
                    <div>
                        <button type="button" className="filtros-detalle"
                            onClick={() => {setFiltro(100000)}}>$ 4.001 y más
                        </button>
                    </div>
                </div>
                <div>
                    <p className="filtros-titulos">Color</p>
                    <div className="filtros-color">
                        <button type="button" className="filtros-circulo negro"
                            onClick={() => {setFiltro("negro")}}>
                        </button>
                        <button type="button" className="filtros-circulo blanco"
                            onClick={() => {setFiltro("blanco")}}>
                        </button>
                    </div>
                </div>
            </div>
            <div className="filtros-boton">
                <button className="btn btn-dark boton-filtrar"
                    onClick={() => {aplicarFiltros(filtro)}}>Aplicar filtros
                </button>
            </div>
        </div>
    )
}