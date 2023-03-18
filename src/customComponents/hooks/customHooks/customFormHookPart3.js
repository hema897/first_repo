import { useState } from 'react'

function useFormHookPart3(initalValue) {
  const [value,setValue] = useState(initalValue);
  const reset =()=>{
    setValue(initalValue);
  }
  const bind ={
    value,
    onChange:e=>{
        setValue(e.target.value)
    }
  }
  return [value,reset,bind];
}

export default useFormHookPart3