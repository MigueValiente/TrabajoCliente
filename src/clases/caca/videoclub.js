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
		return `${this._peliculas}`;
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