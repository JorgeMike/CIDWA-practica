import Componente3 from "@/components/States/Componente3";
import React from "react";

export default function page() {
  return (
    <div className="container mt-5">
      <h1 className="mt-3 text-center">Hooks: useState()</h1>
      <h2>Paso de Estados entre Componentes por Props</h2>

      <p>
        Ya vimos que los componentes aunque sean el mismo, pueden tener estados
        independientes, pero que pasa si queremos que si exista una dependencia
        entre componentes. Esto se soluciona con el paso de estados por props
      </p>
      <div className="border rounded p-2">
        <Componente3 />
      </div>

      <h2 className="mt-4">Practica</h2>
      <p>
        Modifica los componentes creados para que si se presiona el boton mas de
        una vez se condicione si el mensaje es de adios lo cambie a hola y si es
        de hola lo cambie a adios, y el mensaje del boton cambie a "saludar
        mundo" o "despedirse mundo", dame un cambio al,diseno de los componentes
      </p>
    </div>
  );
}
