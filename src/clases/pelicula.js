class libro{

	constructor(titulo,productora,director,fechaLanzamiento,genero,precio){
		this.titulo = titulo;
		this.productora = productora;
		this.director = director;
		this.fechaLanzamiento = fechaLanzamiento;
		this.genero = genero;
		this.precio = precio;
	}

	get titulo(){
		return `${this._titulo}`;
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
		return `${this._director}`;
	}

	set director(director){
		this._director=director;
	}

	get fechaLanzamiento(){
		return `${this._fechaLanzamiento}`;
	}

	set fechaLanzamiento(fechaLanzamiento){
		this._fechaLanzamiento=fechaLanzamiento;
	}

	get genero(){
		return `${this._genero}`;
	}

	set genero(genero){
		this._genero=genero;
	}

	get precio(){
		return `${this._precio}`;
	}

	set precio(precio){
		this._precio=precio;
	}

}