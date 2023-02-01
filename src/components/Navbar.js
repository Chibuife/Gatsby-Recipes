import React from 'react'
import { Link } from 'gatsby-link'
import { FiAlignJustify } from "react-icons/fi"
import logo from '../images/logo.svg'
const Navbar = () => {

  return (
    <nav>
      <div className='flex justify-between items-center h-40'>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <button className='btn-blue py-2 md:hidden'>
          <FiAlignJustify className="text-2xl text-white" />
        </button>
        <div className='hidden md:flex w-10/12 '>
          <div className='w-80  justify-between flex ml-20 text-2xl font-thin'>
          <Link to="/">
            Home
          </Link>
          <Link to="/recipes">
            Recipes
          </Link>
          <Link to="/tags">
            Tags
          </Link>
          <Link to="/about">
            About
          </Link>
          </div>
          {/* <div > */}
            <Link className='btn-blue w-20 mx-auto md:ml-auto mr-0 text-white py-2'  to="/contact">contact</Link>
          {/* </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar