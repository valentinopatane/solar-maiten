import React from "react";
import check from "../../imgs/icons/check-svgrepo-com.svg";
const ServicesInfo = () => {
    const commS = [
        "Mucama",
        "Ropa blanca",
        "Internet banda ancha y wifi.",
        "Piscina al aire libre de 8 x 4 m.",
        "Amplio jardin",
        "Piscina climatizada c/ hidromasaje",
        "Camillas de masajes",
        "Estacionamiento techado",
        "Parrillas",
    ];
    return (
        <article className="roomServicesContainer">
            <div>
                <h4>Servicios del Complejo</h4>
                <ul>
                    {commS.map((s) => (
                        <li>
                            <img
                                src={check}
                                alt="check-logo"
                                loading="lazy"
                            ></img>
                            <span>{s}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ServicesInfo;
