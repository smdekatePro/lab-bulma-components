// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";

function Navbar() {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="Bulma logo"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>

        <div className="buttons">
          <CoolButton isPrimary>
            <strong>Sign up</strong>
          </CoolButton>
          <CoolButton isLight>Log in</CoolButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
