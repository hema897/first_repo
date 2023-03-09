import React, { useState } from 'react'

function useState4() {
    const [items,setItem]=useState([])
    const addItem = () =>{
        setItem([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
  return (
    <div>
        items list
        {items.map(item => <h2 key={item.id}>{item.value}</h2>)}
        <button type="button" onClick={addItem}>AddItem</button>
    </div>
  )
}

export default useState4