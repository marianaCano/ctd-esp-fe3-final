import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DentistDetail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/:id`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error("Error fetching dentist detail:", error));
  }, [id]);

  if (!dentist) return <p>Cargando detalles del dentista...</p>;

  return (
    <div className="dentist-detail">
      <h1>Detalles del Dentista</h1>
      <p><strong>Nombre:</strong> {dentist.name}</p>
      <p><strong>Usuario:</strong> {dentist.username}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Teléfono:</strong> {dentist.phone}</p>
      <p><strong>Sitio Web:</strong> {dentist.website}</p>
    </div>
  );
};

export default DentistDetail;
