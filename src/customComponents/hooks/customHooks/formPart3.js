import React, { useState } from 'react';
import useFormHookPart3 from './customFormHookPart3'

function FormPart3() {
    // const [firstName,setFirstName]=useState('');
    // const [lastName,setLastName]=useState('');
    const [firstName,resetFirstName,firstBind] = useFormHookPart3('');
    const [lastName,resetlastName,lastBind] = useFormHookPart3('');
    const submit=(e)=>{
        e.preventDefault();
        alert(`Hi ${firstName} ${lastName}`)
        resetFirstName()
        resetlastName()
    }
  return (
    <div>
        <form onSubmit={submit}>
            <span>first name</span>
            <input type="text" {...firstBind} />
            <span>last name</span>
            <input type="text" {...lastBind} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default FormPart3