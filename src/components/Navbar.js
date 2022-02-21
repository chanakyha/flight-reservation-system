import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PersonCircleIcon from "bootstrap-icons/icons/person-circle.svg";
import "./Navbar.css";

function Navbar(props) {
  let svgFormat = (svgName) => {
    return (
      <svg
        xmlns={svgName}
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    );
  };

  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark text-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            Fly-tify
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="bg-dark text-light offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
          >
            <div class="bg-secondary offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Context
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                {!props.loggedIn ? (
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                      Login
                    </a>
                  </li>
                ) : (
                  <React.StrictMode>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Routes
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {svgFormat(PersonCircleIcon)}
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="offcanvasNavbarDropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Account
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            My Bookings
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </React.StrictMode>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
