import "./Footer.css"
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-name-cinema">
                    <h2 className="footer-title-cinema">CineYa</h2>
                </div>
                <div className="footer-links-container">
                        <ul className="footer-link">
                            <li className="footer-link-item"><a href="#">Información legal</a></li>
                            <li className="footer-link-item"><a href="#">Acerca de CineYa</a></li>
                            <li className="footer-link-item"><a href="#">Preguntas frecuentes</a></li>
                        </ul>
                </div>

                <div className="footer-social-media-container">
                    <ul className="footer-social-media">
                        <li className="footer-social-media-item"><a href="#"><FaFacebookF className="icon-facebook"/></a></li>
                        <li className="footer-social-media-item"><a href="#"><FaInstagram className="icon-instagram"/></a></li>
                        <li className="footer-social-media-item"><a href="#"><FaXTwitter className="icon-x" /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
