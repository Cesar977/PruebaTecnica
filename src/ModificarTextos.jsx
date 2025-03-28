import { useState } from "react";

function ModificarTextos() {
  const [texto1, setTexto1] = useState("Texto 1");
  const [texto2, setTexto2] = useState("Texto 2");
  const [texto3, setTexto3] = useState("Texto 3");

  return (
    <div>
      <h2>Modificar Textos</h2>
      <p>{texto1}</p>
      <p>{texto2}</p>
      <p>{texto3}</p>
      <button onClick={() => setTexto1("Hola")}>Cambiar Texto 1</button>
      <button onClick={() => setTexto2("Como estas")}>Cambiar Texto 2</button>
      <button onClick={() => setTexto3("Quieres ser mi amigo :)")}>
        Cambiar Texto 3
      </button>
    </div>
  );
}

export default ModificarTextos;
