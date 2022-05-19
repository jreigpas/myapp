import "./App.css";
import { useState } from "react";

interface WebAppInterface {
  getFromAndroid(toast: string): any;
}

function App() {
  const [mensaje, setMensaje] = useState("sin mensaje");
  let Android: any;

  const getFromAndroid = () => {
    //if (android){
        Android.getFromAndroid("informacion desde React");
    //}
  };

  window.changeText = function (msg: string) {
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
          onClick={getFromAndroid}
        >
          from React
        </button>
      </header>
    </div>
  );
}

export default App;
