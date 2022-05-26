import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  const [mensaje, setMensaje] = useState("--");
  const [mensajeEnviar, setMensajeEnviar] = useState("sin mensaje");

  const getFromReact = () => {
      console.log('llega a mensaje enviar '+ mensajeEnviar);
      window.Native.getFromReact(mensajeEnviar);
  };

  const handleInputChange = (event: any) => {
    console.log('valor:'+event.target.value);
    setMensajeEnviar(event.target.value);
  };


  window.getFromNative = function (msg: string) {
    console.log("llega 1");
    setMensaje(msg);
    alert("valor");
  };

  return (
<BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="myApp/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
