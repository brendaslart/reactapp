import { Routes, Route, Link, Navigate } from "react-router-dom";
import App from "../App";
import Pokedex from "../screens/Pokedex";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* redireccion en caso de no encontrar la ruta */}
      <Route path="*" element={<Navigate to="/" />} /> 
      <Route path="/Pokedex" element={<Pokedex/>} />
    </Routes>
  );
};

export default PublicRouter;
