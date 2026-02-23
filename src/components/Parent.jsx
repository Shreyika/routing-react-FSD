import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {

    const [count, setCount]=useState(0);
    const [value,setValue]=useState(0)

    const Increment=()=>{
        setCount(count+1)
        if(count%10==0)
            setValue(count)
    }

    useEffect(()=>{
        console.log("parent component");
        
    })    

  return (
    <div>
        <h4 className='m-3'>{count}</h4>

        <button
            type="button"
            class="btn btn-primary m-3"
            onClick={Increment}
        >
            Increment
        </button>
        
    <Child data={value}/>
    </div>
  )
}

export default Parent