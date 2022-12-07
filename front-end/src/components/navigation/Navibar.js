import React from "react";
import "./Navibar.css";
import { Chat, Compass, Heart, HouseDoorFill, Instagram, List, Person, PlusSquare, Search } from "react-bootstrap-icons";
import NavbarOption from "./NavbarOption";
import { Link } from "react-router-dom";

const Navibar = () => {
    return (
        <div className="navibar">
            <Link to='/'>
                <Instagram className="insta-icon" />
            </Link>
            <NavbarOption url="/" Icon={HouseDoorFill} text="Home" />
            <NavbarOption url="/search" Icon={Search} text="Search" />
            <NavbarOption url="/explore" Icon={Compass} text="Explore" />
            <NavbarOption url="/messages" Icon={Chat} text="Messages" />
            <NavbarOption url="/notifs" Icon={Heart} text="Notifications" />
            <NavbarOption url="/create" Icon={PlusSquare} text="Create" />
            <NavbarOption url="/profile" Icon={Person} text="Profile" />
            <NavbarOption url="/more" Icon={List} text="More" />
        </div>
    )
};

export default Navibar;