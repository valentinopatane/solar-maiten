import React from "react";
import CardSlider from "../CardSlider/CardSlider";
import fango from "../../imgs/fangoterapia.jpg";
import piedras from "../../imgs/hot_stone_massage_1024x1024.webp";
import oil from "../../imgs/MASSAGE OIL 200722 GettyImages-495828240_SF.webp";
import face from "../../imgs/face-massage.jpg";
import anti from "../../imgs/relaxation-spa-massage.jpg";
import pool from "../../imgs/icons/swimming-pool-svgrepo-com.svg";
import massage from "../../imgs/icons/massage-svgrepo-com.svg";
const Spa = () => {
    const cards = [
        {
            img: piedras,
            title: "Masajes con piedras calientes",
            description:
                "De origen milenario utiliza el calor de las piedras naturales para relajar los musculos y desintoxicar la piel. (Consultar tarifa y disponibilidad horaria)",
        },
        {
            img: oil,
            title: "Masajes de aromas",
            description:
                "Con aceites esenciales específicos y a elección de acuerdo a su gusto. (Consultar tarifa y disponibilidad horaria)",
        },
        {
            img: fango,
            title: "Fangoterapia Facial",
            description:
                "Mejora la textura de la piel, restituye la elasticidad de la epidermis. (Consultar tarifa y disponibilidad horaria)",
        },
        {
            img: face,
            title: "Tratamientos faciales",
            description:
                "Masajes de relajación de rostro. (Consultar tarifa y disponibilidad horaria)",
        },
        {
            img: anti,
            title: "Tratamientos anti-age",
            description:
                "Limpieza y mascara efecto lifting (Consultar tarifa y disponibilidad horaria)",
        },
    ];
    return (
        <section className="servicesContainer">
            <article className="spaContainer">
                <div className="spaInfoContainer">
                    <h3>El mejor servicio de SPA.</h3>
                    <div className="infoChild">
                        <img src={pool} alt="icon" loading="lazy"></img>
                        <h5>Piscina climatizada con hidromasajes</h5>
                        <p>
                            El complejo cubierto, cuenta con una piscina
                            climatizada con una temperatura constante a 35° y
                            además con un sistema de hidromasajes, haciendo de
                            su uso, un momento de relajación único.
                        </p>
                    </div>
                    <div className="infoChild">
                        <img src={massage} alt="icon" loading="lazy"></img>
                        <h5>
                            Camillas de masajes con piedras calientes de Jade
                        </h5>
                        <p>
                            Elimina el estrés y las tensiones, actuando como
                            terapia de relax, terminando con síntomas de
                            cansancio crónico, insomnio y malestares de origen
                            nervioso. {""}
                            <span>
                                (Consultar tarifa y disponibilidad horaria)
                            </span>
                        </p>
                    </div>
                </div>
                <div className="spaInfoContainer">
                    <h3>Masajes de primer nivel</h3>
                    <CardSlider cards={cards} />
                </div>
            </article>
        </section>
    );
};

export default Spa;
