class Autenticacion {
    closeSesion(redirect) {
        firebase.auth().signOut();
        if (redirect) location.href = 'login.html'
    }

    AuthEmail_Password(email, pass) {
        firebase.auth().signInWithEmailAndPassword(email, pass).then(resultado => {
            if (resultado.user.emailVerified) {
                M.toast({ html: 'Bienvenido ' + resultado.user.displayName, classes: 'rounded' });
            }
            else {
                M.toast({ html: 'Realiza la verificación de tu correo: ' + resultado.user.email, classes: 'rounded' });
                closeSesion(false);
            }
        }).catch(error => {
            console.error(error);
            M.toast({ html: error, classes: 'rounded' });
        })
    }

    crearEmail_Password(email, pass, name) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(resultado => {
                resultado.user.updateProfile({
                    displayName: name
                });

                const configuracion = {
                    url: 'http://localhost:5000/login.html'
                }

                resultado.user.sendEmailVerification(configuracion)
                    .catch(error => {
                        console.error(error);
                    });

                closeSesion(false);
                M.toast({ html: 'Por favor, verifica tu correo para poder continuar.', classes: 'rounded' });

            })
            .catch(error => {
                console.error(error);
            });

    }

    authGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(resultado => {
                //foto de perfil
                //$("#avatar").attr('src',resultado.user.photoURL)
                //nombre
                //$("#navName").text(resultado.user.displayName)
                M.toast({ html: 'Bienvenido ' + resultado.user.displayName, classes: 'rounded' });
            })
            .catch(error => {
                console.error(error);
            });
    }

    authFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(resultado => {
                M.toast({ html: 'Bienvenido ' + resultado.user.displayName, classes: 'rounded' });
            })
            .catch(error => {
                console.error(error);
            });
    }
}