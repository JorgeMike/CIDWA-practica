"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function Formulario1() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(check);
    /* Una vez que se tiene esta informacion se usa el
    endpoint de login para enviar estos datos y validarlos,
    comunmente si la respuesta es exitosa, el endpoint retorna un token,
    nosotros usamos jwt*/
  };

  return (
    <div className="w-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            value={email}
            required
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            minLength={10}
            value={password}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check"
            onChange={(e) => setCheck(e.target.checked)}
            checked={check}
            required
          />
          <label className="form-check-label" htmlFor="check">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
