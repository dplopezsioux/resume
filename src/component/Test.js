import React, { useState } from "react";

const Padre = () => {
  const [nombre, setNombre] = useState("Soy el padre");

  const actualizador = (nombre) => {
    setNombre(nombre);
  };

  return (
    <div className="container p-5">
      <h1>Componete Padre</h1>
      <h1>Componete A Actuializar soy el padre ...- {nombre} </h1>
      <Hijo actualizador={actualizador} />
    </div>
  );
};

const Hijo = (prop) => {
  const [contador, setContador] = useState(0);
  const { actualizador } = prop;

  return (
    <div>
      <h1>Aqui el Hijo con valor de {contador}</h1>
      <button
        onClick={() => {
          setContador(5);
          console.log("Click");
          actualizador("Daniel");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Padre;
