import React, { useState } from "react";
import logo from "../../imagenO2.jpg";
import "./Home.css";

const Home: React.FC = () => {
  const [mensaje, setMensaje] = useState("--");
  const [mensajeEnviar, setMensajeEnviar] = useState("sin mensaje");

  const getFromReact = () => {
    console.log("llega a mensaje enviar " + mensajeEnviar);
    window.Native.getFromReact(mensajeEnviar);
  };

  const handleInputChange = (event: any) => {
    console.log("valor:" + event.target.value);
    setMensajeEnviar(event.target.value);
  };

  window.getFromNative = function (msg: string) {
    console.log("llega 1");
    setMensaje(msg);
    alert("valor");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} /> */}
        <p>{process.env.PUBLIC_URL}</p>
        <p>este es el mensaje a recibir: {mensaje}</p>
        <form onSubmit={getFromReact}>
          <label>
            A enviar:
            <input
              type="text"
              name="mensajeEnviar"
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="w3-button w3-blue">
            Enviar a Android
          </button>
        </form>
      </header>
    </div>
  );
};

export default Home;
