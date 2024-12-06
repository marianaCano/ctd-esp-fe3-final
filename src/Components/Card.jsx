import React from "react";
import { Link } from "react-router-dom"; 

const Card = ({ name, username, id }) => {
 
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favs")) || []; 
    const newFav = { id, name, username }; 
    if (!existingFavs.some(fav => fav.id === id)) {
      const updatedFavs = [...existingFavs, newFav]; 
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); 
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

