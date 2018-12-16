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
		this.votos = [];
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

	get votos(){
		return this._votos;
	}

	set votos(votos){
		this._votos=votos;
	}
	/**
	 * Funcion que añade una pelicula a peliculasFav
	 * @param {Pelicula} pelicula 
	 */
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
	/**
	 * Funcion que añade un voto a votos
	 * @param {Voto} voto
	 */
	incluirVoto(voto){
		this._votos.push(voto);
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
	/**
	 * Funcion que añade una pelicula a peliculas
	 * @param {Pelicula} pelicula 
	 */
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
	/**
	 * Funcion que añade una pelicula a peliculas
	 * @param {Pelicula} pelicula 
	 */
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
	/**
	 * Funcion que añade una pelicula a peliculas
	 * @param {Pelicula} pelicula 
	 */
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
		this.votos = [];
		this.likes = 0;
		this.dislikes = 0;
	}

	get titulo(){
		return this._titulo;
	}

	set titulo(titulo){
		this._titulo=titulo;
	}

	get productora(){
		return this._productora;
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

	get genero(){
		return this._genero;
	}

	set genero(genero){
		this._genero=genero;
	}

	get votos(){
		return this._votos;
	}

	set votos(votos){
		this._votos=votos;
	}

	mostrarEnHTML(nodoHTML){
		let bloque = document.createElement("div");
		bloque.className = "pelicula";
		bloque.setAttribute("data-identificador",quitarEspacios(this.titulo));
		let titulo = document.createElement("h2");
		titulo.innerHTML = this.titulo; 
		titulo.setAttribute("data-identificador","titulo");
		let genero = document.createElement("h3");
		genero.innerHTML = this.genero;
		genero.setAttribute("data-identificador","genero");
		let director = document.createElement("p");
		// console.log(this.director);
		director.innerHTML = `${this.director}`;
		director.setAttribute("data-identificador","director");
		let productora = document.createElement("p");
		productora.innerHTML = `${this.productora}`;
		productora.setAttribute("data-identificador","productora");
		let contadorLikes = document.createElement("i");
		contadorLikes.setAttribute("data-identificador","contadorLikes");
		contadorLikes.classList.add("far");
		contadorLikes.classList.add("fa-thumbs-up");
		contadorLikes.innerHTML = `${this.likes}`;
		let contadorDislikes = document.createElement("i");
		contadorDislikes.setAttribute("data-identificador","contadorDislikes");
		contadorDislikes.classList.add("far");
		contadorDislikes.classList.add("fa-thumbs-down");
		contadorDislikes.innerHTML = `${this.dislikes}`;
		bloque.append(titulo);
		bloque.append(genero);
		bloque.append(director);
		bloque.append(productora);
		bloque.append(contadorLikes);
		bloque.append(contadorDislikes);
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
			contiene = this.director.apellidos.toUpperCase().includes(directorTratado);
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
	/**
	 * Funcion que añade un voto a votos
	 * @param {Voto} voto
	 */
	incluirVoto(voto){
		this._votos.push(voto);
		this.contarVotos();
	}
	/**
	 * Funcion que cuenta los likes y dislikes de una pelicula
	 */
	contarVotos(){
		this.likes = 0;
		this.dislikes = 0;
		for (let i = 0; i < this.votos.length; i++) {
			if(this.votos[i]._puntuacion === "like"){
				this.likes++;
			}else{
				this.dislikes++;
			}
		}
	}
}
/*************************************************************************************************************/
//VOTOS
class Votos{

	constructor(cliente,pelicula,puntuacion,comentario){
		this.cliente = cliente;
		this.pelicula = pelicula;
		this.puntuacion = puntuacion;
		this.comentario = comentario;
		// cliente.incluirVoto(this);
		// pelicula.incluirVoto(this);
		
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

