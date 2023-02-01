import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'

const Layout = ({children}) => {
  return (
   <div className=" w-11/12 mx-auto">
        <Navbar/>
      {children}
        <Footer/>
    </div>
  )
}

export default Layout