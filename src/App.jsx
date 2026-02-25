import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './components/Home'
import Register from './components/Register'
import Product from './components/Product'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Reducer from './components/Reducer'
import Memoization from './components/Memoization'
import {ErrorBoundary} from "react-error-boundary";

function ErrorMessage(){
  return <>
    <h1 className="bg-danger text-white">something went wrong</h1>
  </>
}

const router=createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    errorElement:<ErrorMessage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'products/:id',
        element:<Product/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'reducer',
        element:<Reducer/>
      },
      {
        path:'memoization',
        element:<Memoization/>,
        
      },
      {
        //* means if any route excluding the above declared ones
        path:'*',
        element:<NotFound/>
      },
      
    ],
  }
])

function App() {

  return (
    <>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
      
    </>
  )
}

export default App
