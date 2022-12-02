$(document).ready(function () {
    contenedor = document.getElementById("top3")
    cargarDatos()
})
function abrir(){
    $('#ventana').modal('show');
}
var reproducciones = [];
var tr = document.createElement(tr)

function cargarDatos() {
    $.ajax({
        url: "datos.json"
    }).done(function (resultado) {
        canciones = resultado.canciones;
        ordenados = canciones.sort(function(a,b){
            return b.reproducciones - a.reproducciones
        })
        var html = ""
        for (var i = 0; i < 3; i++){
            html+=`
            <div class="row">
                <div class="col-12">
                    <p id="tituloCancion">${ordenados[i].nombre}</p>
                    <audio src="./canciones/${ordenados[i].ruta}" controls> </audio> 
                </div>
            </div>
            `
            document.getElementById("top3").innerHTML = html
                    
            
            
        }
        
       
})
}
