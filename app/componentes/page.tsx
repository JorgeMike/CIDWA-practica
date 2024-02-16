import {
  AlertClose,
  LargeAlertDefault,
  SimpleAlert,
} from "@/components/Alerts/Alerts";
import CustomAlert, { LargeAlert } from "@/components/Alerts/LargeAlert";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container mt-5">
      <h1>Componentes y Props</h1>
      <h2 className="mt-4">Que es un componente?</h2>
      <p>
        Un componente es un pedazo de codigo, que cumple con la funcionalidad de
        renderizar con ciertos estilos, efectos o funcionalidad, este debe de
        poder ser accesible y <strong>reciclable</strong>, tambien sirven para
        subdivir y hacer escalable la estructura de la pagina.
      </p>
      <p>
        Parte clave de un componente en react es que todos los componentes deben
        empezar con mayuscula
      </p>
      <h2 className="mt-4">Que son los props?</h2>
      <p>
        Los props (propiedades por su traduccion al espanol) son datos,
        informacion que podemos pasar a los componentes hijos (NO se pueden
        pasar props de un hijo a un padre) cuando se importa un componete los
        props se colocan despues del nombre del componente, asi como los
        atributos de las etiquetas de html
      </p>
      <p>
        Por ejemplo <br /> En html tenemos: <code>&lt;a href=""&gt;</code>{" "}
        <br /> En componentes tenemos{" "}
        <code>&lt;Link href="" scroll=false&gt;</code>
      </p>
      <SimpleAlert mensaje="Esta es una alerta" tipo="primary" />
      <SimpleAlert mensaje="Esta es una alerta de warning" tipo="warning" />
      <LargeAlertDefault
        tipo="danger"
        titulo="Precaucion"
        mensaje1="Estas apunto de eliminar una seccion de la historia"
        mensaje2="Esto no sera reversible, es un cambio permanente"
      />
      <LargeAlertDefault
        tipo="secondary"
        titulo="Precaucion"
        mensaje1="Estas apunto de eliminar una seccion de la historia"
        mensaje2="Esto no sera reversible, es un cambio permanente"
      />
      <LargeAlertDefault
        tipo="light"
        titulo="Precaucion"
        mensaje1="Estas apunto de eliminar una seccion de la historia"
        mensaje2="Esto no sera reversible, es un cambio permanente"
      />
      <h2 className="mt-4">Props por defecto</h2>
      <p>
        Pasar props podria llegar a ser inecesario y qeudarnos con una version
        del componente por default, es dedcir se pueden colocar porps opcionales
        por ejemplo:
      </p>
      <AlertClose importante="ALERTA" mensaje="Esta apunto de eliminar" />
      <AlertClose
        importante="ALERTA"
        mensaje="Esta apunto de eliminar"
        buttonClose={false}
      />
      <h2 className="mt-4">Children</h2>
      <p>
        Los <code>children</code> son los hijos de un componente, son
        componentes que estan por debajo de el
      </p>
      <CustomAlert.LargeAlert tipo="primary">
        <CustomAlert.Titulo>Titulo del alert</CustomAlert.Titulo>
        <p>HOLA MUNDO</p>
        <hr />
        <p>Adios mundo</p>
        <hr />
      </CustomAlert.LargeAlert>
      <h2 className="mt-4">Practica</h2>
      En el la carpeta de spinners de components crea un componente de de
      spinner que muestre un mensaje que se pase por props, anadir lo que
      ustedes consideren adecuado para practicar Recomendaciones si desean
      practicar:
      <ul>
        <li>Pasar el ancho del spinner por props</li>
        <li>Pasar que tipo de shadow podria tener el spiner</li>
        <li>pasar algun border que pueda tener el spinner</li>
        <li>
          cambiar el background por props y que tenga un background por defecto
        </li>
      </ul>
      <div className="d-flex justify-content-end mb-5">
        <Link href={"/componentes/practica"} className="btn btn-secondary me-3">
          Practica
        </Link>
        <Link href={"/useState"} className="btn btn-secondary">
          Siguiente tema: useState
        </Link>
      </div>
    </div>
  );
}
