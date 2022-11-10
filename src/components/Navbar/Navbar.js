import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/maitenlogo.png";
import menuBurger from "../../imgs/icons/menu-svgrepo-com.svg";
const Navbar = () => {
    const activeStyle = { borderBottom: "3px solid #f05742" };
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
                    <NavLink to="/">
                        <img src={logo} alt="logo"></img>
                    </NavLink>
                </div>
                <ul className={showMenu ? "navActive" : null}>
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            exact="true"
                            to="/"
                            onClick={() => setShowMenu(false)}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            exact="true"
                            to="/servicios"
                            onClick={() => setShowMenu(false)}
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            exact="true"
                            to="/habitaciones"
                            onClick={() => setShowMenu(false)}
                        >
                            Habitaciones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            exact="true"
                            to="/contacto"
                            onClick={() => setShowMenu(false)}
                        >
                            Contacto
                        </NavLink>
                    </li>
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
