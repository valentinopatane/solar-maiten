import React from "react";
import photo1 from "../../../../imgs/foto1.jpg";

const BlockData = () => {
    return (
        <div className="homeInfoDataContainer">
            <div className="homeInfoData">
                <div>
                    <h4>
                        Una Experiencia <b>Inolvidable</b>
                    </h4>
                    <p>
                        Solar Maiten tiene un conjunto de servicios que tienen
                        por finalidad ofrecer a los huéspedes una atención
                        integral pensada para su descanso, la salud y la calidad
                        de vida.
                    </p>
                </div>
            </div>
            <div className="homeInfoDataImg">
                <img src={photo1} loading="lazy" alt="image"></img>
            </div>
        </div>
    );
};

export default BlockData;
