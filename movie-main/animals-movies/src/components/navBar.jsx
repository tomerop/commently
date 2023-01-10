import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-§-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <Link to="/comments">
              <a class="nav-link">Comments</a>
            </Link>
            <Link to="/addComment">
              <a class="nav-link" href="#">
                add Comments
              </a>
            </Link>
            <Link to="/signUp">
              <a class="nav-link" href="#">
                sign Up{" "}
              </a>
            </Link>
            <Link to="/signIn">
              <a class="nav-link" href="#">
                sign In{" "}
              </a>
            </Link>
            <button
              onClick={() => {
                localStorage.setItem("token", null);
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
