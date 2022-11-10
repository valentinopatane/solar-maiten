import React from "react";
import photo3 from "../../../imgs/foto3.jpg";
import photo4 from "../../../imgs/foto4.jpg";
const EndHome = () => {
    return (
        <section className="homeInfo">
            <div className="homeInfoDataContainer">
                <div className="homeInfoData">
                    <div>
                        <h4>
                            <b>Solar Maiten</b> "Naturaleza y Hospitalidad"
                        </h4>
                        <p>
                            Pensando en alcanzar la mayor satisfacción al
                            turista, nació SOLAR MAITEN. Es un apart hotel
                            cuidadosamente decorado y equipado. Solar Maiten es
                            recomendado para parejas, por su privacidad,
                            tranquilidad y buen gusto. Desde el complejo, los
                            pasajeros podran contratar todo tipo de excursiones,
                            desde trekking, paseos en catamarán, turismo rural,
                            rafting, visitas a bodegas, deportes náuticos,
                            salidas en 4x4, etc.
                        </p>
                    </div>
                </div>
                <div className="homeInfoDataImg">
                    <img src={photo3} alt="image" loading="lazy"></img>
                </div>
            </div>
            <div className="homeInfoDataContainer">
                <div className="homeInfoDataImg">
                    <img src={photo4} alt="image" loading="lazy"></img>
                </div>
                <div className="homeInfoData">
                    <div>
                        <h4>
                            <b>San Rafael</b>, el corazón de Mendoza.
                        </h4>
                        <p>
                            El departamento de San Rafael está ubicado en el
                            centro de la provincia de Mendoza, Argentina. Dos
                            ríos recorren su superficie, el río Diamante y el
                            río Atuel, cuyos cursos son unos de los más
                            aprovechados por la provincia. <br />
                            Cuenta con una gran cantidad de comercios dedicados
                            al turismo, el agro, la industria vitivinícola y
                            otros rubros. En estos últimos tiempos ha mostrado
                            un gran aumento de turistas, casi en su mayoría del
                            exterior, que vienen a conocer sus increíbles
                            paisajes. Muy importante por su aporte al vino
                            argentino, también se encuentran en San Rafael
                            algunas de las principales bodegas y champaneras de
                            la provincia de Mendoza.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EndHome;
