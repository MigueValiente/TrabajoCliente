class cliente extends persona{

    constructor(nombre,apellidos,dni,telefono,direccion){
        super(nombre,apellidos);
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
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

    get gustos(){
        return `${this._gustos}`;
    }

    set gustos(gustos){
        this._gustos=gustos;
    }


}