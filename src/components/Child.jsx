import React, { useEffect } from 'react'

function Child({data}) {

    useEffect(()=>{
        console.log("child component",data);
        
    })

  return (
    <div>Child component</div>
  )
}

export default React.memo(Child)