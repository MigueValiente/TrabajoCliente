function filtrarTituloDirector(){
    let inputTitulo = document.getElementById("titulo");
    let inputDirector = document.getElementById("director");
    let titulo = inputTitulo.value;
    let director = inputDirector.value;
    let peliculasResultantes = realizarBusquedaNombreyDirector(titulo,director);
    mostrarPeliculasHTML(peliculasResultantes);
}

function realizarBusquedaNombreyDirector(titulo,director){
	let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneNombre(titulo) 
                                                                && pelicula.contieneDirector(director)
	);
	return peliculasResultantes;
}

function resetearFiltros(){
	mostrarPeliculasHTML(peliculas);
}

let contador = 0;
function peliculaParecida(genero){
    
    let peliculasResultantes = peliculas.filter( pelicula => pelicula.contieneGenero(genero));
    let peliculaResultante = peliculasResultantes[contador];
    contador++;

    return peliculaResultante;
}

