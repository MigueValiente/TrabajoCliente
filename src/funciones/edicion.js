//FUNCION PARA AÑADIR LA PELICULA NUEVA
function añadirPelicula(){
    let inputTitulo = document.getElementById("titulo");
    let inputNombreD = document.getElementById("nombre");
    let inputApellidoD = document.getElementById("apellido");
    let inputGenero = document.getElementById("genero");
    let inputNombreP = document.getElementById("nombreP");

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
            peli = new Pelicula(inputTitulo.value,inputGenero.value,director,productora);
            peliculas.push(peli);
            incluirPeliculaHTML(peli);
            director.incluirPeliculas(peli);
            productora.incluirPeliculas(peli);
        }
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

//VALIDACION DEL NOMBRE DEL DIRECTOR
function validarNombreD(inputNombreD){
	let esCorrecto = false;
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

function vaciarInputPadre(input){
    let padre = input.parentNode;
    let errores = document.getElementsByClassName("error");
    for (let error of errores) {
        padre.removeChild(error);
    }
}

//FUNCION PARA MARCAR INPUTS CORRECTOS
function marcarInputComoCorrecto(input){
	input.className  = 'correcto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		padre.removeChild(spanError[0]);
	}
}

//FUNCION PARA MARCAR INPUTS INCORRECTOS
function marcarInputComoErroneo(input,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement('span');
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		padre.appendChild(spanNuevo);
	}
}

function cambiarDirector(){
	let inputPelicula = document.getElementById["pelicula"];
	let inputNuevoNombre = document.getElementById["nombreD"];
	let inputNuevoApellido = document.getElementById["apellidoD"];

	let esNuevoNombreCorrecto = validarNombreD(inputNuevoNombre);
	let esNuevoApellidoCorrecto = validarApellidoD(inputNuevoApellido);
	let esTituloCorrecto = validarTituloPelicula(inputPelicula.value);

	if(esNuevoNombreCorrecto && esNuevoApellidoCorrecto && esTituloCorrecto){
		let nuevoDirector = new Director(inputNuevoNombre.value,inputNuevoApellido.value);
		listaDirectores.push(nuevoDirector);
		let pelicula = peliculas.find(pelicula => pelicula.titulo === inputPelicula.value);

		if(pelicula !== undefined){
			pelicula.Director = nuevoDirector;
		}
	}
}

function crearOpciones(){
	let inputPelicula = document.getElementById("pelicula");
	// debugger;
	for (let pelicula of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.value(pelicula.titulo);
		opcion.innerHTML = pelicula.titulo;
		inputPelicula.appendChild(opcion);
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
let boton = document.getElementById("añadirPelicula");

//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");

//AÑADIENDO EL EVENTO AL BOTON

boton.addEventListener("click",añadirPelicula);

for (let i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener("focus",focus);
    inputsText[i].addEventListener("blur",blur);
}

//Creando opciones formulario cambiar director
// crearOpciones();