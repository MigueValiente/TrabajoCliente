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
		return `${this._peliculas}`;
	}

	set peliculas(peliculas){
		this._peliculas=peliculas;
	}

	incluirPeliculas(pelicula){
		this._peliculas.push(pelicula);
	}
}