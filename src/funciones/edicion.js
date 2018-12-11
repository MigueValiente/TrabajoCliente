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

	if(nombreTratado === null || nombreTratado.length <= 1){
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

//CONSIGUIENDO BOTON DEL FORMULARIO
let boton = document.getElementById("añadirPelicula");

//AÑADIENDO EL EVENTO AL BOTON

boton.addEventListener("click",añadirPelicula);