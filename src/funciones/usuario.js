let divErroresComentarios = document.getElementById("erroresComentario");

function realizarComentario(){

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

function focus(event){
    let input = event.target;
    input.style.backgroundColor = "rgba(15, 191, 219, 0.2)";
}

function blur(event){
    let input = event.target;
    input.style.backgroundColor = "";
}


//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");


for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}


document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario realizar comentario
	crearOpciones();
});