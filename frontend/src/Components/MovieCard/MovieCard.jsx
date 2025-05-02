import "./MovieCard.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ img, nombre, estreno, genero, url }) => {
    return (
        <div className="movie-card-container">
            <Link to={url}>
                <div className="movie-card-img-container">
                    <img src={img} alt={nombre} className="movie-card-img" />
                </div>
                <div className="movie-card-info-container">
                    <h3 className="movie-card-title">{nombre}</h3>
                    <p className="movie-card-estreno">{estreno}</p>
                    <p className="movie-card-genero">{genero}</p>
                </div>
            </Link>
        </div>
    );
};
