//BUSQUEDA
function realizarBusquedaNombreyDirectorP(titulo,director){
	let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneTitulo(titulo) 
                                                                && pelicula.contieneDirector(director)
    );
	return peliculasResultantes;
}

function mismoGeneroP(genero){
    let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneGenero(genero));

    return peliculasResultantes;
}

function peliculasUsuarioP(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    let arrayVacio = [];
    if(usuario !== undefined){
        return usuario.peliculasFav;
    }else{
        return arrayVacio;
    }
    
}

function peliculasPP(nombre){
    let productora = listaProductoras.find( productora => productora.contieneNombre(nombre));
    return productora.peliculas;
}

//EDICION
function añadirPeliculaP(titulo,nombreD,apellidoD,genero,nombreP){
    let inputTitulo = titulo;
    let inputNombreD = nombreD;
    let inputApellidoD = apellidoD;
    let inputGenero = genero;
	let inputNombreP = nombreP;
    let resultado = false;
	// vaciarDivErrores(divErroresPeliculaNueva);

    let esTituloCorrecto = validarTituloPeliculaP(inputTitulo);
    let esNombreDCorrecto = validarNombreDP(inputNombreD);
    let esApellidoCorrecto = validarApellidoDP(inputApellidoD);
    let esGeneroCorrecto = validarGeneroP(inputGenero);
    let esNombrePCorrecto = validarNombrePP(inputNombreP);
    

    if(esTituloCorrecto && esNombreDCorrecto && esApellidoCorrecto && esGeneroCorrecto && esNombrePCorrecto){
        let director = listaDirectores.find( director => director.apellidos === inputApellidoD);
        let productora = listaProductoras.find( productora => productora.nombre === inputNombreP);
        let peli = peliculas.find( pelicula => pelicula.titulo === inputTitulo);
        if(director === undefined){
            director = new Director(inputNombreD,inputApellidoD);
            listaDirectores.push(director);
        }

        if(productora === undefined){
            productora = new Productora(inputNombreP);
            listaProductoras.push(productora);
        }

        if(peli === undefined){
            peli = new Pelicula(inputTitulo,director,inputGenero,productora);
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
        resultado = true;
    }
    return resultado;
}

function cambiarDirectorActualP(pelicula,nombreD,apellidoD){
	let peliculaSeleccionada = undefined;
	let inputPelicula = pelicula;
	let inputNuevoNombre = nombreD;
    let inputNuevoApellido = apellidoD;
    let resultado = false;

	// vaciarDivErrores(divErroresCambiarDirector);

	let esNuevoNombreCorrecto = validarNombreDP(inputNuevoNombre);
	let esNuevoApellidoCorrecto = validarApellidoDP(inputNuevoApellido);
	let esPeliculaCorrecto = validarPeliculaSeleccionadaP(inputPelicula);
	if(esNuevoNombreCorrecto && esNuevoApellidoCorrecto && esPeliculaCorrecto){
        let nuevoDirector = new Director(inputNuevoNombre,inputNuevoApellido);
        if(!listaDirectores.includes(nuevoDirector)){
        listaDirectores.push(nuevoDirector);
        }
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula);

		if(pelicula !== undefined){
			pelicula.director = nuevoDirector;
            nuevoDirector.incluirPeliculas(pelicula);
            let divPeliculas = document.getElementById("peliculasMostrar")
            peliculaSeleccionada = divPeliculas.querySelector(`div[data-identificador = ${inputPelicula}]`);
            let directorActual = peliculaSeleccionada.querySelector("p[data-identificador = director]");
            directorActual.innerHTML = `${nuevoDirector}`;
            resultado = true;
		}
	}
	return resultado;
}
/**
 * Funcion que cambia la productora de una pelicula
 */
