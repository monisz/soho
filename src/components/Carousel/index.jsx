import React from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';


export const HomeCarousel = () => {

  return (
    <>
      <Carousel fade variant="dark">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src='imagenes/mesaRatona.png' alt="mesa ratona Soho" />
        </Carousel.Item>
        <Carousel.Item interval={2000} >
          <img className="d-block w-100" src='imagenes/rackSimetrico.png' alt="rack Soho" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src='imagenes/biblioteca.png' alt="biblioteca Soho" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}