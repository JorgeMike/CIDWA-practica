"use client";
import React, { useState } from "react";
import Componente4 from "./Componente4";
import Componente5 from "./Componente5";

export default function Componente3() {
  const [estado, setEstado] = useState<string>("Hola Mundo!");
  return (
    <div>
      <Componente4 onChangeEstado={setEstado} /> {/* Modificara el estado */}
      <Componente5 estado={estado} /> {/* Renderizara el estado */}
    </div>
  );
}
