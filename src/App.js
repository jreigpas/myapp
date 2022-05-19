/* eslint-disable */
import "./App.css";
import { nativeAlert, nativeConfirm } from "@tef-novum/webview-bridge";

function App() {

  const getFromAndroid = () => { // eslint-disable-line

      const myVar = Android.getFromAndroid("informacion desde React"); // eslint-disable-line

  }

  const changeText = (msg ) => { // eslint-disable-line

    alert(msg);

}

  return (
    <div className="App">
      <header className="App-header">

      <button
          className="w3-button w3-blue"
          onClick={changeText} // eslint-disable-line
        >
          in React
        </button>

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
