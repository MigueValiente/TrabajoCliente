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
		let usuario = listaClientes.find(usuario => usuario.nombre === inputNombreUsuario.value);
		let pelicula = peliculas.find(pelicula => pelicula.titulo === inputPeliculaC.value);
		if(usuario !== undefined && pelicula !== undefined){
			let nuevoVoto = new Votos(inputNombreUsuario.value,inputPeliculaC.value,inputVoto.value,inputComentario.value);
			usuario.incluirVoto(nuevoVoto);
			pelicula.incluirVoto(nuevoVoto);
		}
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

function focus(event){
    let input = event.target;
    input.style.backgroundColor = "rgba(15, 191, 219, 0.2)";
}

function blur(event){
    let input = event.target;
    input.style.backgroundColor = "";
}


//Obtencion de input de tipo text
let botonComentario = document.getElementById("realizarComentario");
let inputsText = document.getElementsByClassName("inputForm");


botonComentario.addEventListener("click",realizarComentario);
for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}




document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario realizar comentario
	crearOpciones();
});