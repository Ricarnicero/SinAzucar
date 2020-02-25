firebase.auth().onAuthStateChanged(user =>{
    if(user){
        $("#initSesion").text("Cerrar Sesion")
    }
    else{
        $("#initSesion").text("Iniciar Sesion")
    }
})