import "./NavBar.css"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="title-cinema-container">
                    <h2 className="title-cinema">CineYa</h2>
                </div>
                <div className="navbar-links-container">
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li className="nav-link"><Link to="/">Cartelera</Link></li>
                            <li className="nav-link"><Link to="pronto">Pronto</Link></li>
                        </ul>
                    </div>

                    <div className="search-movies-container">
                        <FaSearch className="search-icon" />
                        <input type="text" className="search-movies" placeholder="Buscar" />
                    </div>

                    <div className="user-icon-container">
                        <FaUser className="user-icon" />
                    </div>
                </div>
            </nav>
        </>
    )
}
