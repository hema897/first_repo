import  { useEffect } from 'react'

function useCustomHookSetDocTitle(count) {
  
    useEffect(()=>{
        document.title=`count - ${count}`
    },[count])

}

export default useCustomHookSetDocTitle