import Componente1 from "@/components/States/Componente1";
import Componente2 from "@/components/States/Componente2";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container">
      <h1 className="mt-3 text-center">Hooks: useState()</h1>
      <h2>Manejo de Estados Independientes en Componentes</h2>
      <p>
        {" "}
        El estado declarado en un componentes es independiente al de otros
        componentes, es decir si tenemos un componente con un estado e invocamos
        multiples veces al componente, cada componente tendra estados diferentes
      </p>
      <Componente1 texto="Componente 1" />
      <Componente1 texto="Componente 2" />
      <hr />
      <Componente2 aumento={2} />
      <Componente2 aumento={3} />
      <Componente2 aumento={100} />
      <Componente2 aumento={10} />
      <div className="d-flex justify-content-end my-5">
        <Link
          href={"/useState/cap1/practica"}
          className="btn btn-secondary me-4"
        >
          Practica cap1
        </Link>
        <Link href={"/useState"} className="btn btn-secondary me-4">
          Volver a useState
        </Link>
        <Link href={"/useState/cap2"} className="btn btn-secondary">
          Siguiente capitulo: capitulo 2
        </Link>
      </div>
    </div>
  );
}
