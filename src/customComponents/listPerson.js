import React from 'react'

function listPerson({person}) {
    console.log(person);
  return (
    <div><h2>I'm  {person.name} with age {person.age} and studied {person.branch} </h2></div>
  )
}

export default listPerson