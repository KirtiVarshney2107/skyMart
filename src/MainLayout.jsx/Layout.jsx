import React from 'react'
import Navbar from '../components/HomeCom/Navbar'
import {Outlet} from "react-router"
import CartDrawer from '../components/CartDrawer'
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <CartDrawer />
    </div>
  )
}

export default Layout
