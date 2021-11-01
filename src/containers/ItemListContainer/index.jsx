import React, { useState, useEffect, useContext } from 'react'
/* import sanityClient from '../../sanityClient.js'; */
import { ItemList } from '../../components/ItemList';
import { Filtros } from '../../components/Filtros/index.jsx';
import { useParams } from 'react-router';
import { Alert, Spinner } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import "./styles.css";

export const ItemListContainer = () => {
    /* const [productData, setProductData] = useState(null); */
    const context = useContext(CartContext); 
    const { categoryFromUrl } = useParams();
    const [productosXCategoria, setProductosXCategoria] = useState([]);

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
        const productosFiltrado = context.productData.filter ( (element) => element.category === categoryFromUrl);
        setProductosXCategoria(productosFiltrado);
    }, [categoryFromUrl, context.productData]);

    return (
        <div className="lista">
            <div className="filtros">
                <Filtros productos={productosXCategoria}/>
            </div>
            <div className="cards">
                {
                    productosXCategoria ? (
                        productosXCategoria.length > 0 ? (
                            <ItemList productos={productosXCategoria}/>
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