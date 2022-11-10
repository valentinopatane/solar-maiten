import React from "react";
import { NavLink } from "react-router-dom";

const NavListItem = ({ name, to, setShowMenu }) => {
    const activeStyle = { borderBottom: "3px solid #f05742" };

    return (
        <li>
            <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                exact="true"
                to={to}
                onClick={() => setShowMenu(false)}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavListItem;
