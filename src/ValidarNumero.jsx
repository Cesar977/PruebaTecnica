import { useState } from "react";

function ValidarNumero() {
  const [numero, setNumero] = useState("");

  return (
    <div>
      <h2>Validar Número</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <p>
        {numero && (parseInt(numero) > 10 ? "Es mayor a 10" : "Es 10 o menor")}
      </p>
    </div>
  );
}

export default ValidarNumero;