function cambiarProductoraActualP(nombreP,pelicula){
	let inputNuevoNombre = nombreP;
    let inputPelicula = pelicula;
    let resultado = false

	// vaciarDivErrores(divErroresCambiarProductora);

	let esNuevoNombreCorrecto = validarNombrePP(inputNuevoNombre);
	let esPeliculaCorrecto = validarPeliculaSeleccionadaP(inputPelicula);

	if(esNuevoNombreCorrecto && esPeliculaCorrecto){
        let nuevaProductora = new Productora(inputNuevoNombre);
        if(!listaProductoras.includes(nuevaProductora)){
           listaProductoras.push(nuevaProductora); 
        }
		
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPelicula);

		if(pelicula !== undefined){
            pelicula.productora = nuevaProductora;
            let peliculaSeleccionada = document.querySelector(`div[data-identificador = ${inputPelicula}]`);
            let productoraActual = peliculaSeleccionada.querySelector("p[data-identificador = productora]");
            productoraActual.innerHTML = `${nuevaProductora}`;
            resultado = true;
		}
		
	}
	return resultado;
}

//GESTION
function pelisMasVotadasP(l){
    let longitud = l;
    let pelisResultado = [];
    

    let esLongitudCorrecta = validarLogitudP(longitud);

    if(esLongitudCorrecta){
        peliculas.forEach(pelicula => {
            if(pelicula.titulo.length >= longitud){
                if(!pelisResultado.includes(pelicula)){
                    pelisResultado.push(pelicula);
                }
            }
        });
        pelisResultado = pelisResultado.sort(function(peli1,peli2){
            return peli2.likes - peli1.likes;
        });
        mostrarPeliculasHTML(pelisResultado);
        
    }else{
        pelisResultado = undefined;
    }
    return pelisResultado;
}

function peliMejorValoradaP(g){
    let genero = g;
    let pelisGenero = [];
    let peliculaResultado = [];
    
    let esGeneroCorrecto = validarGeneroP(genero);

    if(esGeneroCorrecto){
        for (let i = 0; i < peliculas.length; i++) {
            if(peliculas[i].genero.toUpperCase() === genero.toUpperCase()){
                if(!pelisGenero.includes(peliculas[i])){
                    pelisGenero.push(peliculas[i]);
                }
            }
            
        }
        
        pelisGenero = pelisGenero.sort(function(peli1,peli2){
            return peli2.likes - peli1.likes;
        });

        peliculaResultado.push(pelisGenero[0]) ;
    }

    if(peliculaResultado[0] !== undefined){
        mostrarPeliculasHTML(peliculaResultado);
        return peliculaResultado[0];
    }
    
}

function ordenarPorP(o){
    let orden = o;
    let peliculasOrdenadas = [];

    let esOrdenCorrecto = validarOpcionSeleccionadaP(orden);

    if(esOrdenCorrecto){
        peliculasOrdenadas = peliculas;
        if(orden === "titulo"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.titulo.toLowerCase() > peli2.titulo.toLowerCase()){
                    return 1;
                }else if(peli1.titulo.toLowerCase() < peli2.titulo.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "genero"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.genero.toLowerCase() > peli2.genero.toLowerCase()){
                    return 1;
                }else if(peli1.genero.toLowerCase() < peli2.genero.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "director"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.director.nombre.toLowerCase() > peli2.director.nombre.toLowerCase()){
                    return 1;
                }else if(peli1.director.nombre.toLowerCase() < peli2.director.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "productora"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.productora.nombre.toLowerCase() > peli2.productora.nombre.toLowerCase()){
                    return 1;
                }else if(peli1.productora.nombre.toLowerCase() < peli2.productora.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "likes"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                return peli2.likes - peli1.likes;
            });
        }else if(orden === "dislikes"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                return peli2.dislikes - peli1.dislikes;
            });
        }else{
            peliculasOrdenadas = undefined
            return peliculasOrdenadas;
        }
        mostrarPeliculasHTML(peliculasOrdenadas);
    }

    
    return peliculasOrdenadas;
}

//USUARIO
function realizarComentarioP(usuario,pelicula,voto,comentario){
	let inputNombreUsuario = usuario;
	let inputPeliculaC = pelicula;
	let inputVoto = voto;
    let inputComentario = comentario;
    let resultado = false;

	// vaciarDivErrores(divErroresComentarios);

	let esUsuarioCorrecto = validarNombreUsuarioP(inputNombreUsuario);
	let esPeliculaCorrecta = validarPeliculaSeleccionadaP(inputPeliculaC);
	let esVotoCorrecto = validarVoto(inputVoto);
	// marcarInputComoCorrecto(inputComentario);

	if(esUsuarioCorrecto && esPeliculaCorrecta && esVotoCorrecto){
		let usuario = listaClientes.find(cliente => cliente.contieneNombre(inputNombreUsuario));
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputPeliculaC);
		if(usuario !== undefined && pelicula !== undefined){
			let nuevoVoto = new Votos(inputNombreUsuario,inputPeliculaC,inputVoto,inputComentario);
			usuario.incluirVoto(nuevoVoto);
            pelicula.incluirVoto(nuevoVoto);
            mostrarPeliculasHTML(peliculas);
		    resultado = true;
		}
		
    }
    return resultado;
}

