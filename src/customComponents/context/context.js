import React from "react";

const context = React.createContext({name:"defaultName"})  //passing default values

const ProviderContext = context.Provider
const ConsumerContext = context.Consumer

export{ProviderContext,ConsumerContext}

export default context //andvanced