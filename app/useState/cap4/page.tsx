import Formulario1 from "@/components/Forms/Formulario1";
import React from "react";

export default function page() {
  return (
    <div className="container ">
      <h1 className="mt-3 text-center">Hooks: useState()</h1>
      <p className="mt-3">
        Una de las cosas que mas vemos cuando navegamos son los formularios, ya
        sean de registros, de inicio de sesion, de busquedas, de filtros, chat,
        etc
      </p>
      <p>Formulario = inputs</p>

      <div className="d-flex justify-content-center ">
        <Formulario1 />
      </div>

      <h2>Practica</h2>
      <p>
        Realizar un formulario de registro. que al enviar la informacion se
        imprima en consola la info
      </p>
    </div>
  );
}
