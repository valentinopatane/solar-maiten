import React from "react";
import ig from "../../imgs/icons/instagram-svgrepo-com.svg";
import phone from "../../imgs/icons/phone-svgrepo-com.svg";
import mail from "../../imgs/icons/mail-svgrepo-com.svg";
import { Link } from "react-router-dom";
const ContactInfo = () => {
    return (
        <section className="contactContainer">
            <article className="infoContactContainer">
                <h3>TU CONSULTA NO MOLESTA!</h3>
                <div className="contactSocials">
                    <Link>
                        <img src={phone}></img>
                        <p>Tel:43829098</p>
                    </Link>
                    <Link>
                        <img src={ig}></img>
                        <p>@solarmaiten</p>
                    </Link>
                    <Link>
                        <img src={mail}></img>
                        <p>solarmaiten@gmail.com</p>
                    </Link>
                </div>
                <h5>Envia un mail directo!</h5>
                <form>
                    <input placeholder="Nombre *" required></input>
                    <input placeholder="Email *" required></input>
                    <input placeholder="Telefono"></input>
                    <textarea placeholder="Mensaje *" required></textarea>
                    <button>Enviar</button>
                </form>
            </article>
            <article className="ubiContainer">
                <h3>LA MEJOR UBICACIÓN</h3>
                <p>
                    Estamos ubicados en una zona estratégica, en un barrio
                    residencial a pocas cuadras del camino del vino y el polo
                    gastronómico de la ciudad.
                </p>
                <span>Champagnat 625 - GPS S34°36'752" W 68°21'560"</span>
            </article>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.8343819296429!2d-68.35903517854305!3d-34.61253654462391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc39b2439f10bd46!2zMzTCsDM2JzQ1LjQiUyA2OMKwMjEnMzIuOSJX!5e0!3m2!1ses-419!2sus!4v1667608899053!5m2!1ses-419!2sus"
                allowfullscreen=""
                title="Solar Maiten Ubicación"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="300px"
            ></iframe>
        </section>
    );
};

export default ContactInfo;
