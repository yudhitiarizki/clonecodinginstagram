import React from "react";
import { Link } from "react-router-dom";
import './NavbarOption.css';

const NavbarOption = ({ text, Icon, url }) => {
    return (
        <Link to={url}>
            <div className="navbarOption">
                <Icon className="nav-icon" />
                <h3>{text}</h3>
            </div>
        </Link>
    )
}

export default NavbarOption;