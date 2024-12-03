import React from "react";
import { Link } from "react-router-dom"; // Para redirigir al detalle del dentista

const Card = ({ name, username, id }) => {
  // Función para agregar al localStorage
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favs")) || []; // Obtiene los favoritos actuales
    const newFav = { id, name, username }; // Crea un objeto con los datos de la Card

    // Verifica si ya está en favoritos
    if (!existingFavs.some(fav => fav.id === id)) {
      const updatedFavs = [...existingFavs, newFav]; // Agrega el nuevo favorito
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); // Guarda en localStorage
      alert(`${name} fue agregado a tus favoritos!`);
    } else {
      alert(`${name} ya está en tus favoritos.`);
    }
  };

  return (
    <div className="card">
      {/* Mostramos los datos del dentista */}
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Usuario:</strong> {username}</p>
      <p><strong>ID:</strong> {id}</p>

      {/* Link a la página de detalle del dentista */}
      <Link to={`/dentist/${id}`} className="details-link">
        Ver Detalles
      </Link>

      {/* Botón para agregar a favoritos */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

