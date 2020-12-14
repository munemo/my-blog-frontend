import React from "react";
import "../src/css/scrolling-nav.css";
import "../src/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/jquery-easing/jquery.easing";
import "./vendor/bootstrap/js/bootstrap.bundle";


function Navigation() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary text-white">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#top-page">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Frontend
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="../src/react.html">
                  React Native
                </a>
                <a class="dropdown-item" href="#">
                  Bootstrap
                </a>
                <a class="dropdown-item" href="#">
                  Semantic UI
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Backend
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Ruby on Rails
                </a>
                <a class="dropdown-item" href="#">
                  node.Js
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navigation;
