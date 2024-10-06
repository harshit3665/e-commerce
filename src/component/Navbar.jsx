import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const{cart}=useSelector((state)=>state)
  return (
       
       <div >
        <div className='flex items-center h-20 max-w-6xl mx-auto justify-between'>
          <NavLink to="/">
          <p className='ml-5 text-slate-100'>logo</p>
          </NavLink>
        

          <div className='flex  items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to="/"> <p>Home</p></NavLink>
            
            <NavLink to="/cart">
            <div className='relative'>
             <FaCartShopping  className='text-xl'/>
             {
              cart.length >0 &&
              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center
              items-center animate-bounce rounded-full text-white'>{cart.length}</span>
             }
              </div>
           </NavLink>
          
           
          </div>

        </div>
       </div>
    
  )
}

export default Navbar
