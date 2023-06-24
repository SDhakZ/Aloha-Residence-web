/* 
- Navigation bar layout component
- Has responsive sttings which consists of toggle button
*/
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavbarCSS from "./navbar.module.css";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`${NavbarCSS["nav-header"]} ${
        isVisible ? "" : NavbarCSS["nav-hidden"]
      }`}
    >
      <div className={NavbarCSS["nav-container"]}>
        <div className={NavbarCSS["nav-row"]}>
          <div className={NavbarCSS["nav-menus"]}>
            <nav className={NavbarCSS["main-nav"]}>
              <NavLink
                className={NavbarCSS["nav-logo-name"]}
                exact="true"
                onClick={toggleClass}
                to={`/`}
              >
                <img src="/logo.png" className={NavbarCSS["nav-logo2"]} />
              </NavLink>
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <div
                  className={NavbarCSS["nav-icon"]}
                  style={{ display: "none" }}
                  onClick={() => {
                    toggleClass();
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <div className={NavbarCSS["cross"]}>
                    <ImCross />
                  </div>
                </div>
              ) : (
                <div
                  className={NavbarCSS["nav-icon"]}
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <div className={NavbarCSS["bars"]}>
                    <FaBars />
                  </div>
                </div>
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
                    to={`/our-offerings`}
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
                    <img className={NavbarCSS["nav-logo"]} src="/logo.png" />
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
                    className={NavbarCSS["contact-btn"]}
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
