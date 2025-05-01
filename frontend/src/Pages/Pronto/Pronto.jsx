import "./Pronto.css"
import { MovieCard } from "../../Components/MovieCard/MovieCard"
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.jpg"

export const Pronto = () => {

    const movies = [
        {
            id: 1,
            img: img1,
            nombre: "ThunderBolts",
            estreno: "Estreno: 30-Abr-2025",
            genero: "Accion, Aventura, Ciencia Ficción, Crimen, Drama, Fantasía"
        },
        {
            id: 2,
            img: img2,
            nombre: "karate Kid: Legendas",
            estreno: "Estreno: 9-May-2025",
            genero: "Accion, Drama, Familiar"
        }
    ]

    return (
        <>
            <div className="main-container">
                <div className="movies-container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} img={movie.img} nombre={movie.nombre} estreno={movie.estreno} genero={movie.genero} />
                    ))}
                </div>
            </div>

        </>
    )
}
