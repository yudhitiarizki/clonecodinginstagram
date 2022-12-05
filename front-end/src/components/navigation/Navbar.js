import React from "react";
import "./Navbar.css";
import { Chat, Compass, Heart, HouseDoorFill, Instagram, List, Person, PlusSquare, Search } from "react-bootstrap-icons";
import NavbarOption from "./NavbarOption";

const Navbar = () => {
    return (
        <div className="navbar">
            <Instagram url="/" className="iconStyle"/>
            <NavbarOption url="/" Icon={<HouseDoorFill className="iconStyle"/>} text="Home" />
            <NavbarOption url="/search" Icon={<Search className="iconStyle"/>} text="Search" />
            <NavbarOption url="/explore" Icon={<Compass className="iconStyle"/>} text="Explore" />
            <NavbarOption url="/messages" Icon={<Chat className="iconStyle"/>} text="Messages" />
            <NavbarOption url="/notifs" Icon={<Heart className="iconStyle"/>} text="Notifications" />
            <NavbarOption url="/create" Icon={<PlusSquare className="iconStyle"/>} text="Create" />
            <NavbarOption url="/profile" Icon={<Person className="iconStyle"/>} text="Profile" />
            <br/>
            <br/>
            <br/>
            <NavbarOption url="/" Icon={<List className="iconStyle"/>} text="More" />
        </div>
    )
};

export default Navbar;