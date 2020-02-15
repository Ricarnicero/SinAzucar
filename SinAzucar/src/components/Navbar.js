import React from "react";

class Navbar extends React.Component { 
  state = {displayName:null}

  componentDidMount() {
    // Auto initialize all the things!
    if(this.props.usuario)
    this.setState({displayName:this.props.usuario.email})
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <button type="button" className="navbar-brand">Hidden brand</button>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <button type="button" className="nav-link" href="#">Home <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link" href="#">Link</button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</button>
      </li>
    </ul>
  </div>
</nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
