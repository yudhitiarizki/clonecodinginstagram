import React from "react";
import "./Navbar.css";
import { Chat, Compass, Heart, HouseDoorFill, Instagram, List, Person, PlusSquare, Search } from "react-bootstrap-icons";
import NavbarOption from "./NavbarOption";

        const Navbar = () => {
          return (
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
              </button>
                <Instagram to="/" className="iconStyle"/>
                <NavbarOption to="/" Icon={<HouseDoorFill className="iconStyle"/>} text="Home" />
                <NavbarOption Icon={<Search className="iconStyle"/>} text="Search" />
                <NavbarOption to="/explore" Icon={<Compass className="iconStyle"/>} text="Explore" />
                <NavbarOption Icon={<Chat className="iconStyle"/>} text="Messages" />
                <NavbarOption Icon={<Heart className="iconStyle"/>} text="Notifications" />
                <NavbarOption Icon={<PlusSquare className="iconStyle"/>} text="Create" />
                <NavbarOption Icon={<Person className="iconStyle"/>} text="Profile" />
                <br/>
                <br/>
                <br/>
                <NavbarOption Icon={<List className="iconStyle"/>} text="More" />
            </div>
        </div>
    )
};

export default Navbar;

