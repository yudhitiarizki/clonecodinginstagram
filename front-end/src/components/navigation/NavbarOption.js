import React from "react";
import { NavLink } from "react-router-dom";
import './NavbarOption.css';

const NavbarOption = ({ text, Icon, url }) => {
    return (

        <NavLink to={url} className="navbarOption">
            {Icon}
            <h3>{text}</h3>
        </NavLink>

    )
}

export default NavbarOption;