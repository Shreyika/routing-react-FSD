import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

//useparams and axios
function Product() {

    const{id}=useParams()

    //https://fakestoreapi.com/products/{id}

    const[product,setProduct]=useState(null)

    const fetchProduct=async()=>{
      try {
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        
      }
      
      
    }

    useEffect(()=>{
      fetchProduct()
    },[])

  return (


    <div>
        <h1>product component {id}</h1>
        

    </div>
  )
}

export default Product