"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  let contadorLet: number = 0;
  const [contador, setContador] = useState<number>(0);
  const [contadorF, setContadorF] = useState<number>(0);
  const [estado, setEstado] = useState<string>("Default");

  const aumentarContadorLet = () => {
    console.log(contadorLet);
    contadorLet++;
    console.log(contadorLet);
  };

  const disminuirContadorLet = () => {
    contadorLet--;
  };

  const aumentarContador = () => {
    setContador(contador + 1);
    +1;
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  const aumentarContadorF = () => {
    setContadorF((a) => a + 1);
  };

  const disminuirContadorF = () => {
    setContadorF((a) => a - 1);
  };

  const changeEstado = (nuevoEstado: string) => {
    setEstado(nuevoEstado); //actualizando a Visto

    console.log(estado); //imprime Default (el valor anterior)
  };
  return (
    <div className="container">
      <h1 className="mt-3 text-center">Hooks: useState()</h1>
      <p className="mt-3">
        Por defecto conocemos constantes y variables en TypeScript, pero estas
        declaracion son limitadas en cuanto a funcionalidad de renderizado en
        react. por ejemplo.
      </p>
      <h2 className="fs-1">Contador</h2>
      <p>
        Si declaramos una variable de tipo <code>let contador</code> y despues
        la actualizamos con una funcion, no afectara a la UI, ya que de esta
        manera no estamos indicandole a react que un estado (variable) a
        cambiado, entonces react no sabe que debe volver a renderizar un
        componente
      </p>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={() => aumentarContadorLet()}
      >
        Aumentar contador
      </button>
      <p className="text-center mt-3">Contador: {contadorLet}</p>
      <button
        type="button"
        className="btn btn-danger w-100"
        onClick={() => disminuirContadorLet()}
      >
        Disminuir contador
      </button>
      <h3 className="mt-4">Contador state</h3>
      <p>
        El hook de useState retorna un array de dos posiciones, un estado y una
        funcion que establece al estado, dentro de la funcion useState se coloca
        el valor inicial del estado
      </p>
      <code className="text-center d-block mx-auto mb-3">
        const [state, setState] = useState(initialState)
      </code>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={() => aumentarContador()}
      >
        Aumentar contador
      </button>
      <p className="text-center mt-3">Contador: {contador}</p>
      <button
        type="button"
        className="btn btn-danger w-100"
        onClick={() => {
          disminuirContador();
        }}
      >
        Disminuir contador
      </button>
      <p className="mt-3">
        Al momento de actualizar el estado por medio de su funcion setter, SI
        estamos indicandole a react que algo ha cambiado, (react cuando recibe
        esta notificacion de cambio hace una comparativa del DOM anterior con el
        que se va actualizar y modifica solo lo que ha cambiado y el resto lo
        deja igual)
      </p>
      <h3 className="mt-4">Valor del useState</h3>
      <p>
        Como se menciono useState retorna un valor y una funcion que cambia ese
        valor, este valor puede cambiar llamando al valor local:
      </p>
      <code className="text-center d-block mx-auto mb-3">
        setContador(contador + 1)
      </code>
      <p>
        La función set también puede aceptar una función como argumento. Esta
        función recibe el valor actual del estado como parámetro y devuelve el
        nuevo valor del estado.
      </p>
      <code className="text-center d-block mx-auto mb-3">
        setContador(estadoPrevio =&gt; estadoPrevio + 1)
      </code>
      <div>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => aumentarContadorF()}
        >
          Aumentar contador
        </button>
        <p className="text-center mt-3">Contador: {contadorF}</p>
        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={() => {
            disminuirContadorF();
          }}
        >
          Disminuir contador
        </button>
      </div>
      <h2 className="mt-4">Cual es la diferencia?</h2>
      <h3>
        Actualizacion directa <code>setContador(contador + 1)</code>
      </h3>
      <ul>
        <li>Remplazo del valor anterior</li>
        <li>Simple</li>
        <li>Riesgo de una actualizacion equivocada</li>
      </ul>
      <h3>
        Actualizacion funcional{" "}
        <code>setContador(estadoPrevio =&gt; estadoPrevio + 1)</code>
      </h3>
      <ul>
        <li>Actualizacion del valor anterior</li>
        <li>Sintaxis mas compleja si no la habias visto antes</li>
        <li>Actualizacion en una sola linea</li>
        <li>React optimiza la actualizacion funcional</li>
        <li>Es recomendado pero no obligatorio</li>
      </ul>
      <h3 className="text-warning">IMPORTANTE</h3>
      <p>
        Algo muy importante de useState es saber que la actualizacion del estado
        solo ocurre hasta la siguiende compilacion de codigo. es decir que si
        hacemos una actualizacion de estado e imprimimos el estado no veremos la
        actualizacion reflejada.
      </p>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={() => changeEstado("Visto")}
      >
        Cambiar estado
      </button>
      <p className="text-center mt-3">Estado: {estado}</p>
      <h2 className="mt-4">Practica</h2>
      <h3>Ejercicio 1: Contador 2.0</h3>
      <p>
        Realiza un contador que tenga 6 botones, 3 botones deben de aumentar, y
        los otros 3 deben disminuir, cada boton debe aumentar y disminuir en
        cantidades diferentes. Realiza un diseno diferente al visto durante el
        entrenamiento. Utiliza el hook de useState()
      </p>
      <h3>Ejercicio 2: Estado string</h3>
      <p>
        Crear una función que añada el apellido a un estado de tipo string
        utilizando la actualización funcional. Incluir un botón que ejecute esta
        función y una etiqueta <code>p</code> que muestre el string. Agregar
        otro botón para resetear el estado al valor inicial con el que se
        inicializó.
      </p>
      <h3>Ejercicio 3: Botones</h3>
      <p>
        Crear cuatro botones, cada uno de un color diferente. Estos deben estar
        dispuestos horizontalmente, uno al lado del otro. Al presionar
        cualquiera de estos botones, se debe mostrar el color del botón que fue
        presionado.
      </p>
      <h3>Ejercicio 4: Contador Dinámico</h3>
      <p>
        Desarrolla un componente en React que implemente dos contadores
        interactivos. El primer contador funcionará como un controlador para
        determinar el valor de incremento o decremento del segundo contador. De
        esta forma, el primer contador ajustará "cuánto" avanza o retrocede el
        segundo contador con cada operación.
      </p>
      <h3>Ejercicio 5: Contador 2.0</h3>
      <p>
        Desarrolla un contador que aumente y disminuye de uno en uno pero que
        tenga un texto que menciones y el contador aumento o disminuyo
      </p>
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
