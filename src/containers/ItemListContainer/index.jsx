import React, { useState, useEffect } from 'react'
import sanityClient from '../../sanityClient.js';

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

    return (
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
    )
}