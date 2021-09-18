import React, { useState, useEffect } from 'react'
import sanityClient from '../../sanityClient.js';
import { ItemList } from '../../components/ItemList';
import { Filtros } from '../../components/Filtros/index.jsx';
import "./styles.css";

export const ItemListContainer = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "product"]{
            title,
            price,
            "images": images[].asset->url,
            detail,
            measures,
            cares,
            colour,
            category->{title}
        }`).then((data) => {
            setProductData(data)
            console.log('囧INICIO囧', 'data: ', data, '囧FIN囧');
        }).catch(console.error)
    }, [])

   /*  return (
        <>
            {
                productData && productData.map(({images}) => (
                    <div>
                        {
                            images.length && images.map((imageUrl) => (
                                <img src={imageUrl} />
                            ))
                        }
                    </div>
                ))
            }
        </>
    ) */

    return (
        <div className="lista">
            <div className="filtros">
                <Filtros productos={productData}/>
            </div>
            <div className="cards">
                <ItemList productos={productData}/>
            </div>
        </div>
    )
}