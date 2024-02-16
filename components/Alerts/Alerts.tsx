import { ReactNode } from "react";

interface SimpleAlertProps {
  mensaje: string;
  tipo: string;
}

export const SimpleAlert = ({ mensaje, tipo }: SimpleAlertProps) => (
  <div className={`alert alert-${tipo}`} role="alert">
    {mensaje}
  </div>
);

interface LargeAlertDefaultProps {
  titulo: string;
  mensaje1: string;
  mensaje2: string;
  tipo: string;
}

export const LargeAlertDefault = ({
  mensaje1,
  mensaje2,
  tipo,
  titulo,
}: LargeAlertDefaultProps) => (
  <div className={`alert alert-${tipo}`} role="alert">
    <h4 className="alert-heading">{titulo}</h4>
    <p>{mensaje1}</p>
    <hr />
    <p className="mb-0">{mensaje2}</p>
  </div>
);

interface AlertCloseProps {
  buttonClose?: boolean;
  importante: string;
  mensaje: string;
}

export const AlertClose = ({
  buttonClose = true,
  mensaje,
  importante,
}: AlertCloseProps) => (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{importante}</strong> {mensaje}
    {buttonClose && (
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    )}
  </div>
);
