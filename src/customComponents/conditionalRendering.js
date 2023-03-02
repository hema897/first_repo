import React, { Component } from "react";

class ConditionalRendering extends Component{
    constructor(props){
        super(props);
        this.state={login:true}
        this.login=this.login.bind(this);
    }
    login(){
        this.setState(prevState =>({login: prevState.login ? false : true}) )
    }
    render(){
        // if(this.state.login)            //one if else
        //     return(<>
        //     <h1>Hello Hema</h1>
        //     <button onClick={this.login}>Logout</button>
        //     </>)
        // else
        // return(<>
        //     <h1>Hello Visitor</h1>
        //     <button onClick={this.login}>Login</button>
        //     </>)
        // let msg                     //two element literal
        // if(this.state.login){
        //     msg=<>
        //     <h1>Hello Hema</h1>
        //     <button onClick={this.login}>Logout</button>
        //     </>
        // }
        // else{
        //     msg =<>
        //     <h1>Hello Visitor</h1>
        //     <button onClick={this.login}>Login</button>
        //     </>
        // }
        // return msg
                                                    //three terinary operator
        // return !!this.state.login ? <>              
        //     <h1>Hello Hema</h1>
        //     <button onClick={this.login}>Logout</button>
        //     </> : <>
        //     <h1>Hello Visitor</h1>
        //     <button onClick={this.login}>Login</button>
        //     </>
                                                            //short circuit
        return !!this.state.login && <> <h1>Hello Hema</h1> 
        <button onClick={this.login}>Logout</button>
        </>
    }
}

export default ConditionalRendering;