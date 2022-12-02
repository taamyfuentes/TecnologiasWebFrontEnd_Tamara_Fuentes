$(document).ready(function () {
    texto = document.getElementById("buscar")
    contenedor = document.getElementById("canciones")
    cargarDatos()
    texto.onkeydown = cargarDatos
})


function abrir() {
    $('#ventana').modal('show');
}

var canciones = [];

function cargarDatos() {
    $.ajax({
        url: "datos.json"
    }).done(function (resultado) {
        canciones = resultado.canciones;
        contenedor.innerHTML = ""
        if (texto.value == "") {
            for (var i = 0; i < canciones.length; i++) {
                contenedor.innerHTML += `
                <div class="row">
                    <div class="col-10 m-2">
                        <img class="iconoCancion" src="./imagenes/${canciones[i].icono}.svg">
                        <p id="tituloCancion" class="card-text">${canciones[i].nombre}</p>
                        <audio src="./canciones/${canciones[i].ruta}" controls></audio> 
                    </div>
                </div>
                `
            }
        }
        else {
            for (var i = 0; i < canciones.length; i++) {
                if (canciones[i].nombre.indexOf(texto.value) != -1) {
                    contenedor.innerHTML += `
                    <div class="row">
                        <div class="col-12">
                            <img class="iconoCancion" src="./imagenes/${canciones[i].icono}.svg">
                            <p id="tituloCancion" class="card-text">${canciones[i].nombre}</p>
                            <audio src="./canciones/${canciones[i].ruta}" controls></audio>   
                        </div>
                    </div>
                `
                }
            }

        }

    })


}
