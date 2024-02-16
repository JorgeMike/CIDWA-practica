"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  const routing = () => {
    router.push("/");
  };

  const routingScroll = (scroll: boolean) => {
    router.push("/", { scroll: scroll });
  };

  const routingReplaceScroll = (scroll: boolean) => {
    router.replace("/", { scroll: scroll });
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="container mt-5">
      <h1>Routing en Nextjs</h1>
      <h2 className="mt-4">Creación de rutas</h2>
      <p>
        En Nextjs podemos crear rutas en forma de carpetas dentro del directorio
        app, cada carpeta debe tener dentro un archivo page.jsx o page.tsx (en
        versiones anteriores el directorio se llamaba pages y el archivo que
        debia estar dentro se llama index.jsx o index.tsx)
      </p>
      <h2 className="mt-4">Navegación entre rutas</h2>
      <h2>
        Componente <code>&lt;Link&gt;</code>
      </h2>
      <p>
        Nextjs tambien nos proporcion formas de navegar entre las rutas que
        creamos, un ejemplo del componente <code>&lt;Link&gt;</code> de Next
      </p>
      <p>
        Para hacer uso de este componente se debe importar de
        <code> import Link from 'next/link'</code> <br />
        este componente recibe 4 props:
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">prop</th>
            <th scope="col">tipo</th>
            <th scope="col">necesario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">href</th>
            <td>string</td>
            <td>Sí</td>
          </tr>
          <tr>
            <th scope="row">replace</th>
            <td>boolean</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">scroll</th>
            <td>boolean</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">prefetch</th>
            <td>boolean o null</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h3 className="fs-3 mt-4">
        href - <u>necesario </u>
      </h3>

      <p>Es la ruta a la que nos moveremos.</p>
      <Link href="/" className="btn btn-primary w-100">
        Navegar href simple
      </Link>
      <p className="mt-3">
        El mismo prop <b>href</b> tiene la posibilidad de recibir un objeto con
        las propiedades <code>pathname</code> y <code>query</code>
      </p>
      <Link
        href={{ pathname: "/", query: { name: "prueba" } }}
        className="btn btn-primary w-100"
      >
        Navegar href con objeto
      </Link>
      <h3 className="fs-2 mt-3">replace</h3>
      <p className="mt-3">
        Este prop viene por defecto en <code>false</code> si se coloca como{" "}
        <code>true</code> no se podra retroceder a la ruta anterior de donde se
        viene.
      </p>
      <Link href="/" replace className="btn btn-primary w-100">
        Navegar href y replace
      </Link>
      <h3 className="fs-2 mt-3">scroll</h3>
      <p className="mt-3">
        Este prop viene por defecto en <code>true</code>lo que hara que al
        cambiar de ruta nos lleve hasta arriba de la pagina, si se marca como{" "}
        <code>false</code> no se hara el scroll para arriba y se mantendra en la
        posicion en la que se hizo la navegación
      </p>
      <Link href="/" scroll={false} className="btn btn-primary w-100">
        Navegar href y scroll = false
      </Link>
      <h3 className="fs-3 mt-4">prefetch</h3>
      <p className="mt-3">
        Este prop viene por defecto en <code>null</code>
      </p>
      <Link href="/" prefetch className="btn btn-primary w-100">
        Navegar href y prefetch
      </Link>
      <h2 className="mt-4">
        hook <code>useRouter</code>
      </h2>
      <p>
        El hook de Next <code>useRouter</code> sirve para realizar el
        redireccionamiento de rutas, Nextj recomienda mas el uso del componente{" "}
        <code>&lt;Link&gt;</code> y el uso del hook solo para situaciones en
        donde se debe completar un proceso para realizar el redireccionamiento,
        este hook se debe de importar desde
        <code> 'next/navigation'</code>
      </p>

      <button
        type="button"
        className="btn btn-success w-100"
        onClick={() => routing()}
      >
        Navegar con useRouter
      </button>

      <p className="mt-4">
        Al igual que el componente <code>&lt;Link&gt;</code> el hook de{" "}
        <code>useRouter</code> puede recibir un objeto con propiedades que
        definan el comportamiento del enrutamiento
      </p>

      <button
        type="button"
        className="btn btn-success w-100"
        onClick={() => routingScroll(false)}
      >
        Navegar con useRouter, scroll = false
      </button>

      <p className="mt-4">
        Al igual que el componente <code>&lt;Link&gt;</code> el hook de{" "}
        <code>useRouter</code> puede hacer uso de una funcion{" "}
        <code> replace</code> para que cuando se complete la navegacion no pueda
        volver a la ruta anterior, igual que el prop replace del componente
      </p>

      <button
        type="button"
        className="btn btn-success w-100"
        onClick={() => routingReplaceScroll(false)}
      >
        Navegar con useRouter, replace
      </button>

      <p className="mt-4">
        <code>useRouter</code> tiene varias funciones asociadas al hook, otra
        importante seria <code>.back</code> hace exactamente lo mismo que si
        dieramos clic en la fecha atras del navegador.
      </p>

      <button
        type="button"
        className="btn btn-success w-100"
        onClick={() => goBack()}
      >
        Navegar con useRouter, back
      </button>

      <h2 className="mt-4">Investigación</h2>
      <p>
        Investigar las funciones <code>.refresh</code>, <code>.prefetch</code> y{" "}
        <code>.forward</code>. En el siguiente entrenamiento todos diremos lo
        que entendimos de la documentación
      </p>

      <h2 className="mt-4">Practica</h2>
      <p>Definir las rutas:</p>
      <ul>
        <li>
          <code>componentes</code>
        </li>
        <li>
          <code>useState</code>
        </li>
        <li>
          <code>useEffect</code>
        </li>
        <li>
          <code>useContext</code>
        </li>
        <li>
          <code>useReducer</code>
        </li>
        <li>
          <code>useRef</code>
        </li>
        <li>
          <code>customHooks</code>
        </li>
        <li>
          <code>axios</code>
        </li>
      </ul>
      <div className="d-flex justify-content-end mb-5">
        <Link href={"/componentes"} className="btn btn-secondary">
          Siguiente tema: Componentes y Props
        </Link>
      </div>
    </div>
  );
}
