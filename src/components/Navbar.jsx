import React, { Fragment, useState } from "react";
import "./css/navbar.css";

const Navbar = () => {
  const [toggal, setToggal] = useState(true);
  return (
    <Fragment>
      <header className="nav_header">
        <div className="logo_section">
          <h3 className="logo">Studios</h3>
        </div>
        <nav className={toggal ? "navbar_section " : "navbar_section active"}>
          <ul className="nav_item">
            <li>
              <a className="navLink" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Sign In
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <div className="toggal-button" onClick={() => setToggal(!toggal)}>
          <i
            className={
              toggal
                ? "fa-solid fa-bars menu-icon activemenu"
                : ". fa-solid fa-bars menu-icon"
            }
          ></i>
          <i
            className={
              toggal
                ? "fa-solid fa-xmark menu-cross "
                : "fa-solid fa-xmark activemenu  "
            }
          ></i>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
