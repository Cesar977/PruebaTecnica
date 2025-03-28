import { useState } from "react";

function MostrarObjeto() {
  const persona = { nombre: "Cesar", edad: 21, ciudad: "Bogota" };
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <h2>Mostrar Datos de un Objeto</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Datos" : "Mostrar Datos"}
      </button>
      {mostrar && (
        <ul>
          <li>Nombre: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Ciudad: {persona.ciudad}</li>
        </ul>
      )}
    </div>
  );
}

export default MostrarObjeto;
