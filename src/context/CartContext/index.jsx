import { createContext, useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "product"]{
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
    }, []);

    console.log(productData)

    return (
        <CartContext.Provider value={{productData}}>
            {children}
        </CartContext.Provider>
    )
}