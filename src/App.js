import Formulario from './components/Formulario'
import React, { useState } from "react";



function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([])

  //Funcion que tome las citas actuales y agregue una nueva
  const crearCita = (cita)=>{
guardarCitas([
  ...citas,cita
])

  }

  return (
    <div >
   
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
           

          </div>
          <div Name="one-half column">
            2

          </div>


        </div>

      </div >
      
    </div>
  );
}

export default App;
