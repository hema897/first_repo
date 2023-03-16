import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
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
import RefsDemo from "./customComponents/refsDemo"
import RefParentComponent from "./customComponents/refParentComponent"
import ForwordRefParent from "./customComponents/forwordRefParent"
import PortalDemo from "./customComponents/portalDemo"
import ThrowErrorToTestErrBoundary from "./customComponents/throwErrorToTestErrBoundary"
import ErrorBoundary from './customComponents/errorBoundary';
import ClickCounterHighOrd from "./customComponents/clickCounterHighOrd"
import HoverCounterHighOrd from "./customComponents/hoverCounterHighOrd"
import RenderProps from "./customComponents/renderProps"
import ClickCounterRenderProps from "./customComponents/clickCounterRenderProps"
import HoverCounterRenderProps from "./customComponents/hoverCounterRenderProps"
// import ComponentA from "./customComponents/context/componetA"
import {ProviderContext} from './customComponents/context/context'
import GetHttp from './customComponents/http/getHttp';
import PostHttp from './customComponents/http/postHttp';
import ClsComCounter from './customComponents/hooks/useState/clsComCounter'
import FunComCounter from './customComponents/hooks/useState/useState1'
import FunComCountAdvance from './customComponents/hooks/useState/useState2';
import UseState3 from './customComponents/hooks/useState/useState3';
import UseState4 from './customComponents/hooks/useState/useState4';
import UseEffectClsCompRecap  from'./customComponents/hooks/useEffect/useEffectClsCompRecap'
import UseEffect1 from './customComponents/hooks/useEffect/useEffect1';
import ClassCompConditionalRender from './customComponents/hooks/useEffect/classCompConditionalRender';
import ConditionalRenderUseEffect from './customComponents/hooks/useEffect/conditionalRenderUseEffect';
import ClsCompRenderOnlyOnce from './customComponents/hooks/useEffect/clsCompRenderOnlyOnce';
import UseEffectRenderOnce from './customComponents/hooks/useEffect/useEffectRenderOnce'
import UseEffectCleanUp from './customComponents/hooks/useEffect/useEffectCleanUp';
import UserEffectMistakseClsCom from './customComponents/hooks/useEffect/userEffectMistakseClsCom';
import UseEffectMistakes from './customComponents/hooks/useEffect/useEffectMistakes';
import FetchData from './customComponents/hooks/useEffect/fetchingData/fetchData';
import FetchDataUsingId from './customComponents/hooks/useEffect/fetchingData/fetchDataUsingId';
import FetchDataUsingButtonClick from './customComponents/hooks/useEffect/fetchingData/fetchDataUsingButtonClick';
import ContextA from './customComponents/hooks/useContext/contextA';
import CountUseReducer from './customComponents/hooks/useReducer/countUseReducer';
import CountObjectUseReducer from './customComponents/hooks/useReducer/countObjectUseReducer';
import MultipleUseReducers from './customComponents/hooks/useReducer/multipleUseReducers';
import ComponentA from './customComponents/hooks/useReducer/useReducerWithUseContext/componentA';
import ComponentB from './customComponents/hooks/useReducer/useReducerWithUseContext/componentB';
import ComponentC from './customComponents/hooks/useReducer/useReducerWithUseContext/componentC';
import FetchingDataUseReducer from './customComponents/hooks/useReducer/fetchingDataUseReducerPart1';
import FetchingDataUseReducerPart2 from './customComponents/hooks/useReducer/fetchingDataUseReducerPart2';
import ParentCallBack from './customComponents/hooks/useCallBack/parentCallBack';
import UseMemo from './customComponents/hooks/useMemo/useMemo'


export const UserContext = React.createContext()
export const lastContext = React.createContext()
const initialState = 0
const reducer = (currentState,action)=>{
  console.log(currentState,"currentState")
  switch(action){
      case "increment":
          return currentState+1
      case "decrement":
          return currentState-1
      case "reset":
          return initialState
  }
}
export const useReducerContext = React.createContext();
function App(props) {
  let s={name:"hema"};
  const [count,dispatch] = useReducer(reducer,initialState)       //global state
 
  return (
    <div className={styles.moduleDemo}>
      <UseMemo />
      {/* <ParentCallBack/> */}
      {/* <FetchingDataUseReducerPart2 /> */}
      {/* <FetchingDataUseReducer /> */}
      {/* <h2>{count}</h2>
      <useReducerContext.Provider value={{count:count,dispatch:dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC/>
      </useReducerContext.Provider> */}
      {/* <MultipleUseReducers /> */}
      {/* <CountObjectUseReducer /> */}
      {/* <CountUseReducer /> */}
      {/* <UserContext.Provider value="hema">
        <lastContext.Provider value="Botla">
          <ContextA />
        </lastContext.Provider>
        
      </UserContext.Provider> */}
      
      
      {/* <FetchDataUsingButtonClick/> */}
       {/* <FetchDataUsingId /> */}
      {/* <FetchData /> */}
      {/* <UserEffectMistakseClsCom />
      <UseEffectMistakes /> */}
      {/* <UseEffectCleanUp /> */}
       {/* <ClsCompRenderOnlyOnce/>
       <UseEffectRenderOnce /> */}
      {/* <ClassCompConditionalRender />
      < ConditionalRenderUseEffect /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffectClsCompRecap /> */}
      {/* <UseState4 /> */}
      {/* <UseState3 /> */}
      {/* <FunComCountAdvance /> */}
      {/* <FunComCounter /> */}
      {/* <ClsComCounter /> */}
      {/* <PostHttp /> */}
      {/* <GetHttp /> */}
      {/* <ProviderContext value={s}>
        <ComponentA />
      </ProviderContext> */}
      
      {/* <RenderProps render={(count,incrementCount)=>
        (<ClickCounterRenderProps count={count} incrementCount={incrementCount} />)
      } /> */}
      {/* <RenderProps>
      {(count,incrementCount)=>(<HoverCounterRenderProps count={count} incrementCount={incrementCount}/>)}
      </RenderProps> */}
      {/* <ClickCounterHighOrd />
      <HoverCounterHighOrd name="hema" /> */}
      {/* <ErrorBoundary>
        <ThrowErrorToTestErrBoundary heroName="batMan"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <ThrowErrorToTestErrBoundary heroName="jokerr"/>
      </ErrorBoundary> */}
      
      {/* <PortalDemo />
      <ForwordRefParent /> */}
      {/* <RefParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <ParentOfPureRegularCom /> */}
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
