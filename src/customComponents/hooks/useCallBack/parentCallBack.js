import React, { useCallback, useState } from 'react'
import TitleUseCallBack from './titleUseCallBack'
import IncrementButton from './incrementButton'
import DisplayData from './displayData'

function ParentCallBack() {
    const [age,setAge] = useState(24);
    const [salary,setSalary] = useState(50000);
    const handleAge = useCallback( () =>{
        setAge(prevState=>prevState+1);
    },[age])
    const handleSalary = useCallback(() =>{
        setSalary(prevState=>prevState+1000);
    },[salary]) 
  return (
    <div>
        <TitleUseCallBack/>
        <DisplayData text="age" value={age}/>
        <IncrementButton text="increseAge" handler={handleAge} />
        <DisplayData text="salary" value={salary}/>
        <IncrementButton text="increseSalary" handler={handleSalary} />
    </div>
  )
}

export default ParentCallBack