function validarVoto(inputVoto){
	let esCorrecto = false;
	
	if(inputVoto === null || inputVoto === ""){
		// marcarInputComoErroneo(inputVoto,divErrores,'El voto es obligatorio<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputVoto);
	}
	return esCorrecto;
}


function peliculasVotadasP(usuario){
	let nombre = usuario;
	let votosPeliculas = [];
	let peliculasParaMostrar = [];
    let elementosBuscados = [];
    let resultado = false;

	// vaciarDivErrores(divErroresPelisVotadas);

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);
	if(nombreUsuario !== ""){
		nombre = nombreUsuario.trim().toUpperCase();
		votosPeliculas = votosUsuario(nombre);
	}

	if(esUsuarioCorrecto){
		votosPeliculas.forEach(votoPelicula => {
			if(!elementosBuscados.includes(votoPelicula.pelicula)){
				elementosBuscados.push(votoPelicula.pelicula);
				let peliculaAgregar = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === votoPelicula.pelicula );
				if(peliculaAgregar !== null){
					peliculasParaMostrar.push(peliculaAgregar);
				}
			}
		} );
        mostrarPeliculasHTML(peliculasParaMostrar);
        resultado = true;
	}
	return resultado;
}
/**
 * Funcion que obtiene los votos de un usuario
 * @param {string} nombre es el nombre del usuario
 */
function votosUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.votos;
}
/**
 * Funcion que muestra peliculas parecidas a las favoritas del usuario segun el genero de estas
 */
function peliculasParecidasP(usuario){
	let nombre = usuario;
	let pelisFavoritas = [];
	let pelisParecidas = [];
	let listaGeneros = [];

	// vaciarDivErrores(divErroresPelisParecidas);

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);

	if(nombre !== ""){
		pelisFavoritas = pelisFavoritasUsuario(nombre);
	}

	for (let i = 0; i < pelisFavoritas.length; i++) {
		let genero = pelisFavoritas[i].genero;
		if(!listaGeneros.includes(genero)){
			listaGeneros.push(genero);
		}
		
	}

	if(esUsuarioCorrecto){
		listaGeneros.forEach(genero => {
			for (let i = 0; i < peliculas.length; i++) {
				if(peliculas[i].genero === genero){
					let peliculaAgregar = peliculas[i];
					if(!pelisFavoritas.includes(peliculaAgregar) && !pelisParecidas.includes(peliculaAgregar)){
						pelisParecidas.push(peliculaAgregar);
					}
				}
			}
		});
        mostrarPeliculasHTML(pelisParecidas);
        return pelisParecidas;
    }
    pelisParecidas = undefined;
    return pelisParecidas;
}


function pelisFavoritasUsuario(nombre){
	let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.peliculasFav;
}

function eliminarPeliFavoritaP(usuario,peli){
	let nombre = usuario;
	let pelisFavoritas = pelisFavoritasUsuario(nombre);
    let peliSeleccionada = peli;
    let resultado = false;

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);
	let esPeliCorrecta = validarPeliculaSeleccionadaP(peliSeleccionada);

	if(esPeliCorrecta && esUsuarioCorrecto){
		let usuario = listaClientes.find(cliente => cliente.nombre === nombre);
		let peliEliminada = usuario.peliculasFav.find(peliculaFav=> quitarEspacios(peliculaFav.titulo) === peliSeleccionada);
		eliminarElementoArray(usuario.peliculasFav, peliEliminada);
		// crearOpcionesPersonalizadasP(nombre,inputPeliculaEF);
        mostrarPeliculasHTML(usuario.peliculasFav);
        resultado = true;
    }
    return resultado;
}

function eliminarElementoArray(array, item){
	var i = array.indexOf( item );
 
    if ( i !== -1 ) {
        array.splice( i, 1 );
    }
}
