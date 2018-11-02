//Declarando Clientes
let cliente1 = new cliente("Pepe","Espejo Roig","72146712K",954321231,"Calle Don Nadie, Nº213");
let cliente2 = new cliente("Jorge","Baron Abad","72254571F",954367681,"Calle Don Alguien, Nº214");

//Declarar Autor
let Whedon = new director("Joss","Whedon");
let Favreau = new director("John","Favreau");
let Derrickson = new director("Scott","Derrickson");

//Declarando Libros
let IronMan = new pelicula("Iron-Man","Marvel Studios",Favreau,"30/4/2008","Superheroes",12.95);
let DoctorStrange = new pelicula("Doctor Strange","Marvel Studios",Derrickson,"14/7/1852","Superheroes",18.95);
let Vengadores = new pelicula("Los Vengadores","Marvel Studios",Whedon,"4/5/2012","Superheroes",14.95);

//Array de Libros
let peliculasMarvel = [IronMan,Vengadores,DoctorStrange];

//Declarar Libreria
let videoclub = new videoclub("PAQUITO",peliculasMarvel,"Calle de la Piruleta, Nº7");




//Declarar Votos
let voto1 = new votos(3,"Ezta peli no me a gustadio.",cliente1,Vengadores);
let voto2 = new votos(5,"Me ha encatado este libro si señor",cliente1,IronMan);

console.log(videoclub);
console.log(cliente2);
console.log(IronMan);
console.log(Whedon);
console.log(voto1);