import React, { useState, useEffect } from 'react'
import sanityClient from '../../sanityClient.js';
import { ItemList } from '../../components/ItemList';
import { Filtros } from '../../components/Filtros/index.jsx';
import { useParams } from 'react-router';
import { Alert, Spinner } from 'react-bootstrap';
import "./styles.css";

export const ItemListContainer = () => {
    const [productData, setProductData] = useState(null);
    
    const { categoryFromUrl } = useParams();

    useEffect(() => {
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
    }, [categoryFromUrl]);

    return (
        <div className="lista">
            <div className="filtros">
                <Filtros productos={productData}/>
            </div>
            <div className="cards">
                {
                    productData ? (
                        productData.length > 0 ? (
                            <ItemList productos={productData}/>
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