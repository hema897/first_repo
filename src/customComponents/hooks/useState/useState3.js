import React ,{useState} from 'react'

function useState3() {
    const [stateObj,setObj] = useState({firstName:"",lastName:""})
    const {firstName,lastName}=stateObj
    const changeHandler = (e) =>{
         setObj({...stateObj,[e.target.name]:e.target.value})
    }
  return (
    
    <div>
        <form >
            <input type="text" onChange={changeHandler} name="firstName" value={firstName} />
            <input type="text" onChange={changeHandler} name="lastName" value={lastName} />
            <h2>{`firstName: ${firstName}`}</h2>
            <h2>{`lastName: ${lastName}`}</h2>
        </form>
        {/* <button type='submit'>save</button> */}
    </div>
  )
}

export default useState3