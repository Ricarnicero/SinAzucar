$(() => {
    const objAuth = new Autenticacion();
    $("#registerUsr").click(() => {
        var email = $("#email_reg").val();
        var pass = $("#pass_reg").val();
        var pass_again = $("#pass_again_reg").val();
        var name = $("#name_reg").val();
        if(pass=pass_again)
        objAuth.crearEmail_Password(email, pass, name);
        else
        M.toast({html: 'Contraseñas no coinciden ', classes: 'rounded'});
    });
    $("#initSesion").click(()=>{
        var email = $("#email_login").val();
        var pass = $("#pass_login").val();
        objAuth.AuthEmail_Password(email, pass);
    });
    $("#Google").click(() => {
        objAuth.authGoogle();
    });

    $("#Facebook").click(() => {
        objAuth.authFacebook();
    });
});