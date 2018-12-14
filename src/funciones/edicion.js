let divErroresPeliculaNueva = document.getElementById("erroresPeliNueva");
let divErroresCambiarDirector = document.getElementById("erroresCambiarDirector");
let divErroresCambiarProductora = document.getElementById("erroresCambiarProductora");

//FUNCION PARA AÑADIR LA PELICULA NUEVA
function añadirPelicula(){
    let inputTitulo = document.getElementById("titulo");
    let inputNombreD = document.getElementById("nombre");
    let inputApellidoD = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
	let inputNombreP = document.getElementById("nombreP");

	vaciarDivErrores(divErroresPeliculaNueva);

    let esTituloCorrecto = validarTituloPelicula(inputTitulo,divErroresPeliculaNueva);
    let esNombreDCorrecto = validarNombreD(inputNombreD,divErroresPeliculaNueva);
    let esApellidoCorrecto = validarApellidoD(inputApellidoD,divErroresPeliculaNueva);
    let esGeneroCorrecto = validarGenero(inputGenero,divErroresPeliculaNueva);
    let esNombrePCorrecto = validarNombreP(inputNombreP,divErroresPeliculaNueva);

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

// //VALIDACION DEL TITULO
// function validarTituloPelicula(inputTitulo,divErrores){
// 	let esCorrecto = false;
// 	let tituloTratado = tratarCadenasInput(inputTitulo.value);

// 	if(tituloTratado === null || tituloTratado.length <= 1){
// 		marcarInputComoErroneo(inputTitulo,divErrores,'El titulo es erroneo<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputTitulo);
// 	}
// 	return esCorrecto;
// }

// function validarPeliculaSeleccionada(inputPelicula,divErrores){
// 	let esCorrecto = false;
// 	let peliculaTratada = tratarCadenasInput(inputPelicula.value);

// 	if(peliculaTratada === null || peliculaTratada.length <= 1){
// 		marcarInputComoErroneo(inputPelicula,divErrores,'Debe seleccionar una pelicula<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputPelicula);
// 	}
// 	return esCorrecto;
// }

// //VALIDACION DEL NOMBRE DEL DIRECTOR
// function validarNombreD(inputNombreD,divErrores){
// 	let esCorrecto = false;
// 	// debugger;
// 	let nombreTratado = tratarCadenasInput(inputNombreD.value);
// 	let expresion = /^[A-Z]{2,}$/g
// 	if(!expresion.test(nombreTratado)){
// 		marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del director es erroneo<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputNombreD);
// 	}
// 	return esCorrecto;
// }

// //VALIDACION DEL APELLIDO DEL DIRECTOR
// function validarApellidoD(inputApellidoD,divErrores){
// 	let esCorrecto = false;
// 	let apellidoTratado = tratarCadenasInput(inputApellidoD.value);

// 	if(apellidoTratado === null || apellidoTratado.length < 1){
// 		marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del director es erroneo<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputApellidoD);
// 	}
// 	return esCorrecto;
// }

// //VALIDACION DEL GENERO
// function validarGenero(inputGenero,divErrores){
// 	let esCorrecto = false;
// 	let generoTratado = tratarCadenasInput(inputGenero.value);

// 	if(generoTratado === null || generoTratado === ""){
// 		marcarInputComoErroneo(inputGenero,divErrores,'El genero es erroneo<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputGenero);
// 	}
// 	return esCorrecto;
// }

// //VALIDACION DEL NOMBRE DE LA PRODUCTORA
// function validarNombreP(inputNombreP,divErrores){
// 	let esCorrecto = false;
// 	let nombreTratado = tratarCadenasInput(inputNombreP.value);

// 	if(nombreTratado === null || nombreTratado.length < 2){
// 		marcarInputComoErroneo(inputNombreP,divErrores,'El nombre de la productora es erroneo<br>');
// 	}else{
// 		esCorrecto = true;
// 		marcarInputComoCorrecto(inputNombreP);
// 	}
// 	return esCorrecto;
// }



function cambiarDirectorActual(){
	let peliculaSeleccionada = null;
	let inputPelicula = document.getElementById("peliculaD");
	let inputNuevoNombre = document.getElementById("nombreD");
	let inputNuevoApellido = document.getElementById("apellidoD");

	vaciarDivErrores(divErroresCambiarDirector);

	let esNuevoNombreCorrecto = validarNombreD(inputNuevoNombre,divErroresCambiarDirector);
	let esNuevoApellidoCorrecto = validarApellidoD(inputNuevoApellido,divErroresCambiarDirector);
	let esPeliculaCorrecto = validarPeliculaSeleccionada(inputPelicula,divErroresCambiarDirector);
	if(esNuevoNombreCorrecto && esNuevoApellidoCorrecto && esPeliculaCorrecto){
		let nuevoDirector = new Director(inputNuevoNombre.value,inputNuevoApellido.value);
		listaDirectores.push(nuevoDirector);
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.director = nuevoDirector;
			nuevoDirector.incluirPeliculas(pelicula);
		}

		let divPeliculas = document.getElementById("peliculasMostrar")
		peliculaSeleccionada = divPeliculas.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
		let directorActual = peliculaSeleccionada.querySelector("p[data-identificador = director]");
		directorActual.innerHTML = `${nuevoDirector}`;
	}
	
}

function cambiarProductoraActual(){
	let inputNuevoNombre = document.getElementById("nombreProductora");
	let inputPelicula = document.getElementById("peliculaP");

	vaciarDivErrores(divErroresCambiarProductora);

	let esNuevoNombreCorrecto = validarNombreP(inputNuevoNombre,divErroresCambiarProductora);
	let esPeliculaCorrecto = validarPeliculaSeleccionada(inputPelicula,divErroresCambiarProductora);

	if(esNuevoNombreCorrecto && esPeliculaCorrecto){
		let nuevaProductora = new Productora(inputNuevoNombre.value);
		listaProductoras.push(nuevaProductora);
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.productora = nuevaProductora;
		}
		let peliculaSeleccionada = document.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
		let productoraActual = peliculaSeleccionada.querySelector("p[data-identificador = productora]");
		productoraActual.innerHTML = `${nuevaProductora}`;
	}
	
}

function crearOpciones(){
	let inputPeliculaD = document.getElementById("peliculaD");
	let inputPeliculaP = document.getElementById("peliculaP");
	// debugger;
	for (let pelicula of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(pelicula.titulo));
		opcion.innerHTML = `${pelicula.titulo}`;
		inputPeliculaD.appendChild(opcion);
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

