import { Routes, Route, Link, Navigate } from "react-router-dom";
import App from "../App";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* redireccion en caso de no encontrar la ruta */}
      <Route path="*" element={<Navigate to="/" />} /> 
      
    </Routes>
  );
};

export default PublicRouter;
