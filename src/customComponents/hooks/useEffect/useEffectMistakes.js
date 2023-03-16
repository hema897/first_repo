import React, { useEffect, useState } from 'react'

function UseEffectMistakes() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState(0);
    const thick = () =>{
        setCount(prevState=>prevState+1);
        // setName(prevState=>{
        //     console.log("hii",prevState-1)
        // })
        console.log(name,count)
    }
    useEffect(()=>{
        const interval = setInterval(thick,1000)
        return(()=>{
            clearInterval(interval);
        })
    },[])
  return (
    <div>
        {count}
        {name}
    </div>
  )
}

export default UseEffectMistakes