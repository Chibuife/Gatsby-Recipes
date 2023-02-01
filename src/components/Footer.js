import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white  bg-black px-auto w-full pt-5 pb-5 absolute left-0 right-0 mt-10'>
      <p className='text-center'>
        &copy; {new Date().getFullYear()} <span className='text-primary-500'>SimplyRecipies</span> Built with <a className='text-primary-500' href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer