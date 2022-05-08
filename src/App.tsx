import React from 'react';
import logo from './logo.svg';
import './App.css';
import {nativeAlert} from '@tef-novum/webview-bridge';

function App() {

  const myfunction = () => {

    nativeAlert({
      message: 'Purchase completed!',
      title: 'Ok!',
      buttonText: 'prueba'
  }).then((res) => {
      console.log('alert closed');
  });

  }

  myfunction();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
