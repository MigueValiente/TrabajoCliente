let erroresPelisMasVotadas = document.getElementById("erroresPelisMasVotadas");
let erroresPeliMasVotada = document.getElementById("erroresPeliMasVotada");
let erroresOrdenarPor = document.getElementById("erroresOrdenarPor");
/**
 * Funcion que filtra las peliculas por la longitud del titulo y las muestra en el orden de likes
 */
function pelisMasVotadas(){
    let inputLongitud = document.getElementById("longitudTitulo");
    let longitud = inputLongitud.value;
    let pelisResultado = [];

    let esLongitudCorrecta = validarLogitud(inputLongitud,erroresPelisMasVotadas);

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
    }
}

function peliMejorValorada(){
    let inputGenero = document.getElementById("genero");
    let genero = inputGenero.value;
    let pelisGenero = [];
    let peliculaResultado = [];

    let esGeneroCorrecto = validarGenero(inputGenero,erroresPeliMasVotada);

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

    mostrarPeliculasHTML(peliculaResultado);
}

function ordenarPor(){
    let inputOrden = document.getElementById("orden");
    let orden = inputOrden.value;
    let peliculasOrdenadas = [];

    let esOrdenCorrecto = validarOpcionSeleccionada(inputOrden,erroresOrdenarPor);

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
        }else{
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                return peli2.dislikes - peli1.dislikes;
            });
        }
        
    }

    mostrarPeliculasHTML(peliculasOrdenadas);
}



//OBTENIENDO BOTONES
let botonPelisMasVotadas = document.getElementById("botonPelisMasVotadas");
let inputLongitud = document.getElementById("longitudTitulo");
let botonPeliculaMasVotada = document.getElementById("botonPeliMasVotada");
let botonOrdenarPor = document.getElementById("botonOrdenarPor");



//EVENTOS
botonPelisMasVotadas.addEventListener("click",pelisMasVotadas);
inputLongitud.addEventListener("focus",focus);
inputLongitud.addEventListener("blur",blur);

botonPeliculaMasVotada.addEventListener("click", peliMejorValorada);
botonOrdenarPor.addEventListener("click",ordenarPor);



document.addEventListener("DOMContentLoaded", function(event) {
});