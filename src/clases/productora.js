class productora{

	constructor(nombre, peliculas){
		this.nombre = nombre;
		this.peliculas = peliculas;
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
}