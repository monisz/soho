import { createContext, useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [postdata, setPost] = useState(null);

    /* useEffect( () => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            weight in grams,
            price
            mainImage{
                asset->{
                    _id,
                    url,
                },
                alt
            }
        }`).then((data) => setPost(data))
        .catch(console.error)
    },[]) */


    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}