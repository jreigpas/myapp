/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("sin mensaje");

  const getFromAndroid = () => {
    // eslint-disable-line

    const myVar = Android.getFromAndroid("informacion desde React"); // eslint-disable-line
  };

  window.changeText = function (msg) {
    console.log("llega 1");
    setMensaje(msg);
    alert("valor");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>este es el mensaje: {mensaje}</p>

        <button
          className="w3-button w3-blue"
          onClick={getFromAndroid} // eslint-disable-line
        >
          from React
        </button>
      </header>
    </div>
  );
}

export default App;
