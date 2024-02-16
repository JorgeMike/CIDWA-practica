import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="container mt-4">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">CIDWA X React</h1>
          <p className="col-md-8 fs-4">
            Este es el primer proyecto tiene como objetivo ser el proyecto de
            entrenamiento para CIDWA.
          </p>
          <Link href="/routing" className="btn btn-primary btn-lg ">
            Comenzar
          </Link>
        </div>
      </div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Temario</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Estructura de Nextjs
              </h3>
              <p>Como se compone un proyecto de nextjs y su significado</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Routing</h3>
              <p>
                Creación y navegación de rutas estaticas y dinamicas en Nextjs
                usando appRouter
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Componentes y props
              </h3>
              <p>
                Creacion, uso, ordenamiento de componentes y paso de props entre
                ellos
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">useState</h3>
              <p>Manejo de estados locales con el hook de useState()</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                useEffect
              </h3>
              <p>Manejo de efectos secundarios fuera del flujo de compilado</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                useContext
              </h3>
              <p>
                Proporciona una forma de compartir valores como preferencias de
                usuario, temas, o un caché de datos entre componentes
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                useReducer
              </h3>
              <p>
                Ofrece una alternativa a useState para manejar estados complejos
                mediante un reductor.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">useRef</h3>
              <p>
                Permite acceder a los elementos del DOM directamente y persistir
                valores sin re-renderizar el componente.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Custom Hooks
              </h3>
              <p>Creacion de hooks personalizados</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Axios</h3>
              <p>Aprende a usar axios para peticiones a apis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
