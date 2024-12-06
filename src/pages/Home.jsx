import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch para obtener la lista de dentistas
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }))
      .catch((error) => console.error("Error fetching dentists:", error));
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Listado de Dentistas</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </div>
  );
};

export default Home;
