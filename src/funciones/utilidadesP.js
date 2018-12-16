/**
 * Funcion que recibe una cadena, le quita los espacios en blanco por delante y por detras y la pone en mayusculas
 * @param {string} cadena es la cadena a tratar
 */
function tratarCadenasInput(cadena){
    let cadenaResultante = undefined;
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
function validarTituloPeliculaP(cadena){
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(cadena);

	if(tituloTratado === undefined || tituloTratado.length <= 1){
		// marcarInputComoErroneo(inputTitulo,divErrores,'El titulo es erroneo<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida la pelicula seleccionada
 * @param {nodo} inputPelicula es el nodo de la pelicula seleccionada
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en de que no se haya seleccionado ninguna pelicula
 */
function validarPeliculaSeleccionadaP(cadena){
	let esCorrecto = false;
	let peliculaTratada = tratarCadenasInput(cadena);

	if(peliculaTratada === undefined || peliculaTratada.length <= 1){
		// marcarInputComoErroneo(inputPelicula,divErrores,'Debe seleccionar una pelicula<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputPelicula);
	}
	return esCorrecto;
}

function validarOpcionSeleccionadaP(cadena){
	let esCorrecto = false;
	let opcionTratada = tratarCadenasInput(cadena);

	if(opcionTratada === undefined || opcionTratada.length <= 1){
		// marcarInputComoErroneo(inputOpcion,divErrores,'Debe seleccionar una opcion<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputOpcion);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el nombre del director
 * @param {nodo} inputNombreD es el nodo del nombre del director
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreDP(cadena){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		// marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del director es erroneo<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputNombreD);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el apellido del director
 * @param {nodo} inputApellidoD es el nodo del apellido del director
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarApellidoDP(cadena){
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(cadena);

	if(apellidoTratado === undefined || apellidoTratado.length < 1){
		// marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del director es erroneo<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el nombre del usuario
 * @param {nodo} inputNombreUsuario es el nodo del nombre del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreUsuarioP(cadena){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		// marcarInputComoErroneo(inputNombreUsuario,divErrores,'El nombre del usuario es obligatorio<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputNombreUsuario);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el genero
 * @param {nodo} inputGenero es el nodo del genero
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarGeneroP(cadena){
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(cadena);

	if(generoTratado === undefined || generoTratado === ""){
		// marcarInputComoErroneo(inputGenero,divErrores,'El genero es erroneo<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputGenero);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el nombre de la productora
 * @param {nodo} inputNombreP es el nodo del nombre de la productora
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombrePP(cadena){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(cadena);

	if(nombreTratado === undefined || nombreTratado.length < 2){
		// marcarInputComoErroneo(inputNombreP,divErrores,'El nombre de la productora es erroneo<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputNombreP);
	}
	return esCorrecto;
}

function validarLogitudP(longitud){
	let esCorrecto = false;
	let longitudTratada = longitud;

	if(longitudTratada === undefined || longitudTratada <= 0){
		// marcarInputComoErroneo(inputLongitud,divErrores,'La longitud no puede ser menor que 0<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputLongitud);
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

function crearOpcionesPersonalizadasP(nombre,input){
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
