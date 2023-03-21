import React from 'react'
import { useSearchParams } from 'react-router-dom';
export const SearchParams = () => {
    const [searchParam,setSearchParams] = useSearchParams();

    console.log(searchParam.get('lastName'),"SearchParam")
    const setParams = () =>{
        setSearchParams({lastName:"botla"})
    }
  return (
    <div>SearchParams
        <button onClick={setParams}>setParam</button>
    </div>
  )
}
