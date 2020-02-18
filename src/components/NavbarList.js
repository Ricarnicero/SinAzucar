import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {  
  render() {
    var displayName = this.props.displayName
    var item
    if (displayName) item = (<Link
      to="/Profile"
      className="text-decoration-none text-white sidenav-close"
    >
      {displayName}
    </Link>)
    else item = (<Link
      to="/login"
      className="text-decoration-none text-white sidenav-close"
    >
      Inicia Sesion
    </Link>)
    return (
      <ul className={this.props.className} id={this.props.navId}>
  <li>{item}</li>
        <li>
          <Link
            to="/Receta"
            className="text-decoration-none text-white sidenav-close"
          >
            Recetas
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-decoration-none text-white sidenav-close"
          >
            JavaScript
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
