import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Greet from './customComponents/greet';
import Welcome from './customComponents/classComponent';
import JsxFunction from './customComponents/exampleJsx';
import State from './customComponents/state';
import SetStateUsage from "./customComponents/setState";
import ClassDeStruct from "./customComponents/destructuring";
import FCClickHandler from "./customComponents/eventHandlerFC";
import CCClickHandler from "./customComponents/eventHandlerCC";
import EventBind from "./customComponents/eventBind";
import ParentPropsCommunication from "./customComponents/parentsProps";
import ConditionalRendering from "./customComponents/conditionalRendering"
import ListRendering from "./customComponents/listRendering"
import KeyInListRendeing from "./customComponents/keyInListRendeing"
import LearnStyling from "./customComponents/learnStyling"
import InlineStyle from "./customComponents/inlineStyle"
import styles from "./css/styleModule.module.css"
import Formhanler from "./customComponents/formhanler"
import LifeCycleMethodA from "./customComponents/lifeCycleMethodA"
import LifeCycleB from "./customComponents/lifeCycleB"
import ParentOfPureRegularCom from "./customComponents/parentOfPureRegularCom"


function App(props) {
  let s="Hello";
 
  return (
    <div className={styles.moduleDemo}>
      <ParentOfPureRegularCom />
      {/* <LifeCycleB /> */}
      {/* <LifeCycleMethodA /> */}
      {/* <Formhanler /> */}
      {/* <InlineStyle />
      <LearnStyling /> */}
      {/* <KeyInListRendeing /> */}
      {/* <ListRendering /> */}
      {/* <ConditionalRendering /> */}
      {/* <ParentPropsCommunication /> */}
      {/* <EventBind /> */}
      {/* <FCClickHandler />
      <CCClickHandler /> */}
      {/* <SetStateUsage/>
      <ClassDeStruct name="hema" age="24"/> */}
      {/* <h1>{s} {props.name} and your age {props.age}</h1>
      <h2>{props.count}</h2>
      <Greet name="hema">
        this is childreen
      </Greet>
      <Welcome data="ntg"/>
      <JsxFunction>Hey</JsxFunction> */}
      {/* <State /> */}

    </div>
  );
}

export default App;
