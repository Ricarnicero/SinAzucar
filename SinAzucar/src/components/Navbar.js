import React from "react";
import { Link } from "react-router-dom";
import "../css/theme.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarList from "./NavbarList";

class Navbar extends React.Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav-extended main-light-2">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo ml-2 text-decoration-none">
              <span className="font-weight-bold text-white">Sin</span>
              <span className="font-weight-light text-white">Azúcar</span>
            </Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <NavbarList
              navId="nav-mobile"
              className="right hide-on-med-and-down"
            />
          </div>
        </nav>
        <NavbarList navId="mobile-demo" className="sidenav green lighten-2" />
      </React.Fragment>
    );
  }
}

export default Navbar;
