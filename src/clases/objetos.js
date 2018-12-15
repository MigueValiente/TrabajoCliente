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
let directorMuschietti = new Director("Andy","Muschietti");
let directorKleiser = new Director("Randal","Kleiser");
let directorStahelski = new Director("Chad","Stahelski");

let listaDirectores = [directorWhedon,directorFavreau,directorDerrickson,directorWan,directorJackson,directorSpielberg,directorMuschietti,directorStahelski];
let listaClientes = [clientePepe,clienteJorge];

//Declarando Productoras
let marvelStudio = new Productora("Marvel Studios");
let newLineCinema = new Productora("New Line Cinema");
let wingNutFilms = new Productora("WingNut Films");
let universalStudios = new Productora("Universal Studios");
let amblingEntertainment = new Productora("Amblin Entertainment");
let dcFilms = new Productora("DC Films");
let rsoRecords = new Productora("RSO Records");
let mjwFilms = new Productora("MJW Films");

//Declarando peliculas
let IronMan = new Pelicula("Iron-Man",directorFavreau/*,"30/4/2008"*/,"Superheroes",marvelStudio/*12.95*/);
let DoctorStrange = new Pelicula("Doctor Strange",directorDerrickson/*,"14/7/1852"*/,"Superheroes",marvelStudio/*,18.95*/);
let Vengadores = new Pelicula("Los Vengadores",directorWhedon/*,"4/5/2012"*/,"Superheroes",marvelStudio/*,14.95*/);
let Conjuring = new Pelicula("The Conjuring",directorWan,"Terror",newLineCinema);
let SeñorAnillos1 = new Pelicula("La Comunidad del Anillo",directorJackson,"Fantasia",wingNutFilms);
let SeñorAnillos2 = new Pelicula("La Dos Torres",directorJackson,"Fantasia",wingNutFilms);
let SeñorAnillos3 = new Pelicula("El Retorno del Rey",directorJackson,"Fantasia",wingNutFilms);
let Tiburon1 = new Pelicula("Tiburón",directorSpielberg,"Terror",universalStudios);
let JurassicPark = new Pelicula("Jurassic Park",directorSpielberg,"Aventuras",amblingEntertainment);
let Aquaman = new Pelicula("Aquaman",directorWan,"Superheroes",dcFilms);
let It = new Pelicula("IT",directorMuschietti,"Terror",newLineCinema);
let Grease = new Pelicula("Grease",directorKleiser,"Musical",rsoRecords);
let JohnWick = new Pelicula("John Wick",directorStahelski,"Accion",mjwFilms);

//Añadiendo peliculas al array de las Productoras
marvelStudio.incluirPeliculas(IronMan);
marvelStudio.incluirPeliculas(DoctorStrange);
marvelStudio.incluirPeliculas(Vengadores);

newLineCinema.incluirPeliculas(Conjuring);
newLineCinema.incluirPeliculas(It);

wingNutFilms.incluirPeliculas(SeñorAnillos1);
wingNutFilms.incluirPeliculas(SeñorAnillos2);
wingNutFilms.incluirPeliculas(SeñorAnillos3);

universalStudios.incluirPeliculas(Tiburon1);

amblingEntertainment.incluirPeliculas(JurassicPark);

dcFilms.incluirPeliculas(Aquaman);

rsoRecords.incluirPeliculas(Grease);

mjwFilms.incluirPeliculas(JohnWick);

//Array de Productoras

let listaProductoras = [marvelStudio,newLineCinema,wingNutFilms,universalStudios,amblingEntertainment,dcFilms,rsoRecords,mjwFilms];

//Array de peliculas
let peliculas = [];

peliculas.push(IronMan);
peliculas.push(DoctorStrange);
peliculas.push(Vengadores);
peliculas.push(Conjuring);
peliculas.push(SeñorAnillos1);
peliculas.push(SeñorAnillos2);
peliculas.push(SeñorAnillos3);
peliculas.push(Tiburon1);
peliculas.push(JurassicPark);
peliculas.push(Aquaman);
peliculas.push(It);
peliculas.push(Grease);
peliculas.push(JohnWick);

//Declarar videoclub
let videoclub = new Videoclub("PAQUITO","Calle de la Piruleta, Nº7");
videoclub.incluirPeliculas(IronMan);
videoclub.incluirPeliculas(DoctorStrange);
videoclub.incluirPeliculas(Vengadores);
videoclub.incluirPeliculas(Conjuring);
videoclub.incluirPeliculas(SeñorAnillos1);
videoclub.incluirPeliculas(SeñorAnillos2);
videoclub.incluirPeliculas(SeñorAnillos3);
videoclub.incluirPeliculas(Tiburon1);
videoclub.incluirPeliculas(JurassicPark);
videoclub.incluirPeliculas(Aquaman);
videoclub.incluirPeliculas(It);
videoclub.incluirPeliculas(Grease);
videoclub.incluirPeliculas(JohnWick);

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
directorWan.incluirPeliculas(Aquaman)

directorJackson.incluirPeliculas(SeñorAnillos1);
directorJackson.incluirPeliculas(SeñorAnillos2);
directorJackson.incluirPeliculas(SeñorAnillos3);

directorSpielberg.incluirPeliculas(Tiburon1);
directorSpielberg.incluirPeliculas(JurassicPark);

directorMuschietti.incluirPeliculas(It);

directorKleiser.incluirPeliculas(Grease);

directorStahelski.incluirPeliculas(JohnWick);

mostrarPeliculasHTML(peliculas);
//Declarar Votos
// let voto1 = new votos(3,"Ezta peli no me a gustadio.",cliente1,Vengadores);
// let voto2 = new votos(5,"Me ha encatado este libro si señor",cliente1,IronMan);

// console.log(videoclub);
// console.log(cliente2);
// console.log(IronMan);
// console.log(Whedon);
// console.log(voto1);