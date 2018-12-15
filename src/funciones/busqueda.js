/**
 * Funcion que filtra las peliculas por el titulo de esta y el apellido de su director
 */
function filtrarTituloDirector(){
    let inputTitulo = document.getElementById("titulo");
    let inputDirector = document.getElementById("director");
    let titulo = inputTitulo.value;
    let director = inputDirector.value;
    let peliculasResultantes = realizarBusquedaNombreyDirector(titulo,director);
    mostrarPeliculasHTML(peliculasResultantes);
}

/**
 * Funcion encargada de devolver el array de peliculas de la funcion filtrarTituloDirector
 * @param {String} titulo es el titulo de la pelicula
 * @param {String} director es el apellido del director
 */
function realizarBusquedaNombreyDirector(titulo,director){
	let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneTitulo(titulo) 
                                                                && pelicula.contieneDirector(director)
	);
	return peliculasResultantes;
}

/**
 * Funcion que resetea las peliculas mostradas tras el uso de alguna otra funcion
 */
function resetearFiltros(){
	mostrarPeliculasHTML(peliculas);
}

/**
 * Funcion que filtra las peliculas segun su genero
 */
function filtrarGenero(){
    let inputGenero = document.getElementById("genero");
    let genero  = inputGenero.value.trim().toLowerCase();
    let peliculasResultantes = mismoGenero(genero);
    mostrarPeliculasHTML(peliculasResultantes);
}

/**
 * Funcion que devuelve un array con las peliculas resultantes que coinciden con el genero
 * @param {string} genero es el genero por el que se quiere filtrar 
 */
function mismoGenero(genero){
    let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneGenero(genero));

    return peliculasResultantes;
}

/**
 * Funcion que muestra las peliculas favoritas de un usuario
 */
function filtrarUsuario(){
    let inputUsuario = document.getElementById("usuario");
    let nombre = inputUsuario.value.trim().toUpperCase();
    let peliculasFavoritas = peliculasUsuario(nombre);
    mostrarPeliculasHTML(peliculasFavoritas);
}

/**
 * Funcion que devuelve las peliculas favoritas de un usuario
 * @param {string} nombre es el nombre del usuario
 */
function peliculasUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.peliculasFav;
}

/**
 * Funcion que filtra segun la productora de la pelicula
 */
function filtrarProductora(){
    let inputProductora = document.getElementById("productora");
    let nombre = inputProductora.value.trim().toUpperCase();
    let peliculasProductora = peliculasP(nombre);
    mostrarPeliculasHTML(peliculasProductora);
}

/**
 * Funcion que devuelve todas las peliculas de una misma productora
 * @param {string} nombre es el nombre de la productora
 */
function peliculasP(nombre){
    let productora = listaProductoras.find( productora => productora.contieneNombre(nombre));
    return productora.peliculas;
}

//Obtencion de botones
let botonBuscar = document.getElementById("botonBusqueda");
let botonReset = document.getElementById("botonReset");
let botonGenero = document.getElementById("botonGenero");
let botonUsuario = document.getElementById("botonUsuario");
let botonProductora = document.getElementById("botonProductora");

//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");

//Agregar eventos
botonBuscar.addEventListener("click", filtrarTituloDirector);
botonReset.addEventListener("click", resetearFiltros);
botonGenero.addEventListener("click",filtrarGenero);
botonUsuario.addEventListener("click",filtrarUsuario);
botonProductora.addEventListener("click",filtrarProductora);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}


