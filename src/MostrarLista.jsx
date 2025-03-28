import { useState } from "react";

function MostrarLista() {
  const [lista] = useState(["Mondongo", "Mute", "Sancocho", "Ajiaco"]);

  return (
    <div>
      <h2>Mostrar Lista</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MostrarLista;
