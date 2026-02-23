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

const router=createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
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
        element:<Memoization/>
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
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
