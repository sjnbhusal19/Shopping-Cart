import React from 'react'
import { ShoppingCart, Search,Settings  } from 'lucide-react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='bg-purple-700 text-gray-300 p-2  flex justify-between '>

      <div className='flex items-center'>
       <Link to='/' className='text-xl pr-5 pl-2 hover:text-white '><h1>Shopping Cart</h1></Link>
        
        <Link to='/'
         className='pr-4 relative group'>
         <span>Inventory</span> 
          <span className='absolute  bottom-[-30px] border left-0 text-xs p-1 bg-white text-black w-[60px] hidden group-hover:inline-block'>Inventory</span>
          </Link>

          <Link to='/shopping-cart-list'
         className='pr-3 relative group flex'>
              <ShoppingCart />
               <span className='absolute  bottom-[-30px] border text-xs p-0.5 bg-white text-black w-[99px] hidden group-hover:inline-block'>Shopping Cart(0)</span>
              <span>0</span>  
                </Link>
                
      </div>

      <div className='flex items-center'>
        <div className='flex mr-4 pr-1  bg-purple-400 rounded-md h-6 m-1 '>
          <input placeholder='Search' className='bg-transparent  outline-none  p-1 text-white placeholder-white border-purple-800' />
          <button className='p-1 ' ><Search className='h-4' /></button>
          </div>
        <div className=' mr-7 '><Settings /></div>
        <div className='pr-3 mr-10 hover:text-white'>Login</div>
      </div>

    </div>
  )
}

export default NavBar