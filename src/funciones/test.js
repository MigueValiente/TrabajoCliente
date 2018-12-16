//PRUEBAS PAGINA BUSQUEDA

function realizarPruebaBusquedaTituloyDirector(){
    console.log('Pruebas de Busqueda por Nombre y Director');
	let prueba1 = realizarBusquedaNombreyDirectorP('Iron', 'Favreau'); 
	console.log('Prueba1: realizarBusquedaNombreyDirectorP(\'Iron\', \'Favreau\')');
	if(prueba1.length === 1){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = realizarBusquedaNombreyDirectorP('anillos', 'jackson'); 
	console.log('Prueba2: realizarBusquedaNombreyDirectorP(\'anillos\', \'jackson\')');
	if(prueba2.length === 3){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = realizarBusquedaNombreyDirectorP('Jurasic Park',''); 
	console.log('Prueba3: realizarBusquedaNombreyDirectorP("Jurassic Park","") ');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = realizarBusquedaNombreyDirectorP('','George Lucas'); 
	console.log('Prueba4: realizarBusquedaNombreyDirectorP("","Whedon")');
	prueba4.length === 0?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasFiltrarGenero(){
    console.log('Pruebas de Filtrar por Genero');
	let prueba1 = mismoGeneroP('superheroes'); 
	console.log('Prueba1: mismoGeneroP(\'superheroes\')');
	if(prueba1.length === 4){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = mismoGeneroP('musical'); 
	console.log('Prueba2: mismoGeneroP(\'musical\')');
	if(prueba2.length === 1){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = mismoGeneroP('suspense'); 
	console.log('Prueba3: mismoGeneroP("suspense") ');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = mismoGeneroP('terror'); 
	console.log('Prueba4: mismoGeneroP("terror")');
	prueba4.length === 3?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasFiltrarFavoritasUsuario(){
    console.log('Pruebas de Filtrar por Favoritas de un Usuario');
	let prueba1 = peliculasUsuarioP('Pepe'); 
	console.log('Prueba1: peliculasUsuarioP(\'Pepe\')');
	if(prueba1.length === 2){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = peliculasUsuarioP('Jorge'); 
	console.log('Prueba2: peliculasUsuarioP(\'Jorge\')');
	if(prueba2.length === 6){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = peliculasUsuarioP('Paco'); 
	console.log('Prueba3: peliculasUsuarioP("Paco") ');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = peliculasUsuarioP('Antonio'); 
	console.log('Prueba4: peliculasUsuarioP("Antonio")');
	prueba4.length === 0?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasFiltrarProductora(){
    console.log('Pruebas de Filtrar por Favoritas de un Usuario');
	let prueba1 = peliculasPP('Marvel Studios'); 
	console.log('Prueba1: peliculasPP(\'Marvel Studios\')');
	if(prueba1.length === 3){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = peliculasPP('DC Films'); 
	console.log('Prueba2: peliculasPP(\'DC Films\')');
	if(prueba2.length === 1){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = peliculasPP('PaquitoStudios'); 
	console.log('Prueba3: peliculasPP("PaquitoStudios") ');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
}

function realizarPruebasBusqueda(){
    realizarPruebaBusquedaTituloyDirector();
    realizarPruebasFiltrarGenero();
    realizarPruebasFiltrarFavoritasUsuario();
    realizarPruebasFiltrarProductora();
}


//PRUEBAS PAGINA EDICION

function realizarPruebaCrearPelicula(){
    console.log('Pruebas Crear Pelicula');
	let prueba1 = añadirPeliculaP('Pepito el de los Palotes','Antonio','Blazquez','Accion','PaquitoFilms'); 
	console.log('Prueba1: añadirPeliculaP(\'Pepito el de los Palotes\',\'Antonio\',\'Blazquez\',\'Accion\',\'PaquitoFilms\')');
	if(prueba1 === true){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = añadirPeliculaP('','Antonio','Blazquez','Accion','PaquitoFilms'); 
	console.log('Prueba2: añadirPeliculaP(\'\',\'Antonio\',\'Blazquez\',\'Accion\',\'PaquitoFilms\')');
	if(prueba2 === false){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = añadirPeliculaP('Pepito el de los Palotes','','Blazquez','Accion','PaquitoFilms'); 
	console.log('Prueba3: añadirPeliculaP(\'Pepito el de los Palotes\',\'\',\'Blazquez\',\'Accion\',\'PaquitoFilms\') ');
    prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = añadirPeliculaP('Pepito el de los Palotes','Antonio','Blazquez','Accion',''); 
	console.log('Prueba4: añadirPeliculaP(\'Pepito el de los Palotes\',\'Antonio\',\'Blazquez\',\'Accion\',\'\')');
	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebaCambiarDirector(){
    console.log('Pruebas Cambiar Director');
	let prueba1 = cambiarDirectorActualP('Iron-Man','Antonio','Blazquez'); 
	console.log('Prueba1: cambiarDirectorActualP(\'Iron-Man\',\'Antonio\',\'Blazquez\')');
	if(prueba1 === true){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = cambiarDirectorActualP('Iron-Woman','Antonio','Blazquez'); 
	console.log('Prueba2: cambiarDirectorActualP(\'Iron-Woman\',\'Antonio\',\'Blazquez\')');
	if(prueba2 === false){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = cambiarDirectorActualP('Iron-Man','','Blazquez'); 
	console.log('Prueba3: cambiarDirectorActualP(\'Iron-Man\',\'\',\'Blazquez\') ');
    prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = cambiarDirectorActualP('Iron-Man','Antonio',''); 
	console.log('Prueba4: cambiarDirectorActualP(\'Iron-Man\',\'Antonio\',\'\')');
	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebaCambiarProductoraActual(){
    console.log('Pruebas Cambiar Productora');
	let prueba1 = cambiarProductoraActualP('PaquitoFilms','Iron-Man'); 
	console.log('Prueba1: cambiarProductoraActualP(\'PaquitoFilms\',\'Iron-Man\')');
	if(prueba1 === true){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = cambiarProductoraActualP('PaquitoFilms','Iron-Woman'); 
	console.log('Prueba2: cambiarProductoraActualP(\'PaquitoFilms\',\'Iron-Woman\')');
	if(prueba2 === false){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = cambiarProductoraActualP('','Iron-Man'); 
	console.log('Prueba3: cambiarProductoraActualP(\'\',\'Iron-Man\') ');
    prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = cambiarProductoraActualP('PaquitoFilms',''); 
	console.log('Prueba4: cambiarProductoraActualP(\'PaquitoFilms\',\'\')');
	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasEdicion(){
    realizarPruebaCrearPelicula();
    realizarPruebaCambiarDirector();
    realizarPruebaCambiarProductoraActual();
}
//GESTION
function realizarPruebaPelisMasVotadas(){
    console.log('Pruebas Pelis Mas Votadas');
	let prueba1 = pelisMasVotadasP(10); 
	console.log('Prueba1: pelisMasVotadasP(10)');
	if(prueba1.length === 8){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = pelisMasVotadasP(20); 
	console.log('Prueba2: pelisMasVotadasP(20)');
	if(prueba2[0] === SeñorAnillos1){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = pelisMasVotadasP(0); 
	console.log('Prueba3: pelisMasVotadasP(0)');
    prueba3 === undefined?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = pelisMasVotadasP(-1); 
	console.log('Prueba4: pelisMasVotadasP(-1)');
	prueba4 === undefined?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebaPeliMejorValorada(){
    console.log('Pruebas Pelicula Mejor Valorada');
	let prueba1 = peliMejorValoradaP('superheroes'); 
	console.log('Prueba1: peliMejorValoradaP(\'superheroes\')');
	if(prueba1 === IronMan){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = peliMejorValoradaP('terror'); 
	console.log('Prueba2: peliMejorValoradaP(\'terror\')');
	if(prueba2 === Conjuring){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = peliMejorValoradaP(''); 
	console.log('Prueba3: peliMejorValoradaP(\'\')');
    prueba3 === undefined?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = peliMejorValoradaP('thriller'); 
	console.log('Prueba4: peliMejorValoradaP(\'thriller\')');
	prueba4 === undefined?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebaOrdenarPor(){
    console.log('Pruebas Ordenar Por');
	let prueba1 = ordenarPorP('titulo'); 
	console.log('Prueba1: ordenarPorP(\'titulo\')');
	if(prueba1[0] === Aquaman){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = ordenarPorP('director'); 
	console.log('Prueba2: ordenarPorP(\'director\')');
	if(prueba2[0] === It){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = ordenarPorP(''); 
	console.log('Prueba3: ordenarPorP(\'\')');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = ordenarPorP('genero'); 
	console.log('Prueba4: ordenarPorP(\'genero\')');
    prueba4[0].titulo === "Pepito el de los Palotes"?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
    
    let prueba5 = ordenarPorP('nombreDirector'); 
	console.log('Prueba5: ordenarPorP(\'nombreDirector\')');
	prueba5 === undefined?console.log('Prueba 5 correcta'):console.log('Prueba 5 incorrecta');
}

function realizarPruebasGestion(){
    realizarPruebaPelisMasVotadas();
    realizarPruebaPeliMejorValorada();
    realizarPruebaOrdenarPor();
}
//USUARIO

function realizarPruebaRealizarComentario(){
    console.log('Pruebas Realizar Comentario');
	let prueba1 = realizarComentarioP(clientePepe,IronMan,'Like','Me gusta mucho.'); 
	console.log('Prueba1: realizarComentarioP(clientePepe,\'Iron-Man\',\'Like\',\'Me gusta mucho.\')');
	if(prueba1 === true){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    let IronWoman;
	let prueba2 = realizarComentarioP(clientePepe,IronWoman,'Like','Me gusta mucho.'); 
	console.log('Prueba2: realizarComentarioP(clientePepe,\'Iron-Woman\',\'Like\',\'Me gusta mucho.\')');
	if(prueba2 === false){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = realizarComentarioP(clientePepe,IronMan,'','Me gusta mucho.'); 
	console.log('Prueba3: realizarComentarioP(clientePepe,\'Iron-Man\',\'\',\'Me gusta mucho.\')');
    prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = realizarComentarioP('',IronMan,'Like','Me gusta mucho.'); 
	console.log('Prueba4: realizarComentarioP(\'\',\'Iron-Man\',\'Like\',\'Me gusta mucho.\')');
	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');

}

function realizarPruebaPeliculasParecidas(){
    console.log('Pruebas Peliculas Parecidas a las Favoritas de un Usuario');
	let prueba1 = peliculasParecidasP('Pepe'); 
	console.log('Prueba1: peliculasParecidasP(\'Pepe\')');
	if(prueba1.length === 5){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = peliculasParecidasP('Jorge'); 
	console.log('Prueba2: peliculasParecidasP(\'Jorge\')');
	if(prueba2.length === 4){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = peliculasParecidasP('Paco'); 
	console.log('Prueba3: peliculasParecidasP(\'Paco\')');
    prueba3.length === 0?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = peliculasParecidasP(''); 
	console.log('Prueba4: peliculasParecidasP(\'\')');
	prueba4 === undefined?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasEliminarPeliFavorita(){
    console.log('Pruebas Eliminar una Pelicula Favorita de un Usuario');
	let prueba1 = eliminarPeliFavoritaP('Pepe','Iron-Man'); 
	console.log('Prueba1: eliminarPeliFavoritaP(\'Pepe\',\'Iron-Man\')');
	if(prueba1 === true){
		console.log('Prueba1 Correcta');
	}else{
		console.log('Prueba1 Incorrecta');
    }
    
	let prueba2 = eliminarPeliFavoritaP('Jorge','IT'); 
	console.log('Prueba2: eliminarPeliFavoritaP(\'Jorge\',\'IT\')');
	if(prueba2 === true){
		console.log('Prueba2 Correcta');
	}else{
		console.log('Prueba2 Incorrecta');
    }
    
    let prueba3 = eliminarPeliFavoritaP('Paco','Tiburón'); 
	console.log('Prueba3: eliminarPeliFavoritaP(\'Paco\',\'Tiburón\')');
    prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
	let prueba4 = eliminarPeliFavoritaP('Jorge',''); 
	console.log('Prueba4: eliminarPeliFavoritaP(\'Jorge\',\'\')');
	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
}

function realizarPruebasUsuario(){
    realizarPruebaRealizarComentario();
    realizarPruebaPeliculasParecidas();
    realizarPruebasEliminarPeliFavorita();
}


function realizarTodasLasPruebas(){
    realizarPruebasBusqueda();
    realizarPruebasEdicion();
    realizarPruebasGestion();
    realizarPruebasUsuario();
}

let botonRealizarPruebas = document.getElementById("botonEjecutarPruebas");

botonRealizarPruebas.addEventListener("click",realizarTodasLasPruebas);

// function realizarPruebaPeliculasVotadas(){
//     console.log('Pruebas Peliculas Votadas por un Usuario');
// 	let prueba1 = realizarComentarioP(); 
// 	console.log('Prueba1: realizarComentarioP(\'Pepe\')');
// 	if(prueba1 === true){
// 		console.log('Prueba1 Correcta');
// 	}else{
// 		console.log('Prueba1 Incorrecta');
//     }
    
// 	let prueba2 = realizarComentarioP(''); 
// 	console.log('Prueba2: realizarComentarioP(\'Pepe\')');
// 	if(prueba2 === false){
// 		console.log('Prueba2 Correcta');
// 	}else{
// 		console.log('Prueba2 Incorrecta');
//     }
    
//     let prueba3 = realizarComentarioP(''); 
// 	console.log('Prueba3: realizarComentarioP(\'Pepe\')');
//     prueba3 === false?console.log('Prueba 3 correcta'):console.log('Prueba 3 incorrecta');
    
// 	let prueba4 = realizarComentarioP(''); 
// 	console.log('Prueba4: realizarComentarioP(\'Pepe\')');
// 	prueba4 === false?console.log('Prueba 4 correcta'):console.log('Prueba 4 incorrecta');
// }



