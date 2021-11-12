import { createContext, useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [productData, setProductData] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [cartWidget, setCartWidget] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

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

    //console.log(productData)
    //console.log(carrito)
    
    useEffect ( () => {
        const carritoEnLocal = JSON.parse(localStorage.getItem('carrito'));
        if (carritoEnLocal) {
            setCarrito(carritoEnLocal);
            setCartWidget(carritoEnLocal.reduce((ac, element) =>
            ac += element.cantidad, 0));
        }
    }, []);

    useEffect ( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        const total = carrito.reduce((ac, element) =>
           ac += (element.item.price * element.cantidad)
        , 0);
        setPrecioTotal(total);
    }, [carrito]);

    const addItem = ({item, cantidad}) => {
        if (isInCart(item.title)) {
            const carritoModif = carrito.map(elemento => {
                if (elemento.item.title === item.title) {
                    return { ...elemento, cantidad: elemento.cantidad + cantidad }
                } else return elemento;
            })
            setCarrito(carritoModif);
        } else {
            setCarrito(previo => [ ...previo, { item, cantidad }]);
        }
        actualizarCartWidget(cantidad);
    };
    
    const isInCart = title => carrito.find(element => element.item.title === title);
    
    const removeItem = (title) => {
        actualizarCartWidget(-isInCart(title).cantidad);
        let carritoModif = [];
        carrito.forEach( (elemento) => {
            if (elemento.item.title !== isInCart(title).item.title) {
                carritoModif.push(elemento);
            }
        })
        setCarrito(carritoModif);
    }

    const clear = () => {
        setCarrito([]);
        setCartWidget(0);
    }

    const actualizarCartWidget = (cantidad) => {
        setCartWidget(cartWidget + cantidad);
    }

    return (
        <CartContext.Provider value={{productData, carrito, cartWidget, precioTotal, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}