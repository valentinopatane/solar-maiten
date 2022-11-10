import React from "react";
import spa from "../../../../imgs/icons/spa-svgrepo-com.svg";
import plus18 from "../../../../imgs/icons/18-plus-svgrepo-com.svg";
import relax from "../../../../imgs/icons/man-on-yoga-posture-of-relaxation-svgrepo-com.svg";
import comfortable from "../../../../imgs/icons/comfortable-sleep-svgrepo-com.svg";
import photo2 from "../../../../imgs/foto2.jpg";
const BlockIcons = () => {
    return (
        <div className="homeInfoIconsContainer">
            <div className="homeInfoIconsImg">
                <img src={photo2}></img>
            </div>
            <div className="homeInfoIcons">
                <div>
                    <img src={spa}></img>
                    <p>
                        Servicio de masajes, piscina climatizada e hidromasajes
                        para su descanso.
                    </p>
                </div>
                <div>
                    <img src={plus18}></img>
                    <p>
                        Nuestras instalaciones son exclusivas para parejas y
                        mayores de 18 años.
                    </p>
                </div>
                <div>
                    <img src={comfortable}></img>
                    <p>
                        Un espacio para encontrar el bienestar y comodidad que
                        toda persona necesita.
                    </p>
                </div>
                <div>
                    <img src={relax}></img>
                    <p>
                        La tranquilidad y seguridad de saber que nadie te
                        molesta.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlockIcons;
