import React, { useState, useEffect, useContext } from 'react';
import { ItemList } from '../../components/ItemList';
import { Filtros } from '../../components/Filtros/index.jsx';
import { useHistory, useParams } from 'react-router';
import { Alert, Spinner } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import "./styles.css";

export const ItemListContainer = () => {
    const { productData, loading } = useContext(CartContext); 
    const { categoryFromUrl } = useParams();
    const [productosAMostrar, setProductosAMostrar] = useState([]);
    const history = useHistory();
    let precioInicial = 0;

    useEffect ( () => {
        const prodXCategoria = productData.filter ( (element) => element.category === categoryFromUrl);
        setProductosAMostrar(prodXCategoria);
    }, [categoryFromUrl, productData]);
    
    const aplicarFiltros = (filtro) => {
        calcularRangoDePrecios(filtro);
        if (filtro === 'muebles') {
            history.push('/categoria/muebles');
        } else if (filtro === 'bazar') {
            history.push('/categoria/bazar');
        };
        const filtrados = productData.filter(el =>
            el.category === filtro || 
            el.colour.find(elem => elem === filtro ) ||
            (el.price >= precioInicial && el.price <= filtro)
        );
        setProductosAMostrar(filtrados);
    }

    const calcularRangoDePrecios = (filtro) => {
        if (filtro === 4000) {
            precioInicial = 2001;
        } else if (filtro === 100000) {
            precioInicial = 4001;
        }
    }

    return (
        <div className="lista">
            <div className="filtros">
                <Filtros aplicarFiltros={aplicarFiltros}/>
            </div>
            <div className="cards">
                {
                    loading ? (
                        <div className="il-spinner">
                            <Spinner animation="border"/>
                        </div>
                    ) : (
                        productosAMostrar.length > 0 ? (
                            <ItemList productos={productosAMostrar}/>
                        ) : (
                            <Alert variant="warning" className='ob-aw'>
                                No hay productos.
                            </Alert>
                        )
                    )
                }
            </div>
        </div>
    )
}