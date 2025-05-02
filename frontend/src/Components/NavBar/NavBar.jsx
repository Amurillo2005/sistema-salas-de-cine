import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaArrowRight } from "react-icons/fa";
import { useAuth } from '../../context/authContext';
import { useState, useEffect, useRef } from "react";
import { useSearch } from '../../context/searchContext';

export const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const { searchTerm, setSearchTerm } = useSearch();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="title-cinema-container">
        <h2 className="title-cinema">CineYa</h2>
      </div>

      <div className="navbar-links-container">
        <div className="nav-links-container">
          <ul className="nav-links">
            <li className="nav-link"><Link to="/">Cartelera</Link></li>
            <li className="nav-link"><Link to="/pronto">Pronto</Link></li>
          </ul>
        </div>

        <div className="search-movies-container">
          <FaSearch className="search-icon" />
          <input type="text" className="search-movies" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="user-icon-container" ref={menuRef}>
          <FaUser className="user-icon" onClick={() => setMenuOpen(!menuOpen)} />

          {menuOpen && (
            <div className="user-dropdown-custom">
              <div className="dropdown-arrow"></div>

              {user ? (
                <>
                  <div className="user-dropdown-header">{user.nombre}</div>
                  <Link to="/mis-compras" className="dropdown-item">
                    Mis compras <FaArrowRight />
                  </Link>
                  <Link to="/mis-transacciones" className="dropdown-item">
                    Mis transacciones <FaArrowRight />
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item logout">
                    Cerrar sesión <FaArrowRight />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-item">
                    Iniciar sesión <FaArrowRight />
                  </Link>
                  <Link to="/register" className="dropdown-item">
                    Registrarse <FaArrowRight />
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
