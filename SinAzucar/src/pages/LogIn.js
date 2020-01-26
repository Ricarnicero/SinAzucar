import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

class LogIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ReactPlayer url='../media/login.mp4' playing loop width="100%" height="100%"/>
        <div className="container text-center">
          <h1>¡Bienvenido!</h1>
          <br />
        </div>
        <div className="container">
          <div className="col-6 mx-auto">
            <h3 className="text-center">Inicia sesion</h3>
            <form className="was-validated" id="formLogin">
              <div className="form-group">
                <label htmlFor="uname">Ingresa tu correo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="uname"
                  placeholder="Correo"
                  name="uname"
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Por favor, llena este campo.</div>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Ingresa tu contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Contrasena"
                  name="pswd"
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Por favor, llena este campo.</div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div className="form-group">
                <Link to="/">Olvidaste tu contraseña?</Link>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogIn;
