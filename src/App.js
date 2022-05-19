/* eslint-disable */
import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { nativeAlert, nativeConfirm } from "@tef-novum/webview-bridge";

function App() {
  let window;
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
    window.ReactNativeWebView.postMessage("Data from WebView / Website");
  };

  
  const callNativeConfirm = () => {

    nativeConfirm({
      title: "Confirm",
      message: "Send message?",
      acceptText: "Yes",
      cancelText: "No",
    }).then((res) => {
      if (res) {
        console.log("message sent");
      }
    });

  }

  const getFromAndroid = () => { // eslint-disable-line


      const myVar = Android.getFromAndroid(); // eslint-disable-line
      alert(myVar);

  }


  return (
    <div className="App">
      <header className="App-header">
        <button className="w3-button w3-blue" onClick={myfunction}>
          Click Me!
        </button>
        <button
          className="w3-button w3-blue"
          onClick={sendDataToReactNativeApp}
        >
          Click Me!2
        </button>
        <button
          className="w3-button w3-blue"
          onClick={callNativeConfirm}
        >
          Click Me!3
        </button>
        <button
          className="w3-button w3-blue"
          onClick={getFromAndroid} // eslint-disable-line
        >
          from Android
        </button>




      </header>
    </div>
  );
}

export default App;
