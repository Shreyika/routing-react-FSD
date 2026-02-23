import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Contact() {

  const [searchParams, setSearchParams]=useSearchParams()
  return (
    <div>
      {/* http://localhost:5173/contact?name=abc */}
      <p>Name: {searchParams.get("name")}</p>
      {/* http://localhost:5173/contact?name=abc&phoneno= */}
      <p>Phone no: {searchParams.get("phoneno")}</p>

    <button className='btn btn-primary m-3' onClick={()=>setSearchParams({email:'shreyika@itvendant.com'})}>
      set search parameters
    </button>

    </div>
  )
}

export default Contact