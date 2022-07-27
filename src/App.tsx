import "./App.css";
import { useEffect, useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { isWebViewBridgeAvailable, nativeAlert } from "@tef-novum/webview-bridge";

function App() {
  const [mensaje, setMensaje] = useState("--");
  const [mensajeEnviar, setMensajeEnviar] = useState("sin mensaje");
  const [userAgent, setuserAgent] = useState("");
  const [myItemStorage, setMyItemStorage] = useState(localStorage.getItem('micolor'));

  const getFromAndroid = (event : any) => {
    event.preventDefault();
    console.log('llega a mensaje enviar '+ mensajeEnviar);
    localStorage.setItem('micolor', mensajeEnviar);
    setMyItemStorage(localStorage.getItem('micolor') || '');
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
    // localStorage.setItem('micolor', 'red');
    // setMyItemStorage(localStorage.getItem('micolor') || '');
  };

  useEffect(() => {
    setuserAgent(window.navigator.userAgent);
    //localStorage.setItem('micolor', 'red');
  }, []);

  window.changeText = function (msg: string) {
    console.log("llega 1");
    setMensaje(msg);
    alert("valor");
  };

  if (isWebViewBridgeAvailable()) {
    nativeAlert({message: 'mensaje',title: 'titulo',buttonText: 'texto del boton'}); // use bridge
  } else {
    alert('Hello2'); // use alternative implementation
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>este es el mensaje a recibir: {mensaje}</p>
        <p>valor del storage:{localStorage.getItem('micolor')}</p>
        {/* <p>{userAgent}</p> */}
        <form onSubmit={getFromAndroid}>
        <label>
          A enviar:
          <input type="text" name="mensajeEnviar" onChange={handleInputChange} />
        </label>
        <button type="submit" className="w3-button w3-blue">
          Enviar a Androidd
        </button>
        </form>
      </header>
    </div>
  );
}

export default App;
