import React, { useEffect } from 'react'

function Child({obj}) {

    useEffect(()=>{
        console.log("child component",data);
        
    })

  return (
    <div>Child component {obj}</div>
  )
}

export default React.memo(Child)