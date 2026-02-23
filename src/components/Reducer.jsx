import React, { useReducer } from 'react'

//creating counter using reducer
function Reducer() {

    //state parameter has the old value, inital value
    const reducer=(state,action)=>{

        switch(action.type){
            case "INC":
                return state+1;
            case "DEC":
                return state-1;
            case "RESET":
                return 0;
            case "DOUBLE":
                return state*action.payload;
        }
        
    }

    //alternate to usestate - for complex logic involving multiple values - function and initial state is provided
    //count is variable and dispatch is a function just like usestate destructing
    //when we call dispatch, reducer function is called internally
    const [count, dispatch]=useReducer(reducer, 0)

  return (
    <div>
        <h1>count is: {count}</h1>
        <button className='btn btn-primary m-3' onClick={()=>dispatch({type:"INC"})}>
            Increment
        </button>
        <button className='btn btn-primary m-3' onClick={()=>dispatch({type:"DEC"})}>
            Decrement
        </button>
        <button className='btn btn-primary m-3' onClick={()=>dispatch({type:"RESET"})}>
            Reset
        </button>
        {/* payload is data */}
        <button className='btn btn-primary m-3' onClick={()=>dispatch({type:"DOUBLE",payload:6})}>
            Double
        </button>
    </div>
  )
}

export default Reducer