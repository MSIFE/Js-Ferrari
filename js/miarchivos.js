Nombres = []

function bebeNombre(evt) {
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
    } else if(!existeNombre(nombre)) {
        let opcion = "<li> " + nombre + "</li>";
        let lista = document.getElementById("lista-nombres");
        lista.innerHTML += opcion;
        Nombres.push(nombre);
        alert("Se ha insertado el nombre");
    }else{
        alert("Existe el nombre");
    }
}
function existeNombre(nombre){
  
    const nombreEncontrado = Nombres.find(element => element.trim().toLowerCase() === nombre.trim().toLowerCase());

    if(nombreEncontrado){
        return true;
    }else{
        return false;
    }

}