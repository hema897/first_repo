import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import {Greet} from './customComponents/greet';
import Welcome from './customComponents/classComponent';
import JsxFunction from './customComponents/exampleJsx';




function App(props) {
  let s="Hello";
  

  console.log(props)
  return (
    <div>
      <h1>{s} {props.name} and your age {props.age}</h1>
      <h2>{props.count}</h2>
      <Greet/>
      <Welcome/>
      <JsxFunction>Hey</JsxFunction>
    </div>
  );
}

export default App;
