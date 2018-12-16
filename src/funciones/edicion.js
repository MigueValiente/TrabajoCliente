let divErroresPeliculaNueva = document.getElementById("erroresPeliNueva");
let divErroresCambiarDirector = document.getElementById("erroresCambiarDirector");
let divErroresCambiarProductora = document.getElementById("erroresCambiarProductora");

/**
 * Funcion que añade una pelicula
 */
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
		// let inputPelicula = document.getElementById("pelicula");
		// let opcion = document.createElement("option");
		// opcion.className = "opcion";
		// opcion.setAttribute("value", peli.titulo);
		// opcion.innerHTML = peli.titulo;
		// inputPelicula.appendChild(opcion);
		
    }
    
}

/**
 * Funcion que cambia el director de una pelicula
 */
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
		if(!listaDirectores.includes(nuevoDirector)){
			listaDirectores.push(nuevoDirector);
		}
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.director = nuevoDirector;
			nuevoDirector.incluirPeliculas(pelicula);
			let divPeliculas = document.getElementById("peliculasMostrar")
			peliculaSeleccionada = divPeliculas.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
			let directorActual = peliculaSeleccionada.querySelector("p[data-identificador = director]");
			directorActual.innerHTML = `${nuevoDirector}`;
		}

		
	}
	
}
/**
 * Funcion que cambia la productora de una pelicula
 */
function cambiarProductoraActual(){
	let inputNuevoNombre = document.getElementById("nombreProductora");
	let inputPelicula = document.getElementById("peliculaP");

	vaciarDivErrores(divErroresCambiarProductora);

	let esNuevoNombreCorrecto = validarNombreP(inputNuevoNombre,divErroresCambiarProductora);
	let esPeliculaCorrecto = validarPeliculaSeleccionada(inputPelicula,divErroresCambiarProductora);

	if(esNuevoNombreCorrecto && esPeliculaCorrecto){
		let nuevaProductora = new Productora(inputNuevoNombre.value);
		if(!listaProductoras.includes(nuevaProductora)){
			listaProductoras.push(nuevaProductora);
		}
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.productora = nuevaProductora;
			let peliculaSeleccionada = document.querySelector(`div[data-identificador = ${inputPelicula.value}]`);
			let productoraActual = peliculaSeleccionada.querySelector("p[data-identificador = productora]");
			productoraActual.innerHTML = `${nuevaProductora}`;
		}
		
	}
	
}

/**
 * Funcion que crea las opciones de un select segun las peliculas del array de peliculas
 */
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

