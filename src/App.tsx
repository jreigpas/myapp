import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { nativeAlert } from "@tef-novum/webview-bridge";

function App() {
  const myfunction = () => {
    nativeAlert({
      message: "Purchase completed!",
      title: "Ok!",
      buttonText: "prueba",
    }).then((res) => {
      console.log("alert closed");
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={myfunction} />
      </header>
    </div>
  );
}

export default App;
