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
import ComponentA from "./customComponents/context/componetA"
import {ProviderContext} from './customComponents/context/context'
import GetHttp from './customComponents/http/getHttp';
import PostHttp from './customComponents/http/postHttp';
import ClsComCounter from './customComponents/hooks/clsComCounter'
import FunComCounter from './customComponents/hooks/useState1'
import FunComCountAdvance from './customComponents/hooks/useState2';
import UseState3 from './customComponents/hooks/useState3';
import UseState4 from './customComponents/hooks/useState4';
import UseEffectClsCompRecap  from'./customComponents/hooks/useEffect/useEffectClsCompRecap'
import UseEffect1 from './customComponents/hooks/useEffect/useEffect1';
import ClassCompConditionalRender from './customComponents/hooks/useEffect/classCompConditionalRender';
import ConditionalRenderUseEffect from './customComponents/hooks/useEffect/conditionalRenderUseEffect';
import ClsCompRenderOnlyOnce from './customComponents/hooks/useEffect/clsCompRenderOnlyOnce';
import UseEffectRenderOnce from './customComponents/hooks/useEffect/useEffectRenderOnce'
import UseEffectCleanUp from './customComponents/hooks/useEffect/useEffectCleanUp';

function App(props) {
  let s={name:"hema"};
 
  return (
    <div className={styles.moduleDemo}>
      <UseEffectCleanUp />
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
