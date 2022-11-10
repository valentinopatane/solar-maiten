import React from "react";
import trophie from "../../../imgs/icons/award-star-with-olive-branches-svgrepo-com.svg";

const Award = () => {
    return (
        <div className="homeAward">
            <div className="opacityDiv"></div>
            <img src={trophie}></img>
            <p>
                Distinguido con el galardón de{" "}
                <span>"Compromiso de Calidad Turística"</span>, otorgado por la
                Secretaria de Turismo de la Nación Argentina.
            </p>
        </div>
    );
};

export default Award;
