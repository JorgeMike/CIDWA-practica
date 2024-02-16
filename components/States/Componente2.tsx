"use client";
import React, { useState } from "react";

export default function Componente2({ aumento = 1 }: { aumento?: number }) {
  const [contador, setContador] = useState<number>(0);

  const handleChangeContador = (tipo_cambio: string) => {
    console.log(tipo_cambio);
    if (tipo_cambio === "sumar") setContador((a) => a + aumento);
    if (tipo_cambio === "restar") setContador((a) => a - aumento);
  };

  return (
    <div className="my-3">
      {aumento !== 1 && (
        <h3 className="text-center ">
          Este contador aumenta y disminuye en pasos de {aumento}
        </h3>
      )}
      <div className="d-flex align-items-center justify-content-center ">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleChangeContador("sumar")}
        >
          Sumar
        </button>
        <p className="mx-5">{contador}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleChangeContador("restar")}
        >
          Restar
        </button>
      </div>
    </div>
  );
}
