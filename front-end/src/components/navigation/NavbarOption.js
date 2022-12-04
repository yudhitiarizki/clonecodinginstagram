import React from "react";
import './NavbarOption.css';

const NavbarOption = ({text, Icon})=>{
    return(
        <div className="navbarOption">
            {Icon}
            <h3>{text}</h3>
        </div>
    )
}

export default NavbarOption;