import React, { useContext, useState, useEffect } from 'react'
import { ItemListComponent } from '../../components/ItemListComponent'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import sanityClient from '../../sanityClient.js';


export const ItemListContainer = () => {
    //const context = useContext(CartContext);

    const [postData, setPost] = useState(null);

    useEffect( () => {
        console.log("esta en useEffect")
        sanityClient.fetch(`*[_type == "mueble"]{
            nombre,
            imagen,
            precio
            }
        }`).then((data) => {
            setPost(data)
            console.log(data)
        })

        .catch(console.error)

        /* sanityClient.getDocuments(['mueble']).then(([mueble]) => {
            console.log(`${mueble.name}`)
        }) */
        console.log(postData)
    },[])


    if (!postData) {return (
        <div>Loading...</div>
        )}
        else {
    return (
    
        <div>
            <ItemListComponent />
            {console.log("muestra dato" + postData.nombre)}

            <main className="bg-green-100 min-h-screen p-12">
                <section className="container mx-auto">
                    <h1 className="text-5xl flex justify-center">Blog</h1>
                    <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Blog Page</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        // Hacemos un bucle para sacar los datos que hemos traído de la api de Sanity
                        {postData && postData.map((mueble, index) => (
                            <div>
                            <h2>{mueble.nombre}</h2>
                            <img src={document.imagen} />
                            <h3>{document.precio}</h3>
                        </div>
                            
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
    }
}

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
    console.log(data)
},[]) */

/* return (
    
    <div>
        <ItemListComponent />
    
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Blog</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Blog Page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    // Hacemos un bucle para sacar los datos que hemos traído de la api de Sanity
                    {postData && postData.map((post, index) => (
                        <div>
                            <h2>{post.nombre}</h2>
                            <img src={post.imagen} />
                            <h3>{post.precio}</h3>
                        </div>
                        <article>
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                                    <img 
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                        />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-green-700 text-green-100 bg-opacity-75 rounded">{post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    </div>
)
 */