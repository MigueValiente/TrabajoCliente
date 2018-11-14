//Declarando Clientes
let cliente1 = new Cliente("Pepe","Espejo Roig","72146712K",954321231,"Calle Don Nadie, Nº213");
let C2 = new Cliente("Jorge","Baron Abad","72254571F",954367681,"Calle Don Alguien, Nº214");

//Declarar Director
let directorWhedon = new Director("Joss","Whedon");
let directorFavreau = new Director("John","Favreau");
let directorDerrickson = new Director("Scott","Derrickson");

//Declarando peliculas
let IronMan = new Pelicula("Iron-Man"/*,"Marvel Studios"*/,directorFavreau/*,"30/4/2008"*/,"Superheroes",/*12.95*/);
let DoctorStrange = new Pelicula("Doctor Strange"/*,"Marvel Studios"*/,directorDerrickson/*,"14/7/1852"*/,"Superheroes"/*,18.95*/);
let Vengadores = new Pelicula("Los Vengadores"/*,"Marvel Studios"*/,directorWhedon/*,"4/5/2012"*/,"Superheroes"/*,14.95*/);

//Array de peliculas
let peliculas = [];

peliculas.push(IronMan);
peliculas.push(DoctorStrange);
peliculas.push(Vengadores);

//Declarar videoclub
let videoclub = new Videoclub("PAQUITO","Calle de la Piruleta, Nº7");
videoclub.incluirPeliculas(IronMan);
videoclub.incluirPeliculas(DoctorStrange);
videoclub.incluirPeliculas(Vengadores);

//Añadiendo pelis a directores

directorWhedon.incluirPeliculas(Vengadores);
directorFavreau.incluirPeliculas(IronMan);
directorDerrickson.incluirPeliculas(DoctorStrange);


//Declarar Votos
// let voto1 = new votos(3,"Ezta peli no me a gustadio.",cliente1,Vengadores);
// let voto2 = new votos(5,"Me ha encatado este libro si señor",cliente1,IronMan);

// console.log(videoclub);
// console.log(cliente2);
// console.log(IronMan);
// console.log(Whedon);
// console.log(voto1);