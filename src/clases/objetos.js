//Declarando Clientes
let clientePepe = new Cliente("Pepe","Espejo Roig","72146712K",954321231,"Calle Don Nadie, Nº213");
let clienteJorge = new Cliente("Jorge","Baron Abad","72254571F",954367681,"Calle Don Alguien, Nº214");

//Declarar Director
let directorWhedon = new Director("Joss","Whedon");
let directorFavreau = new Director("John","Favreau");
let directorDerrickson = new Director("Scott","Derrickson");
let directorWan = new Director("James","Wan");
let directorJackson = new Director("Peter","Jackson");
let directorSpielberg = new Director("Steven","Spielberg");

let listaDirectores = [directorWhedon,directorFavreau,directorDerrickson,directorWan,directorJackson,directorSpielberg];
let listaClientes = [clientePepe,clienteJorge];

//Declarando Productoras
let marvelStudio = new Productora("Marvel Studios");
let newLineCinema = new Productora("New Line Cinema");
let wingNutFilms = new Productora("WingNut Films");
let universalStudios = new Productora("Universal Studios");

//Declarando peliculas
let IronMan = new Pelicula("Iron-Man",directorFavreau/*,"30/4/2008"*/,"Superheroes",marvelStudio/*12.95*/);
let DoctorStrange = new Pelicula("Doctor Strange",directorDerrickson/*,"14/7/1852"*/,"Superheroes",marvelStudio/*,18.95*/);
let Vengadores = new Pelicula("Los Vengadores",directorWhedon/*,"4/5/2012"*/,"Superheroes",marvelStudio/*,14.95*/);
let Conjuring = new Pelicula("The Conjuring",directorWan,"Terror",newLineCinema);
let SeñorAnillos1 = new Pelicula("La Comunidad del Anillo",directorJackson,"Fantasia",wingNutFilms);
let SeñorAnillos2 = new Pelicula("La Dos Torres",directorJackson,"Fantasia",wingNutFilms);
let SeñorAnillos3 = new Pelicula("El Retorno del Rey",directorJackson,"Fantasia",wingNutFilms);
let tiburon1 = new Pelicula("Tiburón",directorSpielberg,"Terror",universalStudios);

//Añadiendo peliculas al array de las Productoras
marvelStudio.incluirPeliculas(IronMan);
marvelStudio.incluirPeliculas(DoctorStrange);
marvelStudio.incluirPeliculas(Vengadores);

newLineCinema.incluirPeliculas(Conjuring);

wingNutFilms.incluirPeliculas(SeñorAnillos1);
wingNutFilms.incluirPeliculas(SeñorAnillos2);
wingNutFilms.incluirPeliculas(SeñorAnillos3);

universalStudios.incluirPeliculas(tiburon1);

//Array de Productoras

let listaProductoras = [marvelStudio,newLineCinema,wingNutFilms,universalStudios];

//Array de peliculas
let peliculas = [];

peliculas.push(IronMan);
peliculas.push(DoctorStrange);
peliculas.push(Vengadores);
peliculas.push(Conjuring);
peliculas.push(SeñorAnillos1);
peliculas.push(SeñorAnillos2);
peliculas.push(SeñorAnillos3);
peliculas.push(tiburon1);

//Declarar videoclub
let videoclub = new Videoclub("PAQUITO","Calle de la Piruleta, Nº7");
videoclub.incluirPeliculas(IronMan);
videoclub.incluirPeliculas(DoctorStrange);
videoclub.incluirPeliculas(Vengadores);
videoclub.incluirPeliculas(Conjuring);
videoclub.incluirPeliculas(SeñorAnillos1);
videoclub.incluirPeliculas(SeñorAnillos2);
videoclub.incluirPeliculas(SeñorAnillos3);

//Añadir peliculas favoritas a los clientes

clientePepe.incluirPeliculasFav(IronMan);
clientePepe.incluirPeliculasFav(Conjuring);
clienteJorge.incluirPeliculasFav(DoctorStrange);
clienteJorge.incluirPeliculasFav(Vengadores);


//Añadiendo pelis a directores

directorWhedon.incluirPeliculas(Vengadores);
directorFavreau.incluirPeliculas(IronMan);
directorDerrickson.incluirPeliculas(DoctorStrange);
directorWan.incluirPeliculas(Conjuring);
directorJackson.incluirPeliculas(SeñorAnillos1);
directorJackson.incluirPeliculas(SeñorAnillos2);
directorJackson.incluirPeliculas(SeñorAnillos3);

mostrarPeliculasHTML(peliculas);
//Declarar Votos
// let voto1 = new votos(3,"Ezta peli no me a gustadio.",cliente1,Vengadores);
// let voto2 = new votos(5,"Me ha encatado este libro si señor",cliente1,IronMan);

// console.log(videoclub);
// console.log(cliente2);
// console.log(IronMan);
// console.log(Whedon);
// console.log(voto1);