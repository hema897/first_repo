import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <div>home
      <button onClick={()=>navigate('/order-summary')}>order</button>
    </div>
  )
}

export default Home