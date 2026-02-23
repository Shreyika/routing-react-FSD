import React from 'react'
import Parent from './Parent'

// Memoization - when same paramters are passed so instead of running/calculating the fucntion 
// again we can use the same value that was returned earlier

function Memoization() {
  return (
    <div>
        <h1>Memoization</h1>
        <hr/>
        <Parent/>
    </div>
  )
}

export default Memoization