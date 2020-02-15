import React from "react";

export default function LogIn(props){
    return (
      <React.Fragment>
        <div className="container shadow">
          <div className="col-md-6 mx-auto">
        <div className="d-flex text-center">
          <h1>¡Bienvenido!</h1>
          <br />
        </div>
            <h3 className="text-center">Inicia sesion</h3>
            <form className="was-validated" id="formLogin">
              <div className="form-group">
                <label htmlFor="uname">Ingresa tu correo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="uname"
                  placeholder="Correo"
                  name="email"
                  required
                  onChange={props.inputChange}
                  value={props.email}
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
                  name="pass"
                  required
                  onChange={props.inputChange}
                  value={props.pass}
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Por favor, llena este campo.</div>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={props.buttonClick}>
                  Iniciar sesión
                </button>
              </div>
              <div className="form-group">
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
}