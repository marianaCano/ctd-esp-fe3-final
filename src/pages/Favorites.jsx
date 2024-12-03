import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
