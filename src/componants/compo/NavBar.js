import { Link } from 'react-router-dom'


import React from 'react'

function NavBar() {
  return (
    <div className='bg-slate-300 h-16 w-full flex justify-between items-center border '>
      <div className=' w-full flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to="/">
               <h1 className='font-bold text-2xl'>AuthApplication</h1>
          </Link>
          <ul className='flex gap-4'>
               <Link to="/">
                    <li>Home</li>
               </Link>
               <Link to="/About">
                    <li>about</li>
               </Link>
               <Link to="/SignIn">
                    <li>signIn</li>
               </Link>
               <Link to="/SignUp">
                    <li>SignUp</li>
               </Link>
               
          </ul>
      </div>
      
    </div>
  )
}

export default NavBar




