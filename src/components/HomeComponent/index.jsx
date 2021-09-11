import React from 'react';
import { HomeCarousel } from '../Carousel';
import './styles.css';

export const HomeComponent = () => {
    return (
        <div className="home">
            <h3 className="homeDesign">HOME DESIGN</h3>
            <div className="centro">
                <h1 className="mueblesNordicos">Muebles nórdicos para el hogar</h1>
                <div className="carrusel">
                    <HomeCarousel />
                </div>
            </div>
            <p className="compra">Comprá sin moverte de tu casa</p>
            <p className="chatea">Chateá con nosotros</p>
        </div>
    )
}


{/* <img src={producto.img} className="card-img-top imagen" alt="imagen ML" /> */}