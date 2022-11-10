import React from "react";
import room1 from "../../imgs/room1.jpg";
import room2 from "../../imgs/room2.jpg";
import room3 from "../../imgs/room3.jpg";
import room4 from "../../imgs/room4.jpg";
import check from "../../imgs/icons/check-svgrepo-com.svg";

const RoomsInfo = () => {
    const roomS = [
        "Baño completo",
        "Cocina con anafe",
        "Microondas",
        "Heladera",
        "Vajilla completa",
        "Aire acondicionado / Calefacción",
    ];
    const imgs = [room1, room2, room3, room4];
    return (
        <section className="roomSection">
            <h3>
                Contamos con calidad <b>PREMIUM</b>
            </h3>
            <p>Todas nuestras habitaciones están equipadas y cuentan con:</p>
            <ul>
                {roomS.map((s) => (
                    <li>
                        <img src={check}></img>
                        <span>{s}</span>
                    </li>
                ))}
            </ul>
            <div className="roomImgsContainer">
                {imgs.map((img) => (
                    <div>
                        <img src={img}></img>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomsInfo;
