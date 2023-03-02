import React from 'react';
import ListPerson from './listPerson'

function listRendering(props) {
    // let person = ["hema","botla","hello"] one
    let person=[
        {name:"hema",
        age: 24,
        branch: "cse"
    },
    {name:"gayathri",
        age: 25,
        branch: "IT"
    },
    {name:"swathi",
        age: 22,
        branch: "civil"
    }

    ]
    console.log(person)
    let personList=person.map(obj => <ListPerson person={obj} />)
  return ( personList
    // <div>
    //     <div>persons</div>
    //     {/* {person.map(name=><h2>{name} hello</h2>)}        */}                        //one
    //     {/* {person.map(obj => <h2>I'm  {obj.name} with age {obj.age} and studied {obj.branch} </h2>)} //two */}
      
        
    // </div>
  )
}

export default listRendering