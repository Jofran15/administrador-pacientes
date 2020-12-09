

import React, { useState } from "react";



const Formulario = ({crearCita}) => {
  

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(null);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //exttraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Agregar cita formulario

  const submitCita = (e) => {
    e.preventDefault();

    //validación
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //Eliminar el mensaje previo
    actualizarError(false);

    //asignar un ID
    const { v4: uuidv4 } = require("uuid");
    cita.id = uuidv4();


    //crear una cita
    crearCita(cita)

    //reiniciar el form

  actualizarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  })
  };
  

  return (
    <div>
      <h2>Crear Cita para </h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatortios</p>
      ) : null}

      <form onSubmit={submitCita}>
      <label> Nombre de paciente</label>
        <input
        
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="mascota"
          onChange={actualizarState}
          value={mascota}
        ></input>

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        ></input>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        ></input>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        ></input>

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;
