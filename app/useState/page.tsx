"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  return (
    <div className="container">
      <h1 className="mt-3 text-center">Hooks: useState()</h1>
      <h2 className="fs-1 mt-3">Que es un hook?</h2>
      <p>
        son herramientas especial que te permite "enganchar" y utilizar
        características de React (como el estado y efectos secundarios) en tus
        componentes funcionales de una manera más fácil y ordenada, sin tener
        que lidiar con la complejidad de las clases.{" "}
      </p>
      <p>
        Para nuestro aprendizaje de <code>useState</code> dividiremos esto por
        capitulos
      </p>
      <ul className="list-group">
        <li className="list-group-item ">
          <Link href={"/useState/cap1"}>
            Capitulo 1: Reconocimiento de useState y Primeras Prácticas
          </Link>
        </li>
        <li className="list-group-item ">
          <Link href={"/useState/cap2"}>
            Capitulo 2: Manejo de Estados Independientes en Componentes
          </Link>
        </li>
        <li className="list-group-item ">
          <Link href={"/useState/cap3"}>
            Capitulo 3: Paso de Estados entre Componentes por Props
          </Link>
        </li>
        <li className="list-group-item ">
          <Link href={"/useState/cap4"}>
            Capitulo 4: Creación de Formularios Sencillos con useState
          </Link>
        </li>
        <li className="list-group-item ">
          <Link href={"/useState/cap5"}>
            Capitulo 5: Gestión de Formularios con Objetos
          </Link>
        </li>
        <li className="list-group-item ">
          <Link href={"/useState/cap6"}>
            Capitulo 6: useState con Arreglos: Técnicas y Ejemplos
          </Link>
        </li>
      </ul>
      <div className="d-flex justify-content-end my-5">
        <Link href={"/"} className="btn btn-secondary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
