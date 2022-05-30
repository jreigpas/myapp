import "./App.css";
import { useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  const [mensaje, setMensaje] = useState("--");
  const [mensajeEnviar, setMensajeEnviar] = useState("sin mensaje");

  const getFromAndroid = (event : any) => {
    event.preventDefault();
    console.log('llega a mensaje enviar '+ mensajeEnviar);
    if (isAndroid) {
      window.Android.getFromAndroid(mensajeEnviar);
    } else if (isIOS) {
      window.webkit.messageHandlers.jsMessageHandler.postMessage(mensajeEnviar);
    } else {
      console.log('resto de casos');
    }
  };

  const handleInputChange = (event: any) => {
    console.log('valor:'+event.target.value);
    setMensajeEnviar(event.target.value);
  };


  window.changeText = function (msg: string) {
    console.log("llega 1");
    setMensaje(msg);
    alert("valor");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>este es el mensaje a recibir: {mensaje}</p>
        <form onSubmit={getFromAndroid}>
        <label>
          A enviar:
          <input type="text" name="mensajeEnviar" onChange={handleInputChange} />
        </label>
        <button type="submit" className="w3-button w3-blue">
          Enviar a Android
        </button>
        </form>
      </header>
    </div>
  );
}

export default App;
