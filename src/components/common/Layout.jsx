import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'


//outlet - placeholder - to arrange components - where all other components will be rendered
function Layout() {
  return (<div>

    <Navbar/>
    <Outlet/>

    <Footer/>


    </div>
  )
}

export default Layout