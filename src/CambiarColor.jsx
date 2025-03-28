import { useState } from "react";

function CambiarColor() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
    >
      <h2>Cambiar Color de Fondo</h2>
      <button onClick={() => setColor("blue")}>Azul</button>
      <button onClick={() => setColor("red")}>Rojo</button>
      <button onClick={() => setColor("green")}>Verde</button>
    </div>
  );
}

export default CambiarColor;
