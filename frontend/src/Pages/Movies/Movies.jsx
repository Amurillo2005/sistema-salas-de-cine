import "./Movies.css"
import { NavBar } from "../../Components/NavBar/NavBar"
import { MovieCard } from "../../Components/MovieCard/MovieCard"
import { Footer } from "../../Components/Footer/Footer"
import img1 from "/assets/img/img1.png"
import img2 from "/assets/img/img2.jpg"
import img3 from "/assets/img/img3.jpg"
import img4 from "/assets/img/img4.jpg"
import img5 from "/assets/img/img5.png"
import img6 from "/assets/img/img6.jpg"

export const Main = () => {
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
        },
        {
            id: 3,
            img: img3,
            nombre: "Destino final: Lazos de sangre",
            estreno: "Estreno: 15-May-2025",
            genero: "Horror"
        },
        {
            id: 4,
            img: img4,
            nombre: "El contador 2",
            estreno: "Estreno: 24-Abr-2025",
            genero: "Accion, Crime, Drama, Suspenso, Misterio"
        },
        {
            id: 5,
            img: img5,
            nombre: "Star Wars - Episodio 3: La venganza de los Sith",
            estreno: "Estreno: 24-Abr-2025",
            genero: "Accion, Aventura, Ciencia Ficción"
        },
        {
            id: 6,
            img: img6,
            nombre: "Una película de Minecraft",
            estreno: "Estreno: 3-Abr-2025",
            genero: "Accion, Aventura, Familiar, Fantasía"
        },
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
