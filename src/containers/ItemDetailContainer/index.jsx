import { React, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ItemDetailComponent } from '../../components/ItemDetailComponent'
import { LoaderComponent } from '../../components/LoaderComponent';
import sanityClient from '../../sanityClient.js';

export const ItemDetailContainer = () => {
    const {title} = useParams();
    const [productData, setProductData] = useState(null);
    const [itemDetalle, setItemDetalle] = useState({});

    // console.log(title)
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
    
    // console.log(productData)

    useEffect ( () => {
        if (productData) {
            const itemBuscado = productData.find ((element) => element.title === title)
            if (productData.length !== 0) {
            !itemBuscado ? setItemDetalle("no existe")
                : setItemDetalle(itemBuscado)
            }    
        } 
    }, [title, productData]);


    if (Object.keys(itemDetalle).length === 0) {
        return <LoaderComponent />
    } else {
        if (itemDetalle === "no existe") {
            return (
                <div className="carrito-vacio">
                    <h2 className="carrito-titulo">El producto no existe</h2>
                    <button className="btn btn-dark">
                        <Link className="boton"  to={"/"}>Volver a la lista de productos</Link>
                    </button>
                </div>
                )
        } else {
            return (      
            <div>
                <ItemDetailComponent item={itemDetalle} />
            </div>
            )
        }
    }


}
