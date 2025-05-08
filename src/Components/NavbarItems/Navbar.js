import React, { useState } from "react";
import RAMIT_Logo from "../../Assets/Home/RAM_IT_LOGO.png";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "../Drop-Down-Menu/ActivityDropDown";

function Navbar() {
  {
    const [dropdown, setDropdown] = useState(false);
    const [clicked, setClicked] = useState(false);
    return (
      <nav className="NavbarItems">
        <h2>
          <Link data-testid="link" to="/">
            <span>
              <img id="RAMIT-logo" src={RAMIT_Logo}></img>
            </span>
          </Link>
        </h2>
        {/* <Link class="header-link" to="/">
          <span id="app-title">RAM IT</span>
        </Link> */}
        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "Software Development") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
