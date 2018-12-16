let divErroresComentarios = document.getElementById("erroresComentario");
let divErroresPelisVotadas = document.getElementById("erroresPelisVotadas");
let divErroresPelisParecidas = document.getElementById("erroresPelisParecidas");
let divErroresEliminarPeliFavorita = document.getElementById("erroresEliminarPeliFavorita");
let inputPeliculaC = document.getElementById("peliculaC");
let inputPeliculaEF = document.getElementById("peliculaEF");
/**
 * Funcion que permite a un usuario realizar un comentario
 */
function realizarComentario(){
	let inputNombreUsuario = document.getElementById("nombreUsuario");
	let inputPeliculaC = document.getElementById("peliculaC");
	let inputVoto = obtenerRadio();
	let inputComentario = document.getElementById("inputComentario");

	vaciarDivErrores(divErroresComentarios);

	let esUsuarioCorrecto = validarNombreUsuario(inputNombreUsuario,divErroresComentarios);
	let esPeliculaCorrecta = validarPeliculaSeleccionada(inputPeliculaC,divErroresComentarios);
	let esVotoCorrecto = validarVoto(inputVoto,divErroresComentarios);
	marcarInputComoCorrecto(inputComentario);

	if(esUsuarioCorrecto && esPeliculaCorrecta && esVotoCorrecto){
		let usuario = listaClientes.find(cliente => cliente.contieneNombre(inputNombreUsuario.value));
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPeliculaC.value);
		if(usuario !== undefined && pelicula !== undefined){
			let nuevoVoto = new Votos(inputNombreUsuario.value,inputPeliculaC.value,inputVoto,inputComentario.value);
			usuario.incluirVoto(nuevoVoto);
			pelicula.incluirVoto(nuevoVoto);
		}
		mostrarPeliculasHTML(peliculas);
		console.log("Comentario realizado con exito");
	}
}
/**
 * Funcion que valida si se ha seleccionado like o dislike
 * @param {nodo} inputVoto es el radio que se ha seleccionado
 * @param {nodo} divErrores es el nodo donde apareceran los errores
 */
function validarVoto(inputVoto,divErrores){
	let esCorrecto = false;
	
	if(inputVoto === null || inputVoto === ""){
		marcarInputComoErroneo(inputVoto,divErrores,'El voto es obligatorio<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputVoto);
	}
	return esCorrecto;
}

/**
 * Funcion que obtiene si se ha seleccionado alguno de los radio button a la hora de votar
 */
function obtenerRadio(){
	let botonesRadio = document.getElementsByName("voto");
	let botonSeleccionado = null;

	for (let i = 0; i < botonesRadio.length; i++) {
		if(botonesRadio[i].checked){
			botonSeleccionado = botonesRadio[i].value;
		}
	}
	return botonSeleccionado;
}

function crearOpciones(input){
	// let inputPeliculaC = document.getElementById("peliculaC");
	// debugger;
	for (let pelicula of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(pelicula.titulo));
		opcion.innerHTML = `${pelicula.titulo}`;
		input.appendChild(opcion);
		// inputPeliculaP.appendChild(opcion.cloneNode(true));
	}
}
/**
 * Funcion que en funcion de las peliculas favoritas de un usuario cambia el select de las peliculas
 * @param {string} nombre es el nombre de usuario
 * @param {nodo} input es el nodo donde apareceran las opciones
 */
function crearOpcionesPersonalizadas(nombre,input){
	let usuario = listaClientes.find(cliente => cliente.nombre === nombre);
	let pelisFavoritas = usuario.peliculasFav;
	input.innerHTML = "";
	let opcionDefault = document.createElement("option");
		opcionDefault.className = "opcion";
		opcionDefault.setAttribute("value", "");
		opcionDefault.innerHTML = `-Seleccionar-`;
	input.appendChild(opcionDefault);
	for (const peliFavorita of pelisFavoritas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(peliFavorita.titulo));
		opcion.innerHTML = `${peliFavorita.titulo}`;
		input.appendChild(opcion);
	}
}

/**
 * Funcion que muestra en la pagina las peliculas votadas por un usuario
 */
function peliculasVotadas(){
	let nombreUsuario = document.getElementById("nombreUsuarioP");
	let nombre = "";
	let votosPeliculas = [];
	let peliculasParaMostrar = [];
	let elementosBuscados = [];

	vaciarDivErrores(divErroresPelisVotadas);

	let esUsuarioCorrecto = validarNombreUsuario(nombreUsuario,divErroresPelisVotadas);
	if(nombreUsuario.value !== ""){
		nombre = nombreUsuario.value.trim().toUpperCase();
		votosPeliculas = votosUsuario(nombre);
	}

	if(esUsuarioCorrecto){
		votosPeliculas.forEach(votoPelicula => {
			if(!elementosBuscados.includes(votoPelicula.pelicula)){
				elementosBuscados.push(votoPelicula.pelicula);
				let peliculaAgregar = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === votoPelicula.pelicula );
				if(peliculaAgregar !== null){
					peliculasParaMostrar.push(peliculaAgregar);
				}
			}
		} );
		mostrarPeliculasHTML(peliculasParaMostrar);
	}
	
}
/**
 * Funcion que obtiene los votos de un usuario
 * @param {string} nombre es el nombre del usuario
 */
function votosUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.votos;
}
/**
 * Funcion que muestra peliculas parecidas a las favoritas del usuario segun el genero de estas
 */
function peliculasParecidas(){
	let nombreUsuario = document.getElementById("usuarioPelisParecidas");
	let nombre = "";

	let pelisFavoritas = [];
	let pelisParecidas = [];
	let listaGeneros = [];

	vaciarDivErrores(divErroresPelisParecidas);

	let esUsuarioCorrecto = validarNombreUsuario(nombreUsuario,divErroresPelisParecidas);

	if(nombreUsuario.value !== ""){
		nombre = nombreUsuario.value;
		pelisFavoritas = pelisFavoritasUsuario(nombre);
	}

	for (let i = 0; i < pelisFavoritas.length; i++) {
		let genero = pelisFavoritas[i].genero;
		if(!listaGeneros.includes(genero)){
			listaGeneros.push(genero);
		}
		
	}

	if(esUsuarioCorrecto){
		listaGeneros.forEach(genero => {
			for (let i = 0; i < peliculas.length; i++) {
				if(peliculas[i].genero === genero){
					let peliculaAgregar = peliculas[i];
					if(!pelisFavoritas.includes(peliculaAgregar) && !pelisParecidas.includes(peliculaAgregar)){
						pelisParecidas.push(peliculaAgregar);
					}
				}
			}
		});
		mostrarPeliculasHTML(pelisParecidas);
	}
}

/**
 * Funcion que obtiene las peliculas favoritas de un usuario
 * @param {strin} nombre es el nombre del usuario
 */
function pelisFavoritasUsuario(nombre){
	let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.peliculasFav;
}
/**
 * Funcion que elimina una pelicila favorita de un usuario
 */
function eliminarPeliFavorita(){
	let usuario = document.getElementById("usuarioEliminarPeliFavorita");
	let nombre = usuario.value;
	let pelisFavoritas = pelisFavoritasUsuario(usuario.value);
	let peliSeleccionada = document.getElementById("peliculaEF");

	let esUsuarioCorrecto = validarNombreUsuario(usuario,divErroresEliminarPeliFavorita);
	let esPeliCorrecta = validarPeliculaSeleccionada(peliSeleccionada,divErroresEliminarPeliFavorita);

	if(esPeliCorrecta && esUsuarioCorrecto){
		let usuario = listaClientes.find(cliente => cliente.nombre === nombre);
		let peliEliminada = usuario.peliculasFav.find(peliculaFav=> quitarEspacios(peliculaFav.titulo) === peliSeleccionada.value);
		eliminarElementoArray(usuario.peliculasFav, peliEliminada);
		crearOpcionesPersonalizadas(nombre,inputPeliculaEF);
		mostrarPeliculasHTML(usuario.peliculasFav);
	}
}
/**
 * Funcion que elimina un item de un array
 * @param {array} array es el array en el que eliminar el item
 * @param {*} item es el item a eliminar
 */
function eliminarElementoArray(array, item){
	var i = array.indexOf( item );
 
    if ( i !== -1 ) {
        array.splice( i, 1 );
    }
}


//Obtencion de input de tipo text
let botonComentario = document.getElementById("realizarComentario");
let inputsText = document.getElementsByClassName("inputForm");
let botonPeliculasVotadas = document.getElementById("botonPelisVotadas");
let botonPelisParecidas = document.getElementById("botonPelisParecidas");
let botonEliminarPeliFavorita = document.getElementById("botonEliminarPeliFavorita");
let botonCargarPelis = document.getElementById("botonListaFavoritas");

//Eventos
botonComentario.addEventListener("click",realizarComentario);
botonPeliculasVotadas.addEventListener("click",peliculasVotadas);
botonPelisParecidas.addEventListener("click",peliculasParecidas);
botonEliminarPeliFavorita.addEventListener("click",eliminarPeliFavorita);
botonCargarPelis.addEventListener("click",function() {
	let inputNombre = document.getElementById("usuarioEliminarPeliFavorita");
	let usuario = listaClientes.find(cliente => cliente.nombre === inputNombre.value);
	crearOpcionesPersonalizadas(usuario.nombre,inputPeliculaEF);
	mostrarPeliculasHTML(usuario.peliculasFav);
});
for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario realizar comentario
	crearOpciones(inputPeliculaC);
});