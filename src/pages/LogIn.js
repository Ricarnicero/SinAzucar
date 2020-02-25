import React from "react";
import { useAuth,useFirebaseApp } from "reactfire";
import "firebase/performance";
import 'firebase/auth';
export default function LogIn(props) {
  const fbauth = useAuth();
  const firebaseObject = useFirebaseApp();
	const BtnClickLogin = (e) => {
		let mail = document.getElementById('uname').value
		let pass = document.getElementById('pwd').value
		fbauth.signInWithEmailAndPassword(mail, pass)
			.then((res) => {
				console.log('login ok');
			})
			.catch(function(error) {
				console.error(error);
			});
	};

	const BtnFBClickLogin = () =>{
		console.log(firebaseObject.firebase_.auth.FacebookAuthProvider())
		var provider = new firebaseObject.firebase_.auth.FacebookAuthProvider();
		provider.setCustomParameters({
			'display': 'popup'
		  });
		fbauth.signInWithPopup(provider).then(res => {console.log('login ok')})
		.catch(res => {console.error(res)})
	}

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
								/>
								<div className="valid-feedback">Valid.</div>
								<div className="invalid-feedback">
									Por favor, llena este campo.
								</div>
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
								/>
								<div className="valid-feedback">Valid.</div>
								<div className="invalid-feedback">
									Por favor, llena este campo.
								</div>
							</div>
							<div className="form-group">
								<button
									type="button"
									className="btn btn-primary"
									onClick={BtnClickLogin}>
									Iniciar sesión
								</button>
								<br/>
								<button
									type="button"
									className="btn btn-primary"
									onClick={BtnFBClickLogin}>
									Iniciar sesión con fb
								</button>
							</div>
						</form>
					</div>
				</div>
		</React.Fragment>
	);
}
