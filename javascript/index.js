function irAElementoPorIdConOffset(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
        var posicion = elemento.offsetTop - 80;
        window.scrollTo({
            top: posicion,
            behavior: "smooth"
        });
    } else {
        console.error("El elemento con el ID '" + id + "' no fue encontrado.");
    }
}
