import React from "react";

interface Componente4Props {
  onChangeEstado: React.Dispatch<React.SetStateAction<string>>;
}

export default function Componente4({ onChangeEstado }: Componente4Props) {
  return (
    <div className="mb-2">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => onChangeEstado("Adios Mundo :(")}
      >
        Cambiar estado
      </button>
    </div>
  );
}
