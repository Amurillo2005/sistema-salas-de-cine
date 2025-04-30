import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login.jsx";
import { Register } from "../Pages/Register/Register.jsx";

export const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    )
}
