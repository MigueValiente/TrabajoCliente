class videoclub{

	constructor(nombre,libros,direccion){
		this.nombre = nombre;
		this.peliculas = peliculas;
		this.direccion = direccion;
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

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}
}