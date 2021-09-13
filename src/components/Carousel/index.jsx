import React, { useEffect, useState } from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import sanityClient from "../../sanityClient";
import './styles.css';


export const HomeCarousel = () => {
  const [carousels, setCarousels] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "carousel"]{
      "images": images[].asset->url,
    }`).then((data) => {
      setCarousels(data)
    }).catch(console.error)
  }, [])

  return (
    <>
      <Carousel fade variant="dark">
        {
          carousels && carousels[0].images.map((imgUrl, i) => (
            <Carousel.Item key={i} interval={2000}>
              <img className="d-block w-100" src={imgUrl} alt={`mueblePrincipal${i}`} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )
}