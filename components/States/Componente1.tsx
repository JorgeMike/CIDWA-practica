"use client";
import React, { useState } from "react";

export default function Componente1({ texto = "Default" }: { texto?: string }) {
  const [estado, setEstado] = useState<string>(texto);

  const handleReset = () => {
    setEstado("Default")
  }

  return (
    <div className="my-3">
      <h2>{estado}</h2>
      <button type="button" className="btn btn-primary" onClick={handleReset}>
        Reset estado
      </button>
    </div>
  );
}
