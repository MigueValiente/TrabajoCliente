# TrabajoCliente

Clases:

    -Persona: clase padre de Director y Cliente/Usuario.
        Atributos:  -nombre
                    -apellidos

        Funciones:  -getters y setters

    -Cliente: clase hija de Persona.
        Atributos:  -dni
                    -telefono
                    -direccion
                    -Array(Pelicula) peliculasFav
                    -Array(Voto) votos

        Funciones:  -incluirPelicula(pelicula)
                    -contieneNombre(nombre)
                    -incluirVoto(voto)

    -Director: clase hija de Persona.
        Atributos: -Array(Pelicula) peliculas

        Funciones. -incluirPelicula(pelicula)
