import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/maitenlogo.png";
import menuBurger from "../../imgs/icons/menu-svgrepo-com.svg";
import NavListItem from "./NavListItem";
const Navbar = () => {
    const [navBar, setNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <nav className={navBar || showMenu ? "navBar active" : "navBar"}>
            <div className="navContainer">
                <div className="navLogoContainer">
                    <NavLink to="/" onClick={() => setShowMenu(false)}>
                        <img src={logo} alt="maiten-logo" loading="lazy"></img>
                    </NavLink>
                </div>
                <ul className={showMenu ? "navActive" : null}>
                    <NavListItem
                        name="Inicio"
                        to="/"
                        setShowMenu={setShowMenu}
                    />
                    <NavListItem
                        name="Servicios"
                        to="/servicios"
                        setShowMenu={setShowMenu}
                    />
                    <NavListItem
                        name="Habitaciones"
                        to="/habitaciones"
                        setShowMenu={setShowMenu}
                    />
                    <NavListItem
                        name="Contacto"
                        to="/contacto"
                        setShowMenu={setShowMenu}
                    />
                </ul>
                <button
                    className="burgerButton"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img src={menuBurger}></img>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
