import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './greet';



function app(props) {
  let s="Hello"
  console.log(props)
  return (
    <div>
      <h1>{s} {props.name} and your age {props.age}</h1>
      <Hello/>
    </div>
    // React.createElement(
    //   'div',
    //   null,
    //   React.createElement(
    //     'h1',null,"Hello World1"
    //   )
    // )
    // <h1>Hello World</h1>
  );
}

export default app;
