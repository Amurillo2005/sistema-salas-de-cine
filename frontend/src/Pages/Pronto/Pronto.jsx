import "./Pronto.css";
import { useEffect, useState } from "react";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { useSearch } from '../../context/searchContext';


export const Pronto = () => {
    const [peliculas, setPeliculas] = useState([]);
    const { searchTerm } = useSearch();

    const filteredPeliculas = peliculas.filter((movie) =>
        movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchPeliculasPronto = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/peliculas/pronto");
                const data = await res.json();
                setPeliculas(data);
            } catch (error) {
                console.error("Error al obtener películas pronto:", error);
            }
        };

        fetchPeliculasPronto();
    }, []);

    return (
        <div className="main-container">
            <div className="movies-container">
                {filteredPeliculas.map((movie) => (
                    <MovieCard
                        key={movie.id_pelicula}
                        img={movie.imagen_url}
                        nombre={movie.titulo}
                        estreno={`Duración: ${movie.duracion} min`}
                        genero={movie.genero}
                        url={`/detalle/${movie.id_pelicula}`}
                    />
                ))}
            </div>
        </div>
    );
};
