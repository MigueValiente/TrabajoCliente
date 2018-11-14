class Votos{

	constructor(puntuacion,comentario,cliente,libro){
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
