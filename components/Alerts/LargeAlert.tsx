import React, { ReactNode } from "react";

interface LargeAlertProps {
  children: ReactNode;
  tipo: string;
}

export function LargeAlert({ children, tipo }: LargeAlertProps) {
  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {children}
    </div>
  );
}

export const Titulo = ({ children }: { children: ReactNode }) => (
  <h4 className="alert-heading">{children}</h4>
);

const CustomAlert = { LargeAlert, Titulo };

export default CustomAlert;
