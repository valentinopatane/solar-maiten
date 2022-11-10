import React from "react";
import logo from "../../imgs/maitenlogo.png";
import ig from "../../imgs/icons/instagram-svgrepo-com.svg";
import phone from "../../imgs/icons/phone-svgrepo-com.svg";
import mail from "../../imgs/icons/mail-svgrepo-com.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="rights">
                <p>Solar Maiten 2022. Todos los derechos reservados.</p>
            </div>
            <div className="logo">
                <img src={logo} alt="maiten-logo" loading="lazy"></img>
            </div>
            <div className="footerSocials">
                <Link>
                    <img src={phone} alt="contact-icon" loading="lazy"></img>
                </Link>
                <Link>
                    <img src={ig} alt="contact-icon" loading="lazy"></img>
                </Link>
                <Link>
                    <img src={mail} alt="contact-icon" loading="lazy"></img>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
