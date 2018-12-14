let divErroresComentarios = document.getElementById("erroresComentario");

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

function validarVoto(inputVoto,divErrores){
	let esCorrecto = false;
	
	if(inputVoto === null){
		marcarInputComoErroneo(inputVoto,divErrores,'El voto es obligatorio<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputVoto);
	}
	return esCorrecto;
}

function crearOpciones(){
	let inputPeliculaC = document.getElementById("peliculaC");
	// debugger;
	for (let pelicula of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(pelicula.titulo));
		opcion.innerHTML = `${pelicula.titulo}`;
		inputPeliculaC.appendChild(opcion);
		// inputPeliculaP.appendChild(opcion.cloneNode(true));
	}
}

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

function peliculasVotadas(){
	let nombreUsuario = document.getElementById("nombreUsuarioP");
	let nombre = nombreUsuario.value.trim().toUpperCase();
	let votosPeliculas = votosUsuario(nombre);
	let peliculasParaMostrar = [];
	let elementosBuscados = [];

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

function votosUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.votos;
}


//Obtencion de input de tipo text
let botonComentario = document.getElementById("realizarComentario");
let inputsText = document.getElementsByClassName("inputForm");
let botonPeliculasVotadas = document.getElementById("botonPelisVotadas");


botonComentario.addEventListener("click",realizarComentario);
botonPeliculasVotadas.addEventListener("click",peliculasVotadas);
for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario realizar comentario
	crearOpciones();
});