import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DentistDetail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data));
  }, [id]);

  return dentist ? (
    <div>
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

export default DentistDetail;
