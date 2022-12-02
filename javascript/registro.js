function abrir(){
    $('#ventana').modal('show');
}

function validar(formulario){
    if (formulario.email.value == 0){
        document.getElementById("errorEmail").innerText ="Campo obligatorio";
        formulario.email.focus();
        return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)){
        document.getElementById("errorEmail").innerText ="Campo inválido";
        formulario.email.focus();
        return false;
    }
    if (formulario.contrasena.value == 0){
        document.getElementById("errorContrasena").innerText = "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }
   
    if (formulario.contrasena.value.length < 8){
        document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 8 caracteres)";
        formulario.contrasena.focus();
        return false;
    }
    if (formulario.confirmacion.value == 0){
        document.getElementById("errorConfirmacion").innerText = "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }
    if (formulario.contrasena.value != formulario.confirmacion.value){
        document.getElementById("errorConfirmacion").innerText = "Contraseñas no coinciden";
        formulario.confirmacion.focus();
        return false;
    }
    if (formulario.genero.value == ""){
        document.getElementById("errorGenero").innerText = "Campo obligatorio";
        return false;
    }
    if (formulario.edad.value == ""){
        document.getElementById("errorEdad").innerText = "Campo obligatorio";
        return false; 
    }
    if (!formulario.terminos.checked){
        document.getElementById("errorTerminos").innerText = "Campo obligatorio";
        return false;
    }
    alert("Datos enviados")
    
    return true;
}