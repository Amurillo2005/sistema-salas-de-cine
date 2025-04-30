import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login.jsx";

export const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}
