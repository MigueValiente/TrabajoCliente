class autor extends persona{

    constructor(nombre,apellidos){
        super(nombre,apellidos);
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

    get libros(){
        return `${this._libros}`;
    }

    set libros(libros){
        this._libros=libros;
    }
}