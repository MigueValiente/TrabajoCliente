function tratarCadenasInput(cadena){
    let cadenaResultante = null;
    if(typeof(cadena) === "string"){
        let cadenaTratada = cadena.trim().toUpperCase();
        cadenaTratada = cadenaTratada.replace(/\s{2,}/g," ");
        if(cadenaTratada !== ""){
            cadenaResultante = cadenaTratada;
        }
    }
    return cadenaResultante;
}

function mostrarPeliculasHTML(peliculasMostrar){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    divPeliculas.innerHTML = "";
    if(peliculasMostrar.length === 0){
        divPeliculas.innerHTML = "NO HAY PELICULAS QUE MOSTRAR";
    }else{
        peliculasMostrar.forEach( pelicula => pelicula.mostrarEnHTML(divPeliculas));
    }
}

function incluirPeliculaHTML(pelicula){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    pelicula.mostrarEnHTML(divPeliculas);
}

//VALIDACION DEL TITULO
function validarTituloPelicula(inputTitulo,divErrores){
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(inputTitulo.value);

	if(tituloTratado === null || tituloTratado.length <= 1){
		marcarInputComoErroneo(inputTitulo,divErrores,'El titulo es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
}

//VALIDACION PELICULA SELECCIONADA
function validarPeliculaSeleccionada(inputPelicula,divErrores){
	let esCorrecto = false;
	let peliculaTratada = tratarCadenasInput(inputPelicula.value);

	if(peliculaTratada === null || peliculaTratada.length <= 1){
		marcarInputComoErroneo(inputPelicula,divErrores,'Debe seleccionar una pelicula<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputPelicula);
	}
	return esCorrecto;
}

//VALIDACION DEL NOMBRE DEL DIRECTOR
function validarNombreD(inputNombreD,divErrores){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(inputNombreD.value);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del director es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreD);
	}
	return esCorrecto;
}

//VALIDACION DEL APELLIDO DEL DIRECTOR
function validarApellidoD(inputApellidoD,divErrores){
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(inputApellidoD.value);

	if(apellidoTratado === null || apellidoTratado.length < 1){
		marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del director es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}

//VALIDACION DEL GENERO
function validarGenero(inputGenero,divErrores){
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(inputGenero.value);

	if(generoTratado === null || generoTratado === ""){
		marcarInputComoErroneo(inputGenero,divErrores,'El genero es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputGenero);
	}
	return esCorrecto;
}

//VALIDACION DEL NOMBRE DE LA PRODUCTORA
function validarNombreP(inputNombreP,divErrores){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreP.value);

	if(nombreTratado === null || nombreTratado.length < 2){
		marcarInputComoErroneo(inputNombreP,divErrores,'El nombre de la productora es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreP);
	}
	return esCorrecto;
}

function quitarEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nuevaCadena = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nuevaCadena += arrayPalabras[i];
    }
    return nuevaCadena;
}

function marcarInputComoCorrecto(input,divErrores){
	input.className  = 'correcto';
	// let padre = input.parentNode;
	// debugger;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
			
		}
	}
}

//FUNCION PARA MARCAR INPUTS INCORRECTOS
function marcarInputComoErroneo(input,divErrores,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		divErrores.appendChild(spanNuevo.cloneNode(true));
	}
}

//METER LOS ERRORES EN UN DIV Y HACER A LA HORA DE VALIDAR UN INNERHTML = ""
function vaciarDivErrores(divErrores){
    divErrores.innerHTML = "";
}

