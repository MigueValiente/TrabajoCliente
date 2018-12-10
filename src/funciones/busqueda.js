//Filtrar por titulo y director
function filtrarTituloDirector(){
    let inputTitulo = document.getElementById("titulo");
    let inputDirector = document.getElementById("director");
    let titulo = inputTitulo.value;
    let director = inputDirector.value;
    let peliculasResultantes = realizarBusquedaNombreyDirector(titulo,director);
    mostrarPeliculasHTML(peliculasResultantes);
}

function realizarBusquedaNombreyDirector(titulo,director){
	let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneTitulo(titulo) 
                                                                && pelicula.contieneDirector(director)
	);
	return peliculasResultantes;
}

//Resetear los filtros
function resetearFiltros(){
	mostrarPeliculasHTML(peliculas);
}

//Filtrar por genero
function filtrarGenero(){
    let inputGenero = document.getElementById("genero");
    let genero  = inputGenero.value.trim().toLowerCase();
    let peliculasResultantes = mismoGenero(genero);
    mostrarPeliculasHTML(peliculasResultantes);
}

function mismoGenero(genero){
    let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneGenero(genero));

    return peliculasResultantes;
}

function filtrarUsuario(){
    let inputUsuario = document.getElementById("usuario");
    let nombre = inputUsuario.value.trim().toUpperCase();
    let peliculasFavoritas = peliculasUsuario(nombre);
    mostrarPeliculasHTML(peliculasFavoritas);
}

function peliculasUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    debugger;
    return usuario.peliculasFav;
}


//Obtencion de botones
let botonBuscar = document.getElementById("botonBusqueda");
let botonReset = document.getElementById("botonReset");
let botonGenero = document.getElementById("botonGenero");
let botonUsuario = document.getElementById("botonUsuario");

//Agregar eventos
botonBuscar.addEventListener("click", filtrarTituloDirector);
botonReset.addEventListener("click", resetearFiltros);
botonGenero.addEventListener("click",filtrarGenero);
botonUsuario.addEventListener("click",filtrarUsuario);


