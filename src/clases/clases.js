/*************************************************************************************************************/
//PERSONA
class Persona{

	constructor(nombre,apellidos){
		this.nombre = nombre;
		this.apellidos = apellidos;
	}


	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}
}

/*************************************************************************************************************/
//CLIENTE
class Cliente extends Persona{

	constructor(nombre,apellidos,dni,telefono,direccion){
		super(nombre,apellidos);
		this.dni = dni;
		this.telefono = telefono;
		this.direccion = direccion;
		this.peliculasFav = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get dni(){
		return `${this._dni}`;
	}

	set dni(dni){
		this._dni=dni;
	}

	get telefono(){
		return `${this._telefono}`;
	}

	set telefono(telefono){
		this._telefono=telefono;
	}

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}

	get peliculasFav(){
		return this._peliculasFav;
	}

	set peliculasFav(peliculas){
		this._peliculasFav=peliculas;
	}

	incluirPeliculasFav(pelicula){
		this._peliculasFav.push(pelicula);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if(nombreTratado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}
}
/*************************************************************************************************************/
//DIRECTOR
class Director extends Persona{

	constructor(nombre,apellidos){
		super(nombre,apellidos);
		this.peliculas = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get peliculas(){
		return this._peliculas;
	}

	set peliculas(peliculas){
		this._peliculas=peliculas;
	}

	incluirPeliculas(pelicula){
		this._peliculas.push(pelicula);
	}

	toString(){
		return `${this.nombre} ${this.apellidos}`;
	}
}
/*************************************************************************************************************/
//VIDEOCLUB
class Videoclub{

	constructor(nombre,direccion){
		this.nombre = nombre;
		this.direccion = direccion;
		this.peliculas = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get peliculas(){
		return this._peliculas;
	}

	set peliculas(peliculas){
		this._peliculas=peliculas;
	}
	añadirPeliculas(pelicula){
		this._peliculas.push(pelicula);
	}

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}

	incluirPeliculas(pelicula){
		this._peliculas.push(pelicula);
	}

}
/*************************************************************************************************************/
//PRODUCTORA
class Productora{

	constructor(nombre){
		this.nombre = nombre;
		this.peliculas = [];
		this.votos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get peliculas(){
		return this._peliculas;
	}

	set peliculas(peliculas){
		this._peliculas=peliculas;
	}

	incluirPeliculas(pelicula){
		this._peliculas.push(pelicula);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if(nombreTratado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}

	toString(){
		return `${this.nombre}`;
	}
}
/*************************************************************************************************************/
//PELICULA
class Pelicula{

	//<div id="pelicula" data-id-pelicula = "$_GET["id"]"
	constructor(titulo,director,genero,productora){
		this.titulo = titulo;
		this.director = director;
		this.genero = genero;
		this.productora = productora;
		// this.fechaLanzamiento = fechaLanzamiento;
		// this.precio = precio;
	}

	get titulo(){
		return this._titulo;
	}

	set titulo(titulo){
		this._titulo=titulo;
	}

	get productora(){
		return `${this._productora}`;
	}

	set productora(productora){
		this._productora=productora;
	}

	get director(){
		return this._director;
	}

	set director(director){
		this._director=director;
	}

	// get fechaLanzamiento(){
	// 	return `${this._fechaLanzamiento}`;
	// }

	// set fechaLanzamiento(fechaLanzamiento){
	// 	this._fechaLanzamiento=fechaLanzamiento;
	// }

	get genero(){
		return this._genero;
	}

	set genero(genero){
		this._genero=genero;
	}

	// get id(){
	// 	return this._id;
	// }

	// set id(id){
	// 	this._id=id;
	// }

	// get precio(){
	// 	return `${this._precio}`;
	// }

	// set precio(precio){
	// 	this._precio=precio;
	// }

	mostrarEnHTML(nodoHTML){
		let bloque = document.createElement("div");
		bloque.className = "pelicula";
		let titulo = document.createElement("h2");
		titulo.innerHTML = this.titulo; 
		let genero = document.createElement("h3");
		genero.innerHTML = this.genero;
		let director = document.createElement("p");
		// console.log(this.director);
		director.innerHTML = `${this.director}`;
		let productora = document.createElement("p");
		productora.innerHTML = `${this.productora}`;
		bloque.append(titulo);
		bloque.append(genero);
		bloque.append(director);
		bloque.append(productora);
		nodoHTML.appendChild(bloque);
	}

	contieneTitulo(titulo){
		let contiene = false;
		let tituloTratado = tratarCadenasInput(titulo);
		if(tituloTratado !== null){
			contiene = this.titulo.toUpperCase().includes(tituloTratado);
		}
		return contiene;
	}

	contieneDirector(director){
		let contiene = false;
		let directorTratado = tratarCadenasInput(director);
		if(directorTratado != null){
			contiene = this.director.nombre.toUpperCase().includes(directorTratado);
		}
		return contiene;
	}

	contieneGenero(genero){
		let contiene = false;
		let generoTratado = tratarCadenasInput(genero);
		if(generoTratado !== null){
			contiene = this.genero.toLocaleLowerCase().includes(generoTratado.toLocaleLowerCase());
		}
		return contiene;
	}
}
/*************************************************************************************************************/
//VOTOS
class Votos{

	constructor(puntuacion,comentario,cliente,pelicula){
		this.puntuacion = puntuacion;
		this.comentario = comentario;
		this.cliente = cliente;
		this.pelicula = pelicula;
	}

	get puntuacion(){
		return `${this._puntuacion}`;
	}

	set puntuacion(puntuacion){
		this._puntuacion=puntuacion;
	}

	get comentario(){
		return `${this._comentario}`;
	}

	set comentario(comentario){
		this._comentario=comentario;
	}

	get cliente(){
		return `${this._cliente}`;
	}

	set cliente(cliente){
		this._cliente=cliente;
	}

	get pelicula(){
		return `${this._pelicula}`;
	}

	set pelicula(pelicula){
		this._pelicula=pelicula;
	}


}

