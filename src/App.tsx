import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { nativeAlert } from "@tef-novum/webview-bridge";

function App() {

  let window: any;
  const myfunction = () => {
    nativeAlert({
      message: "Purchase completed!",
      title: "Ok!",
      buttonText: "prueba",
    }).then((res) => {
      console.log("alert closed");
    });
  };

  const sendDataToReactNativeApp = async () => {
    //const window: any;
        window.ReactNativeWebView.postMessage('Data from WebView / Website');

  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="w3-button w3-blue" onClick={myfunction}>Click Me!</button>
        <button className="w3-button w3-blue" onClick={sendDataToReactNativeApp}>Click Me!2</button>
      </header>
    </div>
  );
}

export default App;
