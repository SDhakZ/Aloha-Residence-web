/* 
- Navigation bar layout component
- Has responsive sttings which consists of toggle button
*/
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavbarCSS from "./navbar.module.css";
import logo from "../assets/Images/logo.png";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  return (
    <header className={NavbarCSS["nav-header"]}>
      <div className={NavbarCSS["nav-container"]}>
        <div className={NavbarCSS["nav-row"]}>
          <div className={NavbarCSS["nav-menus"]}>
            <nav className={NavbarCSS["main-nav"]}>
              <div className={NavbarCSS["nav-logo-name"]}>
                <img src={logo} className={NavbarCSS["nav-logo2"]} />
              </div>
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <span
                  className={NavbarCSS["nav-icon"]}
                  style={{ display: "none" }}
                  onClick={() => {
                    toggleClass();
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <span className={NavbarCSS["cross"]}>
                    <ImCross />
                  </span>
                </span>
              ) : (
                <span
                  className={NavbarCSS["nav-icon"]}
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <span className={NavbarCSS["bars"]}>
                    <FaBars />
                  </span>
                </span>
              )}

              <ul
                className={
                  isMenu
                    ? `${NavbarCSS["main-menu"]} ${NavbarCSS["menu-right"]} ${NavbarCSS["menu-container"]}`
                    : `${NavbarCSS["main-menu"]} ${NavbarCSS["menu-right"]}`
                }
              >
                <li className={NavbarCSS["menu-item"]}>
                  <NavLink exact="true" onClick={toggleClass} to={`/`}>
                    Home
                  </NavLink>
                </li>

                <li className={NavbarCSS["menu-item"]}>
                  <NavLink
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                    to={`/themes`}
                  >
                    Our Offerings
                  </NavLink>
                </li>
                <li className={NavbarCSS["menu-item"]}>
                  <NavLink
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                    to={`/gallery`}
                  >
                    Gallery
                  </NavLink>
                </li>

                <li className={NavbarCSS["menu-logo"]} href="/">
                  <NavLink
                    className={NavbarCSS["logo-noU"]}
                    exact="true"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    <img className={NavbarCSS["nav-logo"]} src={logo} />
                  </NavLink>
                </li>

                <li className={NavbarCSS["menu-item"]}>
                  <NavLink
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                    to={`/layouts`}
                  >
                    Layouts
                  </NavLink>
                </li>
                <li className={NavbarCSS["menu-item"]}>
                  <NavLink
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                    to={`/about-us`}
                  >
                    About Us{" "}
                  </NavLink>
                </li>

                <li className={NavbarCSS["menu-item"]}>
                  <NavLink
                    onClick={() => {
                      toggleClass();
                      window.scrollTo({ top: 0 });
                    }}
                    to={`/contact-us`}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;
