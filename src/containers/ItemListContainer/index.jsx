import React, { useState, useEffect, useContext } from 'react'
/* import sanityClient from '../../sanityClient.js'; */
import { ItemList } from '../../components/ItemList';
import { Filtros } from '../../components/Filtros/index.jsx';
import { useParams } from 'react-router';
import { Alert, Spinner } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import "./styles.css";

export const ItemListContainer = () => {
    const context = useContext(CartContext); 
    const { categoryFromUrl } = useParams();
    const [productosAMostrar, setProductosAMostrar] = useState([]);
    let precioInicial = 0;

    /* useEffect(() => {
        sanityClient.fetch(`*[_type == "product" && category == "${categoryFromUrl}"]{
            title,
            price,
            "images": images[].asset->url,
            detail,
            measures,
            cares,
            colour,
            category
        }`).then((data) => {
            setProductData(data)
        }).catch(console.error)
    }, [categoryFromUrl]); */


    console.log(context.productData)
    
    useEffect ( () => {
        const prodXCategoria = context.productData.filter ( (element) => element.category === categoryFromUrl);
        setProductosAMostrar(prodXCategoria);
    }, [categoryFromUrl, context.productData]);
    
    
    function aplicarFiltros (filtro) {
        calcularRangoDePrecios(filtro)
        console.log("filtro antes de filtrar" + filtro)
        const filtrados = context.productData.filter ( (el) =>
            el.category === filtro  ||  el.colour.find ( (elem) => elem === filtro )
            || (el.price >= precioInicial && el.price <= filtro));
        console.log("filtrados" + `${JSON.stringify(filtrados)}`)
        setProductosAMostrar(filtrados);
        console.log("cambia a productos filtrados funcion")
    }

    function calcularRangoDePrecios (filtro) {
        if (filtro === 4000) {
            precioInicial = 2001;
            } else  { if (filtro === 100000) {
                    precioInicial = 4001;
                    }
            }
    }

    console.log("productos a mostrar" + `${JSON.stringify(productosAMostrar)}`)

    return (
        <div className="lista">
            <div className="filtros">
                <Filtros aplicarFiltros={aplicarFiltros}/>
            </div>
            <div className="cards">
                {
                    productosAMostrar ? (
                        productosAMostrar.length > 0 ? (
                            <ItemList productos={productosAMostrar}/>
                        ) : (
                            <Alert variant="warning" className='ob-aw'>
                                No hay productos.
                            </Alert>
                        )
                    ) : (
                        <div className="il-spinner">
                            <Spinner animation="border"/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}