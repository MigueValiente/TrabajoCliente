/**
 * Funcion que recibe una cadena, le quita los espacios en blanco por delante y por detras y la pone en mayusculas
 * @param {string} cadena es la cadena a tratar
 */
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

/**
 * Funcion que muestra las peliculas en las paginas
 * @param {array} peliculasMostrar es el array de peliculas que se quieren mostrar
 */
function mostrarPeliculasHTML(peliculasMostrar){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    divPeliculas.innerHTML = "";
    if(peliculasMostrar.length === 0){
        divPeliculas.innerHTML = "NO HAY PELICULAS QUE MOSTRAR";
    }else{
        peliculasMostrar.forEach( pelicula => pelicula.mostrarEnHTML(divPeliculas));
    }
}
/**
 * Funcion que muestra en la pagina la nueva pelicula junto a las ya existentes
 * @param {Pelicula} pelicula es la nueva pelicula a incluir
 */
function incluirPeliculaHTML(pelicula){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    pelicula.mostrarEnHTML(divPeliculas);
}

/**
 * Funcion que recibe dos nodos y valida el titulo de la pelicula
 * @param {nodo} inputTitulo es el nodo del titulo de la pelicula
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
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

/**
 * Funcion que recibe dos nodos y valida la pelicula seleccionada
 * @param {nodo} inputPelicula es el nodo de la pelicula seleccionada
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en de que no se haya seleccionado ninguna pelicula
 */
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

/**
 * Funcion que recibe dos nodos y valida el nombre del director
 * @param {nodo} inputNombreD es el nodo del nombre del director
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
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

/**
 * Funcion que recibe dos nodos y valida el apellido del director
 * @param {nodo} inputApellidoD es el nodo del apellido del director
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
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

/**
 * Funcion que recibe dos nodos y valida el nombre del usuario
 * @param {nodo} inputNombreUsuario es el nodo del nombre del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreUsuario(inputNombreUsuario,divErrores){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(inputNombreUsuario.value);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreUsuario,divErrores,'El nombre del usuario es obligatorio<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreUsuario);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el genero
 * @param {nodo} inputGenero es el nodo del genero
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
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

/**
 * Funcion que recibe dos nodos y valida el nombre de la productora
 * @param {nodo} inputNombreP es el nodo del nombre de la productora
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
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
/**
 * Funcion que elimina los espacios de la cadena
 * @param {string} cadena es la cadena a tratar
 */
function quitarEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nuevaCadena = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nuevaCadena += arrayPalabras[i];
    }
    return nuevaCadena;
}
//FUNCION PARA MARCAR INPUTS CORRECTOS
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

/**
 * Funcion que vacia un nodo
 * @param {nodo} divErrores el nodo a vaciar
 */
function vaciarDivErrores(divErrores){
    divErrores.innerHTML = "";
}
/**
 * Funcion que cambia el color de fondo si el input tiene el foco (solo tipo text y textarea)
 * @param {event} event el evento lanzado
 */
function focus(event){
    let input = event.target;
    input.style.backgroundColor = "rgba(15, 191, 219, 0.2)";
}
/**
 * Funcion que elimina el color de fondo si el input no tiene el foco (solo tipo text y textarea)
 * @param {event} event el evento lanzado
 */
function blur(event){
    let input = event.target;
    input.style.backgroundColor = "";
}

