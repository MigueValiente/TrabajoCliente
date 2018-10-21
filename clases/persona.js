class persona{

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