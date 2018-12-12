//FUNCION PARA AÑADIR LA PELICULA NUEVA
function añadirPelicula(){
    let inputTitulo = document.getElementById("titulo");
    let inputNombreD = document.getElementById("nombre");
    let inputApellidoD = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
	let inputNombreP = document.getElementById("nombreP");

	vaciarInputPadre(inputTitulo);

    let esTituloCorrecto = validarTituloPelicula(inputTitulo);
    let esNombreDCorrecto = validarNombreD(inputNombreD);
    let esApellidoCorrecto = validarApellidoD(inputApellidoD);
    let esGeneroCorrecto = validarGenero(inputGenero);
    let esNombrePCorrecto = validarNombreP(inputNombreP);

    if(esTituloCorrecto && esNombreDCorrecto && esApellidoCorrecto && esGeneroCorrecto && esNombrePCorrecto){
        let director = listaDirectores.find( director => director.apellidos === inputApellidoD.value);
        let productora = listaProductoras.find( productora => productora.nombre === inputNombreP.value);
        let peli = peliculas.find( pelicula => pelicula.titulo === inputTitulo.value);
        if(director === undefined){
            director = new Director(inputNombreD.value,inputApellidoD.value);
            listaDirectores.push(director);
        }

        if(productora === undefined){
            productora = new Productora(inputNombreP.value);
            listaProductoras.push(productora);
        }

        if(peli === undefined){
            peli = new Pelicula(inputTitulo.value,director,inputGenero.value,productora);
            peliculas.push(peli);
            incluirPeliculaHTML(peli);
            director.incluirPeliculas(peli);
            productora.incluirPeliculas(peli);
		}
		let inputPelicula = document.getElementById("pelicula");
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", peli.titulo);
		opcion.innerHTML = peli.titulo;
		inputPelicula.appendChild(opcion);
		
    }
    
}

//VALIDACION DEL TITULO
function validarTituloPelicula(inputTitulo){
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(inputTitulo.value);

	if(tituloTratado === null || tituloTratado.length <= 1){
		marcarInputComoErroneo(inputTitulo,'El titulo es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
}

function validarPeliculaSeleccionada(inputPelicula){
	let esCorrecto = false;
	let peliculaTratada = tratarCadenasInput(inputPelicula.value);

	if(peliculaTratada === null || peliculaTratada.length <= 1){
		marcarInputComoErroneo(inputPelicula,'Debe seleccionar una pelicula');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputPelicula);
	}
	return esCorrecto;
}

//VALIDACION DEL NOMBRE DEL DIRECTOR
function validarNombreD(inputNombreD){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(inputNombreD.value);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreD,'El nombre del director es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreD);
	}
	return esCorrecto;
}

//VALIDACION DEL APELLIDO DEL DIRECTOR
function validarApellidoD(inputApellidoD){
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(inputApellidoD.value);

	if(apellidoTratado === null || apellidoTratado.length < 1){
		marcarInputComoErroneo(inputApellidoD,'El apellido del director es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}

//VALIDACION DEL GENERO
function validarGenero(inputGenero){
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(inputGenero.value);

	if(generoTratado === null || generoTratado === ""){
		marcarInputComoErroneo(inputGenero,'El genero es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputGenero);
	}
	return esCorrecto;
}

//VALIDACION DEL NOMBRE DE LA PRODUCTORA
function validarNombreP(inputNombreP){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreP.value);

	if(nombreTratado === null || nombreTratado.length < 2){
		marcarInputComoErroneo(inputNombreP,'El nombre de la productora es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreP);
	}
	return esCorrecto;
}
//METER LOS ERRORES EN UN DIV Y HACER A LA HORA DE VALIDAR UN INNERHTML = ""
function vaciarInputPadre(input){
    let padre = input.parentNode;
    let errores = padre.getElementsByClassName("error");
	for (let i = 0; i < errores.length; i++) {
		const element = array[i];
		
	}
	
	for (let error of errores) {
        padre.removeChild(error);
    }
}

//FUNCION PARA MARCAR INPUTS CORRECTOS
function marcarInputComoCorrecto(input){
	input.className  = 'correcto';
	let padre = input.parentNode;
	debugger;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			padre.removeChild(spanError[i]);
			
		}
	}
}

//FUNCION PARA MARCAR INPUTS INCORRECTOS
function marcarInputComoErroneo(input,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		padre.appendChild(spanNuevo.cloneNode(true));
	}
}

function cambiarDirectorActual(){
	let inputPelicula = document.getElementById("pelicula");
	let inputNuevoNombre = document.getElementById("nombreD");
	let inputNuevoApellido = document.getElementById("apellidoD");

	let esNuevoNombreCorrecto = validarNombreD(inputNuevoNombre);
	let esNuevoApellidoCorrecto = validarApellidoD(inputNuevoApellido);
	let esPeliculaCorrecto = validarPeliculaSeleccionada(inputPelicula);
	// let esTituloCorrecto = validarTituloPelicula(inputPelicula.value);

	if(esNuevoNombreCorrecto && esNuevoApellidoCorrecto && esPeliculaCorrecto){
		let nuevoDirector = new Director(inputNuevoNombre.value,inputNuevoApellido.value);
		listaDirectores.push(nuevoDirector);
		let pelicula = peliculas.find(pelicula => pelicula.titulo === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.Director = nuevoDirector;
		}
		let peliculaSeleccionada = document.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
		let directorActual = peliculaSeleccionada.querySelector("p[data-identificador = director]");
		directorActual.innerHTML = `${nuevoDirector}`;
	}
	
}

function cambiarProductoraActual(){
	let inputNuevoNombre = document.getElementById("nombreProductora");
	let inputPelicula = document.getElementById("peliculaP");

	let esNuevoNombreCorrecto = validarNombreP(inputNuevoNombre);
	let esPeliculaCorrecto = validarPeliculaSeleccionada(inputPelicula);
	// let esTituloCorrecto = validarTituloPelicula(inputPelicula.value);

	if(esNuevoNombreCorrecto && esPeliculaCorrecto){
		let nuevaProductora = new Productora(inputNuevoNombre.value);
		listaProductoras.push(nuevaProductora);
		let pelicula = peliculas.find(pelicula => pelicula.titulo === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.Productora = nuevaProductora;
		}
		let peliculaSeleccionada = document.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
		let productoraActual = peliculaSeleccionada.querySelector("p[data-identificador = productora]");
		productoraActual.innerHTML = `${nuevaProductora}`;
	}
	
}

function crearOpciones(){
	let inputPelicula = document.getElementById("pelicula");
	let inputPeliculaP = document.getElementById("peliculaP");
	// debugger;
	for (let pelicula of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", pelicula.titulo);
		opcion.innerHTML = pelicula.titulo;
		inputPelicula.appendChild(opcion);
		inputPeliculaP.appendChild(opcion.cloneNode(true));
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

//CONSIGUIENDO BOTON DEL FORMULARIO
let botonNuevaPelicula = document.getElementById("añadirPelicula");
let botonCambiarDirector = document.getElementById("cambiarDirector");
let botonCambiarProductora = document.getElementById("cambiarProductora");
//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");

//AÑADIENDO EL EVENTO AL BOTON

botonNuevaPelicula.addEventListener("click",añadirPelicula);
botonCambiarDirector.addEventListener("click",cambiarDirectorActual);
botonCambiarProductora.addEventListener("click",cambiarProductoraActual);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}



document.addEventListener("DOMContentLoaded", function(event) {
	//Creando opciones formulario cambiar director
	crearOpciones();
});

