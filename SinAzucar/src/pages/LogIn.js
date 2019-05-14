import React from "react";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          <h1>¡Bienvenido!</h1>
          <br />
        </div>
        <div className="container">
          <div className="col-6 mx-auto">
            <h3 className="text-center">Inicia sesion</h3>
            <form className="was-validated" id="formLogin">
              <div className="form-group">
                <label for="uname">Ingresa tu correo:</label>
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  placeholder="Correo"
                  name="uname"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Por favor, llena este campo.</div>
              </div>
              <div className="form-group">
                <label for="pwd">Ingresa tu contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  id="pwd"
                  placeholder="Contrasena"
                  name="pswd"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Por favor, llena este campo.</div>
              </div>
              <div className="form-group">
                <button type="submit" class="btn btn-primary">
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
