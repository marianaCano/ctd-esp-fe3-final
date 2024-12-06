import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Asegúrate de que el componente Card esté importado correctamente

const Favorites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Leer los favoritos del localStorage al cargar la página
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          // Mapeamos los favoritos y mostramos cada uno como una Card
          favs.map(fav => (
            <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
